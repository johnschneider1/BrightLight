import React from "react";
import { Button } from "semantic-ui-react";
import "./landing.css";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import ScrollText from "../starScroll/starwarsText";

const Landing = () => {
  return (
    <div className="container">
      <div className="scrollbox">{/* <ScrollText /> */}</div>
      <Link to="/login">
        <div className="photoBox">
          {/* <img src="lightbuldQL.jpg" alt="light picture"></img> */}
          <Image
            style={{
              position: "relative"
            }}
            wrapped
            size="large"
            src="https://i.imgur.com/x69w8PW.jpg"
          />
        </div>
      </Link>
    </div>
  );
};

export default Landing;
