import React from 'react';

const BookinList = (props) => {
    const { paments, booking } = props.book;
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>

                        <td>{paments.name}</td>
                        <td>{paments.heardwor}</td>
                        <td>{booking?.service.titel}</td>
                        <td>Creadit card</td>
                      

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookinList;