import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Study app</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
