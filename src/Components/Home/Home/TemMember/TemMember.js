import React from 'react';
import Teaminfo from '../Teaminfo/Teaminfo';
import Edword from '../../../../images/person-02-292x340.jpg';
import Alexs from '../../../../images/alex.jpg';
import sanjana from '../../../../images/sanjana.jpg';

const TemMember = () => {
    const OurTeam = [
        {
            name: 'Edword Rebortion',
            img: Edword,
            profetion: 'Fieald Tecnican'
        },
        {
            name: 'Alexs',
            img: Alexs,
            profetion: 'Repair Tecnican'
        },
        {
            name: 'sanjana',
            img: sanjana,
            profetion: 'Customer service menager'
        }
    ]
    return (
        <section className="  bg-success ">
            <div className="container p-5">
                <div className="text-center ">
                    <h2>Meet our <span className="text-danger "> Team </span></h2>
                    <h5>All our technicians are fully qualified and licensed. Moreover, they are incredibly skillful and proficient in various aspects of computer repair.</h5>
                </div>
                <div className="row mt-5">
                    {
                        OurTeam.map(team => <Teaminfo team={team}></Teaminfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TemMember;