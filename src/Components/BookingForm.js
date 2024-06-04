import React, { useState } from 'react';
import { submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, dispatch }) {

    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', date: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        if (submitAPI(formData)) {
          //  alert(`Reservation made for ${guests} guest(s) on ${date} at ${time} for ${occasion}`);
          navigate('/confirmed', { state: { details: formData } });
        } else {
            alert('Reservation failed. Please try again.');

        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid max-w-md mx-auto p-6 gap-6 bg-gray-50 border border-gray-200 rounded-lg">
            <label htmlFor="res-date" className="font-bold">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={handleDateChange} 
                className="p-2 border border-gray-300 rounded" 
                required 

                aria-label="Choose date"
            />
            
            <label htmlFor="res-time" className="font-bold">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={e => setTime(e.target.value)} 
                className="p-2 border border-gray-300 rounded" 
                required 
                aria-label="Choose time"
            >
                {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            
            <label htmlFor="guests" className="font-bold">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests} 
                onChange={e => setGuests(e.target.value)} 
                className="p-2 border border-gray-300 rounded" 
                required 
                aria-label="Number of guests"
            />
            
            <label htmlFor="occasion" className="font-bold">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={e => setOccasion(e.target.value)} 
                className="p-2 border border-gray-300 rounded" 
                aria-label="Occasion"
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Work">Work Event</option>
                <option value="Other">Other</option>
            </select>
            
            <input type="submit" value="Make Your Reservation" className="p-2 bg-custom-green text-white rounded cursor-pointer" />
        </form>
    );
}

export default BookingForm;