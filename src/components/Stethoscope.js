import React from 'react';
import stethoscopeImage from '../assets/images/stethoscope.png'; 
import './Stethoscope.css'
const Stethoscope = () => {
    return (
        <div className="stethoscope-container">
            <img src={stethoscopeImage} alt="Stethoscope" className="stethoscope-image" />
        </div>
    );
}

export default Stethoscope;
