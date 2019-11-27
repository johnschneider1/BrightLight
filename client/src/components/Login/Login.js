import React, { useState } from "react";
import axios from "axios";
// import {
//   Container,
//   Header,
//   Icon,
//   Form,
//   Input,
//   Button
// } from "semantic-ui-react";
// import Navbar from "../navbar/navbar";
import "./login.css";
// import "semantic-ui-css/semantic.min.css";
import { Button, Segment } from "semantic-ui-react";

const initialinfo = {
  username: "",
  password: ""
};

const Login = props => {
  const [info, setinfo] = useState(initialinfo);

  const handleChange = e =>
    setinfo({ ...info, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://quietlight-db.herokuapp.com/api/auth/login", info)
      .then(res => {
        console.log(res);
        setinfo(initialinfo);
        localStorage.setItem("token", res.data.token);
        props.history.push("/volatility");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    // <div className="loginBox">
    //   {/* <Navbar /> */}
    //   <div className="innerBox">
    //     <Container>
    //       <Header as="h1" icon textAlign="center">
    //         <Icon name="sign-in" color="yellow" />
    //         {/* <Header.Content>Sign In</Header.Content> */}
    //       </Header>
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Field className="form-field">
    //           <Input
    //             size="large"
    //             className="input-field"
    //             htmlFor="username"
    //             placeholder="Username"
    //             type="username"
    //             id="username"
    //             value={info.password}
    //             onChange={handleChange}
    //           />
    //         </Form.Field>
    //         <Form.Field className="form-field">
    //           <Input
    //             size="large"
    //             className="input-field"
    //             htmlFor="password"
    //             placeholder="Password"
    //             type="password"
    //             id="password"
    //             value={info.password}
    //             onChange={handleChange}
    //           />
    //         </Form.Field>
    //         <Button color="yellow">Login</Button>
    //       </Form>
    //     </Container>
    //   </div>
    // </div>

    <div className="login-box">
      <div className="benSolt">
        <div className="logoHolder">
          <div className="logo">
            {/* <img
              src="https://i.imgur.com/oRlwYUo.jpg"
              alt="icon"
              height={250}
              width={250}
            /> */}
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
          {/* <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        /> */}
        </form>
        <div className="button-box">
          <Button onClick={handleSubmit} inverted size="large" color="yellow">
            Submit
          </Button>
          {/* 
          {initialinfo !== null ? (
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

export default Login;
