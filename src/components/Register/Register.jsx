import React, { Fragment, useState } from "react";
import axios from "axios";
import classes from "./Register.module.css";
const Register = () => {
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
  const valueHandler = (event) => {
    setFormValue({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.aside}>
          <h1 className={classes.title}>REGISTER</h1>
        </div>
        <ul className={classes.parent}>
          <form onSubmit={Submit}>
            <li>
              <label htmlFor="NAME">NAME</label>
              <br />
              <input
                type="text"
                id="NAME"
                name="name"
                placeholder="Write Email Here"
                onChange={valueHandler}
              />
            </li>
            <li>
              <label htmlFor="EMail">E-MAIL</label>
              <br />
              <input
                type="email"
                id="Email"
                name="email"
                onChange={valueHandler}
                placeholder="Write Email Here"
              />
            </li>
            <li>
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                onChange={valueHandler}
                placeholder="Write Password Here"
              />
            </li>
            <li>
              <label htmlFor="Confirmpassword">CONFIRM PASSWORD</label>
              <br />
              <input
                type="password"
                id="Confirmpassword"
                placeholder="Confirm Your Password"
              />
            </li>
            <button>Register</button>
            <a href="" className={classes.anchor}>
              I'm already member
            </a>
          </form>
        </ul>
      </div>
    </Fragment>
  );
};
export default Register;
