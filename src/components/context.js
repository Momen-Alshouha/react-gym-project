import React, { useContext, useState } from "react";
import axios from "axios";
const Context = React.createContext({
  submit: (event) => {},
  value: () => {},
  isLoggedIn:false
});
export const ContextApi = (props) => {
  const [data, setFormValue] = useState({
    name: null,
    email: null,
    password: null,
  });
  const [isLoggedIn,setIsLoggedIn] = useState(false);
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
  return (
    <Context.Provider
      value={{
        data:data,
        submit: Submit,
        value: valueHandler,
        isLoggedIn:isLoggedIn,
        setIsLoggedIn:setIsLoggedIn
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default Context;
