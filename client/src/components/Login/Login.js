import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Header,
  Icon,
  Form,
  Input,
  Button
} from "semantic-ui-react";
import Navbar from "../navbar/navbar";

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
      .post("http://localhost:3111/api/auth/login", info)
      .then(res => {
        console.log(res);
        setinfo(initialinfo);
        localStorage.setItem("token", res.data.token);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className="loginBox">
      {/* <Navbar /> */}
      <div className="innerBox">
        <Container>
          <Header as="h1" icon textAlign="center">
            <Icon name="sign-in" color="yellow" />
            {/* <Header.Content>Sign In</Header.Content> */}
          </Header>
          <Form onSubmit={handleSubmit}>
            <Form.Field className="form-field">
              <Input
                className="input-field"
                htmlFor="username"
                placeholder="Username"
                type="username"
                id="username"
                value={info.password}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field className="form-field">
              <Input
                className="input-field"
                htmlFor="password"
                placeholder="Password"
                type="password"
                id="password"
                value={info.password}
                onChange={handleChange}
              />
            </Form.Field>
            <Button color="yellow">Login</Button>
          </Form>
        </Container>
      </div>
    </div>

    // <div className="form-container">
    //   <h1>
    //     Account <span className="text-primary">Login</span>
    //   </h1>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="email">Username</label>
    //       <input
    //         type="username"
    //         name="username"
    //         value={info.username}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         value={info.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <input
    //       type="submit"
    //       value="Login"
    //       className="btn btn-primary btn-block"
    //     />
    //   </form>
    // </div>
  );
};

export default Login;
