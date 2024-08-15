import React from 'react';
import Doctor from '../components/Doctor';
import GreenCircle from '../components/GreenCircle'; 
import OrangeCircle from '../components/OrangeCircle';
import Stethoscope from '../components/Stethoscope';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Stethoscope />
            <div className="hero-text">
                <h1>Complete Health Care Solutions for Everyone</h1>
                <p>We're always available for our Patients with emergen problems. You can easily reach us 24/7. We focused on highest quality.</p>
                <button className="appointment-button">Make Appointment</button>
            </div>
            <GreenCircle />
            <OrangeCircle />
            <Doctor />
        </div>
    );
};

export default Home;
