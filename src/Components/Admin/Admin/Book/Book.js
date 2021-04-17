import React, { useContext, useState } from 'react';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { userContext } from '../../../../App';

import PaymentPosses from '../../../PaymentPosses/PaymentPosses';




// const stripePromise = loadStripe('pk_test_51Ie0oDDsMn6Men7obd79VMsyHOtBdgV8JmGpbMtHUaHHOFDcJgo29hZX3kxKTxGJD0TQGcazp68s7jGNmzYU03TQ00bMXTM2W1');

const Book = () => {
    const [loginUser, setLoginUser] = useContext(userContext);

    const { _id } = useParams()
    const [booking, setBooking] = useState({})
    console.log('bokk', booking)

    const { register, handleSubmit, watch, errors } = useForm();

    const [paments, setPaments] = useState(null)


    useEffect(() => {

        fetch('https://safe-temple-56764.herokuapp.com/AddService/' + _id)
            .then(res => res.json())
            .then(data => setBooking(data[0]))
    }, [_id])

    const payment = (e) => {
        const newPayment = { ...paments }
        newPayment[e.target.name] = e.target.value
        setPaments(newPayment);

    }
    const onSubmit = () => {
        const payment = { paments, booking }
        console.log(payment)
        fetch('https://safe-temple-56764.herokuapp.com/payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payment)
        })
            .then(res => {
                alert('payment Succsecefully')
            }

            )
    }
    const hrandelPayment = () => {


        // console.log(services)


    };



    return (
        <div>
            
            <div className="mt-5 ms-5 w-75  container ">
                <form onSubmit={handleSubmit(onSubmit)} >

                    <input type="text" class="form-control" onBlur={payment} defaultValue={loginUser.name} name="name" placeholder="youer name" />
                    <br />

                    <input type="email" class="form-control" onBlur={payment} defaultValue={loginUser.email} name="heardwor" aria-describedby="emailHelp" placeholder="enter email" />
                    <br />
                    <input type="text" class="form-control" onBlur={payment} name="heardwor" defaultValue={booking.service?.titel}  aria-describedby="emailHelp" placeholder="Company Name Description/heardwor name" />

                    <br />
                    <label>pay with</label>
                    <br />
                    <br />

                    <label>cadite card</label>
                    <input type="checkbox" className='ms-2' onBlur={payment} name="cadite card" id="" />

                    <br />
                    <br />

                    <PaymentPosses hendelPayment={hrandelPayment}></PaymentPosses>
                    <button type="submit" className="btn btn-primary float-end" >
                        Pay now
               </button>
                </form>

            </div>
        </div>
    )
};

export default Book;