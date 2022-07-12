/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useEffect } from "react";
import Booking from "./Booking";
import Socials from "./Socials";
import axios from "axios";
import { useState } from "react";
const TrainerCard = (props,{ title, name, desc, img,button }) => {
  const oneMonth = 1;
  const threeMonth = 3;
  const nineMonth = 9;
  const userId = JSON.parse(localStorage.getItem("id"));
  const [choose, setChoose] = useState({userId,
    oneMonth,
    threeMonth,
    nineMonth,});
  // if(props.id == oneMonth){
  //   setChoose({userId,
  //     oneMonth,
  //     threeMonth:null,
  //     nineMonth:null,})
  // }
  useEffect(()=>{
    if(props.id === '1'){
      setChoose(
        {userId,
          oneMonth,
          threeMonth:null,
          nineMonth:null,
      })
    }
    if(props.id === '2'){
      setChoose(
        {userId,
          oneMonth:null,
          threeMonth,
          nineMonth:null,
      })
    }
    if(props.id === '3'){
      setChoose(
        {userId,
          oneMonth:null,
          threeMonth:null,
          nineMonth,
      })
    }

  },[])
  const bookingHandler = () => {
    if (userId) {
        axios.post(`https://62c54d04134fa108c24dadca.mockapi.io/gymapi`,choose);
      window.alert("Booking Done Successfully");
    } else {
      window.alert("Please Login To Complete Your Reservation");
    }
  };
  return(
  <div css={styles} className="card">

    <img src={props.img} alt="trainer" />
    <h5>{props.title}</h5>
    <h3>{props.name}</h3>
    <p>{props.desc}</p>
   <button class="btn css-12kt7ua-Button" onClick={bookingHandler}>Book Now</button>
  </div>
  )
};

const styles = css`
  width: 100%;
  max-width: 31%;
  background: #fff;
  padding: 44px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  border-radius: 4px;
  img {
   
    width:108%;
    height:330px;
  }
  h5 {
    color: #ed563b;
    margin: 26px 0 9px 0;
    font-weight: 500;
    font-size: 20px;
    text-align:center;
    margin-top:5%;
  }
  h3 {
    text-align:center;
    margin-top:5%;
    color: #232d39;
    letter-spacing: 1px;
  }
  button{
    color: white;
    background:#ed563b ;
    padding: 20px 100px;
    border: none;
    border-radius: 30px;
    transition:0.3s
  }
  button:hover{
    background: #f9735b;
  }
  p {
    margin: 24px 0 28px 0;
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    text-align:center;
  }
  @media (max-width: 830px) {
    max-width: 540px;
    margin: 14px 0;
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    max-width: 47%;
    margin: 14px 0;
  }
`;

export default TrainerCard;
