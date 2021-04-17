import React, { useEffect, useState } from 'react';
import OderInfo from './OderInfo';

const OderList = () => {
    const [order, setOrder] = useState([])
    console.log('orders',order)
    useEffect(() => {
        fetch('https://safe-temple-56764.herokuapp.com/payment')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div>
            <table class="table">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay with</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>


            </table>

            {
                order.map(order => <OderInfo oder={order}></OderInfo>)
            }
        </div>
    );
};

export default OderList;