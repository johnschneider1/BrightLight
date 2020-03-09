import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const initialinfo = {
  username: "",
  password: ""
};

const Register = props => {
  const [info, setinfo] = useState(initialinfo);

  const handleChange = e =>
    setinfo({ ...info, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://quietlight-db.herokuapp.com/api/auth/register", info)
      .then(res => {
        console.log(res);

        setinfo(initialinfo);
        localStorage.setItem("token", res.data.token);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className="login-box">
      <div className="benSolt">
        <div className="logoHolder">
          <div className="logo">
            {/* <h1 className="regbox">Please Sign Up</h1> */}
            <img
              src="https://i.imgur.com/rBjfKlr.png"
              alt="icon"
              height={250}
              width={250}
            />
          </div>
        </div>
        {/* <h1>
        Account <span className="text-primary">Login</span>
      </h1> */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            {/* <div className="label-field">Email</div> */}

            <input
              className="inputfield"
              type="username"
              name="username"
              placeholder="Username"
              value={info.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            {/* <div className="label-field">Password</div> */}
            <input
              className="inputfield"
              placeholder="Password"
              type="password"
              name="password"
              value={info.password}
              onChange={handleChange}
              required
            />
          </div>
          <NavLink to="/login">
            <p className="signupNav">Already have an accout? Login!</p>
          </NavLink>

          {/* <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        /> */}
        </form>
        <div className="button-box">
          <Button onClick={handleSubmit} inverted size="large" color="yellow">
            Register
          </Button>

          {/* {initialinfo !== null ? (
            <div>that didn't work try again </div>
          ) : (
            <div>success</div>
          )} */}

          {/* <button type="submit">Submit</button> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
