import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Study app</h1>
      </div>
      <ul className="navbar-links">
        {/* <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li> */}
        <li >
          <Link to="/">Home</Link>
        </li>
       
        <li >
          <Link to="/about">AboutUs</Link>
        </li>

        <li >
          <Link to="/contact">Contact</Link>
        </li>

        <li >
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </nav>
  );
}
