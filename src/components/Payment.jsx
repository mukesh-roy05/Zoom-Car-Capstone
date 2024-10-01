import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_stripe_public_key');

const Payment = ({ totalPrice }) => {
    const handlePayment = async () => {
        const stripe = await stripePromise;
        // Call your backend to create a payment intent, handle the response accordingly
        const response = await fetch('https://zoom-car-capstone.onrender.com/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ totalPrice }), // Replace with actual booking details
        });
        const data = await response.json();
        await stripe.redirectToCheckout({ sessionId: data.id });
    };

    return (
        <button onClick={handlePayment} className="btn btn-primary">
            Pay ${totalPrice}
        </button>
    );
};

export default Payment;
