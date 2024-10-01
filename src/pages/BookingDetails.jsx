import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BookingDetails = () => {
    const { bookingId } = useParams();
    const navigate = useNavigate();
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        const fetchBookingDetails = async () => {
            const response = await axios.get(`http://localhost:5000/api/bookings/${bookingId}`);
            setBooking(response.data);
        };
        fetchBookingDetails();
    }, [bookingId]);

    const handleCancel = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/bookings/${bookingId}`);
            alert('Booking canceled successfully');
            navigate('/my-bookings');
        } catch (error) {
            console.error('Error canceling booking:', error);
            alert('Failed to cancel booking');
        }
    };

    return (
        <div className="container">
            {booking ? (
                <div>
                    <h2>Booking Details</h2>
                    <p>Vehicle: {booking.vehicleId.make} {booking.vehicleId.model}</p>
                    <p>Pickup Location: {booking.pickupLocation}</p>
                    <p>Start Date: {new Date(booking.startDate).toLocaleDateString()}</p>
                    <p>End Date: {new Date(booking.endDate).toLocaleDateString()}</p>
                    <button className="btn btn-danger" onClick={handleCancel}>Cancel Booking</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BookingDetails;
