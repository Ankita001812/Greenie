

import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './pages/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Veg from './pages/Veg';
import Fru from './pages/Fru';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  const [username, setUsername] = useState('');
  useEffect(() =>{
    const fetchUser = async () => {
      const useremail = localStorage.getItem('gemail');
  
      if (useremail) {
        const users = JSON.parse(localStorage.getItem('gusers')) || [];
        const loggedInUser = users.find((user) => user.email === useremail);
  
        if (loggedInUser) {
          setUsername(loggedInUser.username);
        }
      }
    };

    fetchUser();
  },[])

  return (
    <Router>
      <div className="App">
        <Nav username={username}/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/fruits" element={<Fru />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
