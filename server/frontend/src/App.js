import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dealers />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Add placeholders so these aren't blank */}
      <Route path="/about" element={<div><h1>About Us</h1><p>Coming Soon</p></div>} />
      <Route path="/contact" element={<div><h1>Contact Us</h1><p>Coming Soon</p></div>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App;