import React from 'react';
import Navbar from './Navbar'; // Make sure the path is correct
import './Display.css'; // Import the CSS file for styling

export default function Display() {
  return (
    <div className="display-container">
      <Navbar />
      <div className="content">
        <h2>Welcome to the Learning App</h2>
        <p>This is the homepage of the Learning App where you can find various courses and resources to enhance your skills.</p>
        <p>Explore our latest courses, join our community, and start your learning journey today!</p>
      </div>
    </div>
  );
}
