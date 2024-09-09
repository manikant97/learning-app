import React from 'react';
import Navbar from '../components/Navbar';
import './AboutUs.css'; // Import CSS file for styling

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h2>About Us</h2>
        <p>Welcome to the Learning App. We are dedicated to providing high-quality educational resources to help you enhance your skills and knowledge.</p>
        <p>Our mission is to make learning accessible and enjoyable for everyone. Whether you're a beginner or an expert, we have something for you.</p>
        <p>Join our community and start your learning journey today!</p>
      </div>
    </div>
  );
}
