import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [currUser, setCurrUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem("gemaillogged");

    if (logged) {
      const users = JSON.parse(localStorage.getItem("gusers")) || [];
      
      const user = users.find((u) => u.email === JSON.parse(logged));

      setCurrUser(user );
      console.log(user);
    }
  }, []);

  if (!currUser) {
    navigate('/Greenie/signup'); // Redirect to signup if currUser is null
    return <div></div>; // Return null to prevent rendering anything
  }

  const logOut = () => {
    console.log("Logged out!");
    localStorage.removeItem('gemaillogged');
    localStorage.removeItem('gusernamelogged');
    localStorage.removeItem('gcart');
    window.location.href = "/";

    navigate('/Greenie/signup')
  }

  return (
    <div
      className="container d-flex justify-content-center "
      style={{ paddingTop: "150px" }}
    >
      <div
      className="container d-flex justify-content-center fw-bold "
      
       >  Your Account Details </div>
      <form className="row">
        <div className="col-12 mb-3">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            // name is required to be mtached with the
            name="email"
            value={currUser.email}
            // onChange={handleChange}
            disabled
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="username"
            name="username"
            value={currUser.username}
            // onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="pass"
            value={currUser.pass}
            // onChange={handleChange}
          />
        </div>
        {/* <div className="col-12 mb-3">
          <label htmlFor="date" className="form-label">
            Date Joined
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            // name is required to be mtached with the
            name="dateJoined"
            value={currUser.dateJoined ? new Date(currUser.dateJoined).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric"
            }) : new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric"
            })}
            // onChange={handleChange}
            disabled
          />
        </div> */}

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-danger"
            style={{ marginRight: "40px" }}
            onClick={logOut}
          >
            Log Out
          </button>
          <Link to="/Greenie/signup">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </Link>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Profile;
