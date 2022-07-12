import React, { Fragment, useContext, useState } from "react";
import axios from "axios";
import ErrorModel from "./UI/ErrorModel";
const Context = React.createContext({
  submit: (event) => {},
  value: () => {},
  onLogout: () => {},
  onLogin: (email, password) => {}
});
export const ContextApi = (props) => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [data, setFormValue] = useState({
    name: null,
    email: null,
    password: null,
  });
  const [error, setError] = useState("");
  window.axios = require("axios");
  const Submit = (event) => {
    event.preventDefault();
    if(data.name?.trim().length < 4){
      setError({
        title:'Invalid input',
        message:'Name must be  at least 4 characters'
      })
    }
    if(data.email?.trim().length === 0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid email'
      })
    }
    if(data.password?.trim().length < 4){
      setError({
        title:'Invalid input',
        message:'Password must be  at least 4 characters'
      })
    }
    const api = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    };
    axios.post("https://62c54cf0134fa108c24dabbc.mockapi.io/user", api);
  };
  // get data

  const valueHandler = (event) => {
    setFormValue({ ...data, [event.target.name]: event.target.value });
  };
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };
  //error handler
  return (
    <Fragment>
    <Context.Provider
      value={{
        data:data,
        submit: Submit,
        value: valueHandler,
        setIsLoggedIn,
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        error:error,
        setError:setError
      }}
    >
      {props.children}
    </Context.Provider>
  </Fragment>
  );
};
export default Context;
