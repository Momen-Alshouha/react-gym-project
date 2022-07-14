import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context";
import ErrorModel from "../UI/ErrorModel";
import classes from "./Register.module.css";
const Register = () => {
  const ctx = useContext(Context);
  const ErrorHandler = () => {
    ctx.setError(null);
  };
  return (
    <Fragment>
      {ctx.error && (
        <ErrorModel
          title={ctx.error.title}
          message={ctx.error.message}
          click={ErrorHandler}
        />
      )}
      <div className={classes.container}>
        <div className={classes.aside}>
          <h1 className={classes.title}>Signup</h1>
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
            <button>
              <Link
                to={{
                  pathname: `/Login`,
                }}
                style={{ textDecoration: "none", color: "#182434" }}
              >
                Signup
              </Link>
            </button>
            <Link
              className={classes.anchor}
              to={{
                pathname: `/Login`,
              }}
            >
              already member? login
            </Link>
          </form>
        </ul>
      </div>
    </Fragment>
  );
};
export default Register;
