import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const inituser = { username: "", email: "", pass: "", confpass: "" };
  const [val, setVal] = useState(inituser);
  // const navigate = useNavigate();

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
    exist.push(val);
    localStorage.setItem("gusers", JSON.stringify(exist));
    console.log(val);

    // const loggedEmail = JSON.parse(localStorage.getItem("gemail")) || [];
    // loggedEmail.push(val.email);
    // localStorage.setItem("gemail", JSON.stringify(loggedEmail));

    // const loggedUsername = JSON.parse(localStorage.getItem("gusername")) || [];

    // localStorage.setItem("gusername", JSON.stringify(loggedUsername));

    alert("Registration successful!");
    // navigate("/");
  };

  return (
    <div
      className="container d-flex justify-content-center "
      style={{ paddingTop: "150px" }}
    >
      <form className="row" onSubmit={handleSubmit}>
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
            value={val.email}
            onChange={handleChange}
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
            value={val.username}
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
        <div className="col-12 mb-3">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmpassword"
            name="confpass"
            value={val.confpass}
            required
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
        <div className="col-12">
          <Link to="/login">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
