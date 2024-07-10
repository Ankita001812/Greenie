import React from "react";
import bg from "../images/bg.png";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <img src={bg} className="bg-img" alt="background-image" />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="navbar-brand ">
            
              <span className="fw-bold text-light display-4">GrEEniE</span>
            
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse display-6" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto fw-bold">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/veg" className="nav-link">
                  Vegetables
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/fruits" className="nav-link">
                  Fruits
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}





export default Nav;