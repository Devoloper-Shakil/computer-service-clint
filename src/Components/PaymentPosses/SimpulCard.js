import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpulCard = ({ hendelPayment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccses, setPaymentSuccses] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccses(null)
        } else {
            setPaymentSuccses(paymentMethod.id)
            setPaymentError(null)
            // prossesSuccses(paymentMethod.id)
            hendelPayment(paymentMethod.id)

        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br/>
            
                <br />

                
            </form>
            {
                paymentError && <p style={{ color: "red" }}>{paymentError}</p>
            }
            {
                paymentSuccses && <p style={{ color: "green" }}>Thank you so much</p>
            }
        </>
    );
};

export default SimpulCard;