import React from 'react';
import location from '../../../../images/placeholder.png';
import clock from '../../../../images/clock.png';
import message from '../../../../images/email.png';
import phone from '../../../../images/phone-call.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className=" text-light bg-dark">
            <div className=" p-5 container">
                <div className="text-center">
                    <img style={{ width: '30px',color:'white'}} src={phone} alt="" />
                    <span className="fs-2"> Call Us to Our Office</span> <span className="fs-2 text-primary">
                        +8801753612435
         </span>
                </div>

                <div className="row container mt-5">
                    <div className="col-md-4">
                        <img src={location} style={{ width: '30px' }} alt="" />
                        <span className="fs-6  "> 5604 Willow Crossing Ct, Clifton, VA, 20124 </span>

                    </div>
                    <div className="col-md-4">
                        <img src={clock} style={{ width: '30px' }} alt="" />
                        <span className="fs-6 ms-3 "> Mon-Fri: 7:00am-7:00pm Sat-Sun: 10:00am-5:00pm </span>

                    </div>
                    <div className="col-md-4">
                        <img src={message} style={{ width: '30px' }} alt="" />
                        <span className="fs-6 ms-3">shshakilhasan69@gmail.com</span>
                        <div className="ms-4 mt-4">
                            <FontAwesomeIcon className="fs-4 " icon={faFacebook} />
                            <FontAwesomeIcon className="fs-4 ms-3" icon={faTwitter} />
                        </div>

                    </div>
                </div>
                <div className="copyRight text-center mt-5">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;