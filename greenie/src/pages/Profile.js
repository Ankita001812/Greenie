import React, { useEffect, useState } from "react";


const Profile = () => {

  const [currUser, setCurrUser] = useState('');

  useEffect (() => {
    const logged = localStorage.getItem('gemaillogged');

    if(logged){
      const users = JSON.parse(localStorage.getItem('gusers')) || [];
      const user = users.find(u => u.email === logged);

      setCurrUser(user || users[0]);
      console.log(user);

    }

  }, [])


  return (
    
        <div
      className="container d-flex justify-content-center "
      style={{ paddingTop: "150px" }}
    >
      <form className="row" >
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
    

        <div className="col-12">

          <button type="submit" className="btn btn-danger" style={{ marginRight: "40px" }}>
            Log Out
          </button>
          <button type="submit" className="btn btn-primary" >
            Sign In
          </button>
   
        </div>
        <br />
      </form>
    </div>

  );
};

export default Profile;