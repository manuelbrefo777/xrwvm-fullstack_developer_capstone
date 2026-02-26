import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";

// Import your new components once created
// import About from './components/About/About'; 
// import Contact from './components/Contact/Contact';

function App() {
  return (
    <Routes>
      {/* If you want a separate Home page, change 'Dealers' to 'Home' here */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Dealers />} /> 
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App;