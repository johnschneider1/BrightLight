import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import Landing from "../components/landing/Landing";
import Register from "../components/register/register";
import Login from "../components/Login/Login";
import Volatility from "../components/volatility/Volatility";
import Scrolltext from "../components/starScroll/starwarsText";
import Goodbye from "../components/goodbye/goodbye";
import ShowMe from "../components/showme";

const Routes = () => {
  return (
    <div>
      <Route exact path="/landing" component={Landing} />
      <Route path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route path="/volatility" component={Volatility} />
      <Route path="/scrolltext" component={Scrolltext} />
      <Route path="/goodbye" component={Goodbye} />
      <Route path="/showme" component={ShowMe} />
    </div>
  );
};

export default Routes;
