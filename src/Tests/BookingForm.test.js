import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from '../Components/BookingForm';




test('Renders the BookingForm heading', () => {
    const mockAvailableTimes = ['17:00', '18:00', '19:00'];
    render(<BookingForm availableTimes={mockAvailableTimes} />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
});

describe('BookingForm', () => {
    test('submits the form and shows an alert with reservation details', async () => {
        const mockDispatch = jest.fn();
        const mockAvailableTimes = ['17:00', '18:00', '19:00'];
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();

        render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);

        const dateInput = screen.getByLabelText("Choose date");
        await userEvent.type(dateInput, '2023-10-05');

        const timeSelect = screen.getByLabelText("Choose time");
        userEvent.selectOptions(timeSelect, '18:00');

        const guestsInput = screen.getByLabelText("Number of guests");
        await userEvent.clear(guestsInput);
        await userEvent.type(guestsInput, '3');

        const occasionSelect = screen.getByLabelText("Occasion");
        userEvent.selectOptions(occasionSelect, 'Birthday');

        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(alertMock).toHaveBeenCalledWith('Reservation made for 3 guest(s) on 2023-10-05 at 18:00 for Birthday');
        });

        expect(mockDispatch).toHaveBeenCalled();

        alertMock.mockRestore();
    });
});