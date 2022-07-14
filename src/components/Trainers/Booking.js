/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./BookCard";
import Container from "../GlobalComponents/Container";
import Book from "../Image/book1.jpg";
import { useState } from "react";
import { useEffect, useContext } from "react";
import axios from "axios";
import Context from "../context";

const Booking = (props) => {
  return (
    <section css={styles} className="trainers" id="trainers">
      <h2>
        OUR <span>PRICING</span>
      </h2>
      <Icon />
      <p>
      We offer a range of membership options designed to help you reach your fitness goals 
        <br />
        with an emphasis on individual programs.
      </p>
      <Container>
        <TrainerCard
          id="1"
          title="One Month"
          name="45$/ Mon"
          desc="Trainer Advice 
          Locker + Bathroom
          Personal trainer"
          img={Book}
        />
        <TrainerCard
          id="2"
          title="Three Months"
          name="90$/Mon"
          desc="Trainer Advice 
          Locker + Bathroom
          Personal trainer"
          img={Book}
        />
        <TrainerCard
          id="3"
          title="Nine Months"
          name="130$/Mon"
          desc="Trainer Advice
          Locker + Bathroom
          Personal trainer "
          img={Book}
        />
      </Container>
    </section>
  );
};

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
