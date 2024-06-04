import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ConfirmedBooking() {
    const location = useLocation(); 
    const navigate = useNavigate();
    const { details } = location.state || {}; 

    if (!details) {
        return <div id="error-message">No booking details found.</div>;
    }

    const handleNewReservation = () => {
        navigate('/booking');
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="grid max-w-4xl mx-auto p-20 mt-16 mb-20 gap-6 bg-gray-50 border border-gray-200 rounded-lg"> 
            <header>
                <h1 className="text-6xl font-medium max-md:text-4xl text-custom-green">Booking Confirmed</h1>
            </header>
            <p className="mt-2 text-xl font-medium leading-7">Date: {details.date}</p>
            <p className="mt-2 text-xl font-medium leading-7">Time: {details.time}</p>
            <p className="mt-2 text-xl font-medium leading-7">Guests: {details.guests}</p>
            <p className="mt-2 text-xl font-medium leading-7">Occasion: {details.occasion}</p>
            <div className="flex mt-8 flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"> 
                <button
                    aria-label="Start a new reservation"
                    className="px-10 py-6 text-lg text-center text-black bg-yellow-400 font-medium text-custom-green rounded-xl w-full sm:w-auto"
                    tabIndex="0"
                    onClick={handleNewReservation}
                >
                    New Reservation
                </button>
                <button
                    aria-label="Return to home page"
                    className="px-10 py-6 text-lg text-center text-yellow-400 font-medium bg-custom-green rounded-xl w-full sm:w-auto"
                    tabIndex="0"
                    onClick={handleGoHome}
                >
                    Home
                </button>
            </div>
        </div>
    );
}

export default ConfirmedBooking;