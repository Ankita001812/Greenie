import React from "react";

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center " style={{paddingTop: "150px"}}>
      <form className="row">
        <div className="col-12 mb-3">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12 mb-3">
          <label for="inputEmail4" className="form-label">
            Username
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12 mb-3">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12 mb-3">
          <label for="inputPassword4" className="form-label">
            Confirm Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" required/>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
