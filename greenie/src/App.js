import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./pages/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Veg from "./pages/Veg";
import Fru from "./pages/Fru";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = JSON.parse(localStorage.getItem("gusernamelogged")) || [];
      console.log(user);
      if (user) {
        setUsername(user);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav username={username} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/fruits" element={<Fru />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
