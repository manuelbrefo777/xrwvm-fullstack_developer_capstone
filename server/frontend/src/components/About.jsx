import React from 'react';
import Header from './Header/Header';
import "./assets/style.css";
import "./assets/bootstrap.min.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="card" style={{ width: "80%", margin: "auto", marginTop: "5%" }}>
        <div className="banner" name="about-header" style={{ padding: "20px", textAlign: "center" }}>
          <h1>About Us</h1>
          <p>
            Welcome to Best Cars dealership, home to the best cars in North America. 
            We deal in selling domestic and imported cars at reasonable prices.
          </p>
        </div>
        
        <div style={{ display: "flex", flexDirection: "row", margin: "auto", justifyContent: "space-around", paddingBottom: "20px" }}>
          {/* Person 1 */}
          <div className="card" style={{ width: "30%" }}>
            <img className="card-img-top" src="/person.png" alt="Card image" />
            <div className="card-body">
              <p className="title"><b>Person1</b></p>
              <p>Person1 Title</p>
              <p className="card-text">Some text that explains the person1 in about 2 short sentences</p>
              <p>person1@example.com</p>
            </div>
          </div>

          {/* Person 2 */}
          <div className="card" style={{ width: "30%" }}>
            <img className="card-img-top" src="/person.png" alt="Card image" />
            <div className="card-body">
              <p className="title"><b>Person2</b></p>
              <p>Person2 Title</p>
              <p className="card-text">Some text that explains the person2 in about 2 short sentences</p>
              <p>person2@example.com</p>
            </div>
          </div>

          {/* Person 3 */}
          <div className="card" style={{ width: "30%" }}>
            <img className="card-img-top" src="/person.png" alt="Card image" />
            <div className="card-body">
              <p className="title"><b>Person3</b></p>
              <p>Person3 Title</p>
              <p className="card-text">Some text that explains the person3 in about 2 short sentences</p>
              <p>person3@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;