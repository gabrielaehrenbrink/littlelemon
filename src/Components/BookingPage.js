import React from 'react';
import BookingForm from './BookingForm'; 

function BookingPage({ availableTimes, dispatch }) {
   
    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">


            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-xl font-bold mb-4">Book Your Table</h1>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} /> 
            </div>
        </div>


    );
}

export default BookingPage;