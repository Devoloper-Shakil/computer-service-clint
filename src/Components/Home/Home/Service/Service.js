import React from 'react';
import user from '../../../../images/programmer.png';
import mouse from '../../../../images/mouse.png';
import friendship from '../../../../images/honesty.png';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import { useEffect } from 'react';
import { useState } from 'react';
import '../ServiceInfo/service.css'



const Service = () => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('https://safe-temple-56764.herokuapp.com/AddService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="service-conteiner mt-5 ">
            <div className="mt-5 container">
                <div className="text-center mt-5">
                    <h2>Why Choose <span className="text-primary mt-5">  Us </span></h2>
                    <h4 className="fw-light mt-5">There are many valid reasons why you should choose us to take care of your valuable device</h4>
                </div>

                <div className="row ">
                    {
                        services.map(service => <ServiceInfo service={service}></ServiceInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;