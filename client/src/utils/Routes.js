import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import Landing from "../components/landing/Landing";
import Login from "../components/Login/Login";
import Volatility from "../components/volatility/Volatility";
import Scrolltext from "../components/starScroll/starwarsText";
import Goodbye from "../components/goodbye/goodbye";

const Routes = () => {
  return (
    <div>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route path="/volatility" component={Volatility} />
      <Route path="/scrolltext" component={Scrolltext} />
      <Route path="/goodbye" component={Goodbye} />
    </div>
  );
};

export default Routes;
