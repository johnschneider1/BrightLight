import React from "react";
import { Button } from "semantic-ui-react";
import "./landing.css";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";
import ScrollText from "../starScroll/starwarsText";

const Landing = () => {
  return (
    <div className="land-box">
      <h1>ENTER HERE</h1>

      <div className="photoBox">
        <Link to="/login">
          <Image
            style={{
              position: "relative"
            }}
            wrapped
            size="large"
            src="https://i.imgur.com/x69w8PW.jpg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
