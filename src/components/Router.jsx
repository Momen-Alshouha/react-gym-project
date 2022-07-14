import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { ContextApi } from "./context";
const Router = (props) => {
  return (
    <ContextApi>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </ContextApi>
  );
};
export default Router;
