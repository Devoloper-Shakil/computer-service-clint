import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';

const Testimonials = () => {
    const [testimonials,setTestimonials]=useState([])
    // console.log('review',testimonials)

    useEffect(()=>{
        fetch('https://safe-temple-56764.herokuapp.com/AddReview')
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
    },[])
   
    return (
        <section style={{height:'500px'}} className="mt-5  bg-secondary">
            <div className="container p-5 text-light">
            <div className="text-center">
                <h2>Our Testimonials</h2>
                <h6>There are many valid reasons why you should choose us to take care of your valuable device ter</h6></div>
            <div className="row mt-5">
                {
                    testimonials.map(test => <TestimonialInfo testi={ test }></TestimonialInfo>)
                }
            </div>
            </div>
        </section>
    );
};

export default Testimonials;