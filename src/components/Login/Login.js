
import React, { Fragment } from "react";
import classes from "./Login.module.css";



function Login() {


    return (

        <Fragment>
      <div className={classes.container}>
        <div className={classes.aside}>
          <h1 className={classes.title}>LOG IN</h1>
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
          
            <button>Log In</button>
            <a href="" className={classes.anchor}>
              I'm already member
            </a>
          </form>
        </ul>
      </div>
      </Fragment>
      



    );
}

export default Login;