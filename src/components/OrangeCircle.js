import React from 'react';
import './OrangeCircle.css'; // Import the CSS file
import orangeCircle from '../assets/images/orangecircle.png'

const OrangeCircle = () => {
    return (
        <div className="orange-circle-container">
            <img src={orangeCircle} alt="Orange Circle" className="orange-circle-image" />
        </div>
    );
};

export default OrangeCircle;
