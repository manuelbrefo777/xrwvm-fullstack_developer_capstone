import React from 'react';
import Header from './Header/Header';
import "./assets/style.css";
import "./assets/bootstrap.min.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to our team below:</p>
        <ul className="list-group">
          <li className="list-group-item"><strong>Email:</strong> support@bestcars.com</li>
          <li className="list-group-item"><strong>Phone:</strong> +1 (800) 555-0199</li>
          <li className="list-group-item"><strong>Address:</strong> 123 Auto Lane, Detroit, MI</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;