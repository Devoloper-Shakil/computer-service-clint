import React from 'react';

const Teaminfo = (props) => {
    const { img,name,profetion}= props.team;
    return (
        <div className="col-md-4">
            <img src={img} className="w-100" alt=""/>
            <h3 className="text-center">{name}</h3>
            <h5 className="text-center">{profetion}</h5>
            
        </div>
    );
};

export default Teaminfo;