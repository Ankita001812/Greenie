import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const inituser = { email: "", pass: "" };
  const [val, setVal] = useState(inituser);

  const handleChange = (e) => {
    // Get the name and value of the input field that triggered the event
    const { name, value } = e.target;
    // Update the state with the new input value
    // setVal((prev) => ({ ...prev, [name]: [value] }));

    setVal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const exist = JSON.parse(localStorage.getItem("gusers")) || [];
    console.log(exist);
    const user = exist.find(
      (user) => user.email === val.email && user.pass === val.pass
    );
    if (!user) {
      console.log("Invalid email or password");
      return;
    }

    localStorage.setItem("gemaillogged", JSON.stringify(user.email));
    console.log(user.email);
    localStorage.setItem("gusernamelogged", JSON.stringify(user.username));
    console.log(user.username);

    console.log("log in successful!");
    // alert("Registration successful!");

    window.location.href = "/Greenie/";
  };

  return (
    <div
      className="container d-flex justify-content-center "
      style={{ paddingTop: "150px" }}
    >
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-12 mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            // name is required to be mtached with the
            name="email"
            value={val.email}
            onChange={handleChange}
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
            value={val.pass}
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <br />
        </div>
        <br />
        <br />

        <div className="col-12">
          <p className="mb-0">
            Don't have an account?
            <Link to="/Greenie/signup">
              <button type="button" className="btn btn-primary">
                SignUp
              </button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
