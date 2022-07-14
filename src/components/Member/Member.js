/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import GymOverlayBg from "../Image/gymOverlayBg.jpg";
import {Link} from 'react-router-dom';
const Member = ({ text }) => (
  <section css={styles} className="member">
    <h2>
       <span>About Us</span>
    </h2>
    <p style={{fontSize:"20px"}}>
      We Are Your Best Choice, Our GYM containing special equipment, where people go to do physical exercise and get fit. We offers a variety of exercise equipment and weights going up to 100 pounds.
    BUILD UP YOUR BODY SHAPE.

      <br /> <h2><span>Build Your Body and Fitness with Professional Touch.</span></h2>
    </p>
    
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url('${GymOverlayBg}') no-repeat center/cover;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }
  @media(max-width: 850px) {
    h2{
      font-size: 30px;
    }
    p{
      padding: 0 20px;
      br{
        display: none;
      }
    }
  }
`;

export default Member;
