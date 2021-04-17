import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SimpulCard from './SimpulCard';


const stripePromise = loadStripe(

    'pk_test_51Ie0oDDsMn6Men7obd79VMsyHOtBdgV8JmGpbMtHUaHHOFDcJgo29hZX3kxKTxGJD0TQGcazp68s7jGNmzYU03TQ00bMXTM2W1'
);

const PaymentPosses = ({hendelPayment}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpulCard hendelPayment={hendelPayment}></SimpulCard>
            </Elements>
        </div>
    );
};

export default PaymentPosses;