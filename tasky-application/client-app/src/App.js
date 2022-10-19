import React from 'react'
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Dashbord from './components/Dashboard.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
       <Navbar />
       
      <Routes>
     
        <Route path="/" element={<Body />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashbord />} />
        
      </Routes>
      <Footer />
      
    </>
  );

}

export default App;