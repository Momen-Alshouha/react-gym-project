/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React,{useContext} from "react";
import Link from "./Link";
import { NavLink } from "react-router-dom";
import Context from "../context";
import Button from "../GlobalComponents/Button";
import Login from "../Login/Login";
import classes from '../Login/Login.module.css'
const LinksContainer = (props,{ hidden }) => {
  const ctx = useContext(Context);
  const logoutHandler = () => {
    console.log('hi');
    localStorage.removeItem('id');
    localStorage.removeItem('isLoggedIn');
  }
  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name="HOME" linkTo="#home" />
      <Link name="ABOUT" linkTo="#trainers" />
      <Link name="CLASSES" linkTo="#ourClasses" />
      <Link name="SCHEDULES" linkTo="#schedule" />
      <Link name="CONTACT" linkTo="#contact" />
      {localStorage.getItem('isLoggedIn') != '1' && <NavLink onClick={logoutHandler} to="/register" className={classes.NavLink}>Signup</NavLink>}
      {localStorage.getItem('isLoggedIn') == '1' && <NavLink onClick={logoutHandler} to="/" className={classes.NavLink}>Logout</NavLink>}
      {localStorage.getItem('isLoggedIn') != '1' && <NavLink onClick={logoutHandler} to="/Login" className={classes.NavLink}>Signin</NavLink>}
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;
    background: rgba(35, 45, 57, 0.8);
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default LinksContainer;
