import React from 'react';
import './GreenCircle.css'; // Import the CSS file
import greenCircle from '../assets/images/greencircle.png'
const GreenCircle = () => {
    return (
        <div className="green-circle-container">
            <img src={greenCircle} alt="Green Circle" className="green-circle-image" />
        </div>
    );
};

export default GreenCircle;
