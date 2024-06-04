import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../Components/BookingForm';
import { submitAPI } from '../api';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the navigate function from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

// Mock the submitAPI function
jest.mock('../api', () => ({
  submitAPI: jest.fn()
}));

describe('BookingForm', () => {
  const availableTimes = ['12:00', '13:00', '14:00'];
  const mockDispatch = jest.fn();

  it('renders correctly', () => {
    const { getByLabelText } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );
    expect(getByLabelText('Choose date')).toBeInTheDocument();
    expect(getByLabelText('Choose time')).toBeInTheDocument();
    expect(getByLabelText('Number of guests')).toBeInTheDocument();
    expect(getByLabelText('Occasion')).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    submitAPI.mockImplementation(() => true); // Mock API to return true
    const { getByLabelText, getByText } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-10-10' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '12:00' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.click(getByText('Make Your Reservation'));

    await waitFor(() => expect(submitAPI).toHaveBeenCalledWith({
      date: '2023-10-10',
      time: '12:00',
      guests: '3',
      occasion: 'Birthday'
    }));
  });

  it('handles API failure on form submission', async () => {
    submitAPI.mockImplementation(() => false); // Mock API to return false
    const { getByLabelText, getByText, getByRole } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-10-10' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '12:00' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.click(getByText('Make Your Reservation'));

    await waitFor(() => expect(getByRole('alert')).toHaveTextContent('Reservation failed. Please try again.'));
  });
});