import React, { useState, useEffect, useCallback } from 'react';
import { submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, dispatch }) {

    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errorMessage, setErrorMessage] = useState({});
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateField = (field, value) => {
        switch (field) {
            case 'date':
                return value ? '' : 'Date is required.';
            case 'time':
                return value ? '' : 'Time is required.';
            case 'guests':
                return value > 0 ? '' : 'Guests must be more than 0.';
            case 'occasion':
                return value ? '' : 'Occasion is required.';
            default:
                return '';
        }
    };

    const validateForm = useCallback(() => {
        const errors = {
            date: validateField('date', date),
            time: validateField('time', time),
            guests: validateField('guests', guests),
            occasion: validateField('occasion', occasion),
        };
        setErrorMessage(errors);
        return !Object.values(errors).some(error => error);
    }, [date, time, guests, occasion]);

    useEffect(() => {
        if (formSubmitted) {
            validateForm();
        }
    }, [validateForm, formSubmitted]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: 'UPDATE_TIMES', date: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (validateForm()) {
            const formData = { date, time, guests, occasion };
            if (submitAPI(formData)) {
                navigate('/confirmed', { state: { details: formData } });
            } else {
                setErrorMessage({ form: 'Reservation failed. Please try again.' });
            }
        } else {
            setErrorMessage(prevState => ({ ...prevState, form: 'Please correct the errors above before submitting.' }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid max-w-md mx-auto p-6 gap-6 bg-gray-50 border border-gray-200 rounded-lg">
            {errorMessage.form && <div role="alert" className="text-red-500">{errorMessage.form}</div>}
            
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
            {formSubmitted && errorMessage.date && <div role="alert" className="text-red-500">{errorMessage.date}</div>}
            
            <label htmlFor="res-time" className="font-bold">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={e => setTime(e.target.value)} 
                className="p-2 border border-gray-300 rounded" 
                required 
                aria-label="Choose time"
            >
                <option value="" disabled={time !== ''}>Select a time</option>
                {availableTimes.map(timeOption => (
                    <option key={timeOption} value={timeOption}>{timeOption}</option>
                ))}
            </select>
            {formSubmitted && errorMessage.time && <div role="alert" className="text-red-500">{errorMessage.time}</div>}
            
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
            {formSubmitted && errorMessage.guests && <div role="alert" className="text-red-500">{errorMessage.guests}</div>}
            
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
            {formSubmitted && errorMessage.occasion && <div role="alert" className="text-red-500">{errorMessage.occasion}</div>}
            
            <input type="submit" value="Make Your Reservation" 
                className="p-2 text-white font-medium rounded cursor-pointer bg-custom-green hover:bg-yellow-400"
            />
        </form>
    );
}

export default BookingForm;
