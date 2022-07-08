/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./BookCard";
import Container from "../GlobalComponents/Container";
 import Book from "../Image/book.jpg";
import { useState} from 'react';
import { useEffect, useContext} from 'react';
import axios from 'axios';
import Context from "../context";

const Booking = () => {
const oneMonth=1;
const threeMonth=3;
const nineMonth=9;
const [choose, setChoose] = useState(0);

const userId = JSON.parse(localStorage.getItem('id'));

  if (userId != null) {
    axios.post(`https://62c54d04134fa108c24dadca.mockapi.io/gymapi`, {
     userId,
     oneMonth,
     threeMonth,
     nineMonth
    })
    if(choose==oneMonth||threeMonth||nineMonth){
    window.alert('Booking Done Successfully');
  }}
  else {
    window.alert('Please Login To Complete Your Reservation');
  }
return(
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
    BUILD UP YOUR BODY SHAPE
      <br />
      Build Your Body and Fitness with Professional Touch

    </p>
    <Container>
      <TrainerCard
        title="One Month"
        name="45$/ Mon"
        desc="Locker + Bathroom "
        img={Book}
        
      />
      <TrainerCard
        title="Three Months"
        name="90$/Mon"
        desc="Locker + Bathroom ."
        img={Book}
      />
      <TrainerCard
        title="Nine Months"
        name="130$/Mon"
        desc="Locker + Bathroom "
        img={Book}
      />
    </Container>
  </section>
);
}

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Booking;
