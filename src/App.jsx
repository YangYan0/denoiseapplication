import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
/* import About from './pages/about';
import SignUp from './pages/signup'; */
import Contact from './pages/contact';
import Denoiser from './pages/denoiser';

function App(){

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/denoiser" element={<Denoiser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
