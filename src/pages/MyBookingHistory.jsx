import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyBookingHistory = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const token = localStorage.getItem('token');
            const userId = 'dummyUserId'; // Replace with actual user ID
            const response = await axios.get(`https://zoom-car-capstone.onrender.com/api/bookings/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setBookings(response.data);
        };
        fetchBookings();
    }, []);

    return (
        <div className="container">
            <h2>My Booking History</h2>
            <ul className="list-group">
                {bookings.map(booking => (
                    <li key={booking._id} className="list-group-item">
                        Vehicle: {booking.vehicleId.make} {booking.vehicleId.model} <br />
                        Pickup Location: {booking.pickupLocation} <br />
                        Start Date: {new Date(booking.startDate).toLocaleDateString()} <br />
                        End Date: {new Date(booking.endDate).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyBookingHistory;
