import React, { Fragment } from "react";
import classes from "./Register.module.css";
const Register = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.aside}>
          <h1 className={classes.title}>REGISTER</h1>
        </div>
        <ul className={classes.parent}>
          <form>
            <li>
              <label htmlFor="EMail">E-MAIL</label>
              <br />
              <input type="email" id="Email" placeholder="Write Email Here" />
            </li>
            <li>
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                type="password"
                id="password"
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
