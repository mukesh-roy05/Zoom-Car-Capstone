import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { vehicleId } = useParams();
    const [pickupLocation, setPickupLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/bookings', {
                vehicleId,
                pickupLocation,
                startDate,
                endDate,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Booking successful!');
            // Redirect to booking history or another page
        } catch (error) {
            console.error('Error during booking', error);
            alert('Booking failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Pickup Location</label>
                <input
                    type="text"
                    className="form-control"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Start Date</label>
                <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>End Date</label>
                <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Book Vehicle</button>
        </form>
    );
};

export default Booking;
