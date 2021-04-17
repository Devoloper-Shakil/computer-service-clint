import React from 'react';

const TestimonialInfo = (props) => {
    const {review}=props.testi;
    return (
        <div className="col-md-4 col-sm-12 mt-5">
            <div><h3>{review.heardwor}</h3></div>
            <div><h5>{review.messeg}</h5></div>
            <div><h4>--{review.name}</h4></div>

        </div>
    );
};

export default TestimonialInfo;