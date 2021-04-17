import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Service from './Service/Service';
import TemMember from './TemMember/TemMember';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header></Header>
            <AboutUs></AboutUs>
            <Service></Service>
            <Testimonials></Testimonials>
            <TemMember></TemMember>
            <Footer></Footer>
        </>
    );
};

export default Home;