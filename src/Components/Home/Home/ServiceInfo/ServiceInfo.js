import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const ServiceInfo = (props) => {
    const { _id, service ,imageUrl } = props.service;
    return (
        <div style={{textAlign: 'center'}} className="col-md-4 mt-5  ">
            <div className=" border border-warning p-3 service">
            <div >
                <img src={imageUrl}  class="card-img-top w-25 " alt="" />
            </div>
            <div className="mt-3">
                <h3>
                    {service.titel}
                </h3>
            </div>
            <div>{service.desciption}</div>
           
            <div className="fs-2">50$</div>
           <Link to={`/id/${_id}`}> <button type="button" class="btn btn-success">Service Now</button></Link>
            </div>
         

        </div>
    );
};

export default ServiceInfo;