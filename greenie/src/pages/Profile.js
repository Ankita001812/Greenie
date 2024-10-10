import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
  const [currUser, setCurrUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem("gemaillogged");

    if (logged) {
      const users = JSON.parse(localStorage.getItem("gusers")) || [];
      const user = users.find((u) => u.email === JSON.parse(logged));
      setCurrUser(user);
      console.log(user);
    }
  }, []);

  if (!currUser) {
    navigate("/Greenie/signup"); // Redirect to signup if currUser is null
    return <div></div>; // Return an empty div to prevent rendering anything
  }

  const logOut = () => {
    console.log("Logged out!");
    localStorage.removeItem("gemaillogged");
    localStorage.removeItem("gusernamelogged");
    localStorage.removeItem("gcart");
    window.location.href = "/";
    navigate("/Greenie/signup");
  };

  return (
    <div className="container my-5 py-5">
      <div className="card p-4">
        <h2 className="text-center mb-4 fw-bold">Your Account Details</h2>
        <form className="row g-3">
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={currUser.email}
              disabled
            />
          </div>

          <div className="col-12">
            <label htmlFor="username" className="form-label fw-bold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={currUser.username}
              disabled
            />
          </div>

          <div className="col-12">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="pass"
              value={currUser.pass}
              disabled
            />
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn btn-danger"
              onClick={logOut}
            >
              Log Out
            </button>
            <Link to="/Greenie/signup">
              <button type="button" className="btn btn-primary">
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
