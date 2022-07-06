import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Register from "./Register/Register";
const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
