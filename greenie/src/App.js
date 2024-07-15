

import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Veg from './pages/Veg';
import Fru from './pages/Fru';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/fruits" element={<Fru />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
