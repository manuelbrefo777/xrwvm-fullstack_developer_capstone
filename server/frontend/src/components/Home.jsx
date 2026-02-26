import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header'; // Double check this path!

const Home = () => {
  return (
    <div>
      <Header /> {/* This brings back the Nav links and Logo */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="card" style={{ width: "50%", marginTop: "50px" }}>
        <img 
      src="/car_dealership.jpg" 
      className="card-img-top" 
      alt="Dealership" 
      style={{ width: '100%', height: 'auto' }} 
    />
          <div className="banner" style={{ padding: "20px", textAlign: "center" }}>
            <h5>Welcome to our Dealerships!</h5>
            <Link 
              to="/dealers" 
              className="btn" 
              style={{ 
                backgroundColor: "#5c94d4", 
                color: "white", // Added for better visibility
                margin: "10px",
                padding: "10px 20px", // Added for a more "premium" button feel
                borderRadius: "5px" 
              }}
            >
              View Dealerships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;