import React from "react";
import { Link } from "react-router-dom";

// import Login from "./components/Login/Login";
// import Landing from "./components/landing/Landing";
import Routes from "./utils/Routes";
// import Volatility from "./components/volatility/vol";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes />
        {/* <Login /> */}
        {/* <Link to="/login">
          <div className="btn-container">
            <button className="btn-circle">QuietLight</button>
          </div>
        </Link> */}
      </div>
      {/* <Volatility /> */}
    </div>
  );
}

export default App;
