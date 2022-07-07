import React, { useContext, useState } from "react";
import axios from "axios";
const Context = React.createContext({
  submit: (event) => {},
  value: () => {},
  isLoggedIn:()=>{},
  isLoggedOut:()=>{}
});
export const ContextApi = (props) => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [data, setFormValue] = useState({
    name: null,
    email: null,
    password: null,
  });
  window.axios = require("axios");
  const Submit = (event) => {
    event.preventDefault();
    const api = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    axios.post("https://62c54cf0134fa108c24dabbc.mockapi.io/user", api);
  };
  console.log(data.email);
  // get data

  const valueHandler = (event) => {
    setFormValue({ ...data, [event.target.name]: event.target.value });
  };
  const onLogin = () => {
    localStorage.setItem('login',122);
    setIsLoggedIn(true);
  }
  const onLogout = () => {
    localStorage.removeItem('login');
    setIsLoggedIn(false);
  }
  return (
    <Context.Provider
      value={{
        data:data,
        submit: Submit,
        value: valueHandler,
        isLoggedIn:onLogin,
        isLoggedOut:onLogout
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
