/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import classes from './Form.module.css';
import ContactBg from "../Image/contactBg.jpg";
import emailjs from "@emailjs/browser";
const Form = ({ text }) => {
   
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm(
          "service_ya5im95",
          "template_mx39asn",
          e.target,
          "fqBe2jdaTOI5WzEp6"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          });
          e.target.reset()
    };
  return(
  <div css={styles} className="formContainer">
    <form  onSubmit={sendEmail}>
      <input type="text" placeholder="Your Name*" name="name" />
      <input type="text" placeholder="Your Email*" name="email"/>
      <input type="text" placeholder="Subject" />
      <textarea cols="30" rows="10" placeholder="Message" name="massage"></textarea>
      <input type="submit"  value="SEND MASSAGE" className={classes.inp}/>
    </form>
  </div>
)};

const styles = css`
  width: 100%;
  padding: 80px;
  min-height: 60vh;
  display: flex;
  background: url('${ContactBg}') no-repeat center/cover;
  form {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    padding: 40px;
    border-radius: 6px;
    input,
    textarea {
      margin-bottom: 20px;
      padding: 14px;
      border: 1px solid #ddd;
      outline: none;
      &::placeholder {
        color: #7a7a7a;
      }
    }
    input {
      width: 47%;
      &:nth-child(3) {
        width: 100%;
      }
    }
    textarea {
      width: 100%;
    }
    
  }
  @media (max-width: 1200px) {
    padding: 80px 30px;
    form {
      max-width: 900px;
    }
  }
`;

export default Form;
