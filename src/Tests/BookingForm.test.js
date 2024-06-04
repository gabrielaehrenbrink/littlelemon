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

  it('has the correct attributes for Choose date input', () => {
    const { getByLabelText } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );
    const dateInput = getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
    expect(dateInput).toHaveClass('p-2 border border-gray-300 rounded');
  });

  it('has the correct attributes for Choose time select', () => {
    const { getByLabelText } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );
    const timeSelect = getByLabelText('Choose time');
    expect(timeSelect).toHaveAttribute('required');
    expect(timeSelect).toHaveClass('p-2 border border-gray-300 rounded');
  });

  it('has the correct attributes for Number of guests input', () => {
    const { getByLabelText } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );
    const guestsInput = getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('placeholder', '1');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveClass('p-2 border border-gray-300 rounded');
  });

  it('has the correct attributes for Occasion select', () => {
    const { getByLabelText } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );
    const occasionSelect = getByLabelText('Occasion');
    expect(occasionSelect).toHaveClass('p-2 border border-gray-300 rounded');
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

    await waitFor(() => expect.toHaveTextContent('Please correct the errors above before submitting.'));
  });

  it('shows error message for invalid date input', async () => {
    const { getByLabelText, getByText, getByRole } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '12:00' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.click(getByText('Make Your Reservation'));

    await waitFor(() => expect(getByRole('alert')).toHaveTextContent('Date is required.'));
  });

  it('shows error message for invalid time input', async () => {
    const { getByLabelText, getByText, getByRole } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-10-10' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.click(getByText('Make Your Reservation'));

    await waitFor(() => expect(getByRole('alert')).toHaveTextContent('Time is required.'));
  });

  it('shows error message for invalid guests input', async () => {
    const { getByLabelText, getByText, getByRole } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-10-10' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '12:00' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '0' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    fireEvent.click(getByText('Make Your Reservation'));

    await waitFor(() => expect(getByRole('alert')).toHaveTextContent('Guests must be more than 0.'));
  });

  it('shows error message for invalid occasion input', async () => {
    const { getByLabelText, getByText, getByRole } = render(
      <Router>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </Router>
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-10-10' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '12:00' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '3' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: '' } });
    fireEvent.click(getByText('Make Your Reservation'));

    await waitFor(() => expect(getByRole('alert')).toHaveTextContent('Occasion is required.'));
  });
});
