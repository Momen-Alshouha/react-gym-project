import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context";
import ErrorModel from "../UI/ErrorModel";
import classes from "./Register.module.css";
const Register = () => {
  const ctx = useContext(Context);
  return (
    <Fragment>
      {/* <ErrorModel title="ssss" message="ddddddddddd" /> */}
      <div className={classes.container}>
        <div className={classes.aside}>
          <h1 className={classes.title}>REGISTER</h1>
        </div>
        <ul className={classes.parent}>
          <form onSubmit={ctx.submit}>
            <li>
              <label htmlFor="NAME">NAME</label>
              <br />
              <input
                type="text"
                id="NAME"
                name="name"
                placeholder="Write Email Here"
                onChange={ctx.value}
              />
            </li>
            <li>
              <label htmlFor="EMail">E-MAIL</label>
              <br />
              <input
                type="email"
                id="Email"
                name="email"
                onChange={ctx.value}
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
                onChange={ctx.value}
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
            <button>
              <Link
                to={{
                  pathname: `/`,
                }}
                style={{ textDecoration: "none", color: "#182434" }}
              >
                Register
              </Link>
            </button>
            <a href="" className={classes.anchor}>
              already member? login
            </a>
          </form>
        </ul>
      </div>
    </Fragment>
  );
};
export default Register;
