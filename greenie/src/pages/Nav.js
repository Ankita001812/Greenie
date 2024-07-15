import React from "react";
import bg from "../images/bg.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import cart from "../images/cart.png";
import pro from "../images/proicon.png";

function Nav() {
  return (
    <div>
      <img src={bg} className="bg-img" alt="background-image" />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <div className="navbar-brand ">
            <Link to="/" className="nav-link">
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/veg" className="nav-link">
                  Vegetables
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/fruits" className="nav-link">
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
              <li className="nav-item active">
                <Link to="/shoppingcart" className="nav-link">
                  <img src={cart} className="cart-icon" alt="cart" />
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/signup" className="nav-link">
                  <img src={pro} className="pro-icon" alt="profile" />
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
