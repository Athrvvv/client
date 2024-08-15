import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import medicalImage from '../assets/images/medical.png'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={medicalImage} alt="Medifine Logo" className="navbar-logo" />
                <span>Medifine</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
