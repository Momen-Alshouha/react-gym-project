import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Register from "./Register/Register";
import Login from "./Login/Login";
const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/register" component={Register} />
        <Route path="/Login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
