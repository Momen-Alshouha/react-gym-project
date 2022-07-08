import React, { Fragment,useContext,useState } from "react";
import classes from "./Login.module.css";
import Context from "../context";
import axios from "axios";
function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const ctx = useContext(Context);
  const emailHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  const passwordHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  const reqo = (e) => {
    e.preventDefault();
  axios
  .get("https://62c54cf0134fa108c24dabbc.mockapi.io/user")
  .then(function (response) {
    for (let i = 0; i < 100 ; i++) {
      if (
        response.data[i].email !== email &&
        response.data[i].password !== password
      ) {

        ctx.setIsLoggedIn(false);
        setEmail('');
        setPassword('');
      }
      else if (response.data[i].email ===  email) {
        if (response.data[i].password !== password) {
          setPassword('');
        } else {
          ctx.setIsLoggedIn(true);
          localStorage.setItem('id',response.data[i].id);
          window.location.href="/";
        }
      }
    }
  });
}
    return (
        <Fragment>
      <div className={classes.container}>
        <div className={classes.aside}>
          <h1 className={classes.title}>LOG IN</h1>
        </div>
        <ul className={classes.parent}>
          <form onSubmit={reqo}>
            <li>
              <label htmlFor="EMail">E-MAIL</label>
              <br />
              <input type="email" id="Email" placeholder="Write Email Here" onChange={emailHandler}/>
            </li>
            <li>
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                type="password"
                id="password"
                placeholder="Write Password Here"
                onChange={passwordHandler}
              />
            </li>
          
            <button onClick={ctx.onLogin}>Log In</button>
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