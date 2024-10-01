import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Vehicles from './pages/Vehicles';
import Booking from './pages/Booking';
import BookingDetails from './pages/BookingDetails';
import MyBookingHistory from './pages/MyBookingHistory';
import UserProfile from './pages/UserProfile';

const App = () => {
    return (
        <Router>
            <NavBar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/booking/:vehicleId" element={<Booking />} />
                    <Route path="/my-bookings" element={<MyBookingHistory />} />
                    <Route path="/booking-details/:bookingId" element={<BookingDetails />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
