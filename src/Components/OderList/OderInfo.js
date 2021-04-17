import React from 'react';

const OderInfo = (props) => {
    const { paments, booking } = props.oder;
    return (
        <div>
            <table class="table">
                <tbody>
                    <tr>

                        <td>{paments.name}</td>
                        <td>{paments.heardwor}</td>
                        <td>{booking?.service.titel}</td>
                        <td>Creadit card</td>
                        <td>
                            <select name="cars" className="text-primary" id="cars">
                                <option className="text-primary" value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="on going">On going</option>
                               
                            </select>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OderInfo;