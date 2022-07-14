import React, { Fragment,useContext,useState } from "react";
import classes from "./Login.module.css";
import Context from "../context";
import axios from "axios";
import ErrorModel from "../UI/ErrorModel";
import { Link } from "react-router-dom";
function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const ctx = useContext(Context);
  const emailHandler = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  const passwordHandler = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  }
  const setErrorHandler = () => {
    setError(null);
  }
  const reqo = (e) => {
    e.preventDefault();
    if(email.trim().length === 0 || password.trim().length === 0){
      ctx.setIsLoggedIn(false);
      setError({
        title:'Invalid input',
        message:'Please enter a valid Email and Password'
      })
    }else{
  axios
  .get("https://62c54cf0134fa108c24dabbc.mockapi.io/user")
  .then(function (response) {
    for (let i = 0; i < 100 ; i++) {
      if(       
        response.data[i]?.email === email &&
        response.data[i]?.password === password){
          ctx.setIsLoggedIn(true);
          localStorage.setItem('id',response.data[i].id);
        }
      if((response.data[i]?.email ===  email) && (response.data[i]?.password !== password)) {
        ctx.setIsLoggedIn(false);
        setError({
          title:'Invalid input',
          message:'Please enter a valid password'
        })
        setPassword('');
      }
      if((response.data[i]?.email !==  email) && (response.data[i]?.password === password)) {
        ctx.setIsLoggedIn(false);
        setError({
          title:'Invalid input',
          message:'Please enter a valid email'
        })
        setEmail('');
      }
      }
    }
  );
}
  }
    return (
        <Fragment>
          {error && <ErrorModel title={error.title} message={error.message} click={setErrorHandler}/>}
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
            
            <button onClick={ctx.onLogin}>
            <Link
                to={{
                  pathname: `/`,
                }}
                style={{ textDecoration: "none", color: "#182434" }}
              >
                Log In
              </Link>
             </button>
            <Link to={{pathname : `/Register`}} className={classes.anchor}>New to us? Sign Up</Link>
          </form>
        </ul>
      </div>
      </Fragment>
      



    );
}

export default Login;