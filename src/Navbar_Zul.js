import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='container'>
      <div className='header'>
        <img src='cafe-background.avif' alt='Coffee Shop' />
        <h1 className='company-info'> COFFEE SHOP SDN BHD </h1>
        <p className='slogan'> PREMIUM QUALITY </p>
      </div>
      <ol className='nav-list'>
        <li style={{ position: "absolute", top: "200px", left: "80px" }}>
          <img src="logo.jpg" alt="Logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        </li>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Menus</Link></li>
        <li><Link to={'/abt'}>About Us</Link></li>
        <li><Link to={'/ctcs'}>Contacts</Link></li>
      </ol>
    </div>
  );
}

export default Navbar;