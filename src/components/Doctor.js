import React from 'react';
import doctorImage from '../assets/images/doctor.png'; 
import './Doctor.css';
const Doctor = () => {
    return (
        <div className="doctor-container">
            <img src={doctorImage} alt="Doctor" className="doctor-image" />
        </div>
    );
}

export default Doctor;
