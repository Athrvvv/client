import React from 'react';
import './AboutUs.css'; // Make sure to import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <h2>Best and Experienced Faculties</h2>
        <p className="description">
          We had bring the best experts of medical field to provide you the best service as possible.
          We are trying our best to serve the world with our facilities, so that everyone can have a 
          proper medical facility to avail.
        </p>
        <div className="stats">
          <div className="stat">
            <h3>20+</h3>
            <p>Doctors</p>
          </div>
          <div className="stat">
            <h3>50,000+</h3>
            <p>Customers</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
