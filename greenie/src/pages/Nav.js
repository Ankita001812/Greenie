import React from "react";
import bg from "../images/bg.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import cart from "../images/cart.png";
import pro from "../images/proicon.png";

function Nav({ username }) {
  return (
    <div>
      <img src={bg} className="bg-img" alt="background-image" />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="navbar-brand ">
            <Link to="/Greenie/" className="nav-link">
              <span className="fw-bold text-light display-4">GrEEniE</span>
            </Link>
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
          <div
            className="collapse navbar-collapse display-6"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav fw-bold">
              <li className="nav-item active">
                <Link to="/Greenie/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/Greenie/veg" className="nav-link">
                  Vegetables
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Greenie/fruits" className="nav-link">
                  Fruits
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto ">

              {username && username !== null && (
                <li className="nav-item active">
                <Link to="/Greenie/shoppingcart" className="nav-link">
                  <img src={cart} className="cart-icon" alt="cart" />
                </Link>
              </li> 
              )}

              <li className="nav-item ">
                {username ? (
                  <Link to="/Greenie/profile" className="nav-link">
                    <img src={pro} className="pro-icon" alt="profile" />
                  </Link>
                ) : (
                  <Link to="/Greenie/signup" className="nav-link">
                    <img src={pro} className="pro-icon" alt="profile" />
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {username && (
            <div className="navbar-text d-flex justify-content-center text-success welcome-message">
              Welcome {username}!
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
