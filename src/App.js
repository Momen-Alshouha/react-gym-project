import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Schedule from "./components/Schedule/Schedule";
import Trainers from "./components/Trainers/Booking";
import Contact from './components/Contact/Contact';
import Profile from "./components/Profile/Profile";
// import Header from "./components/Navbar/Header";
// import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
// import Register from "./components/Register/Register";
import SimpleImageSlider from "react-simple-image-slider"; // npm install react-simple-image-slider --save

const images = [
  { url: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
  { url: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
  { url: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" },
  { url: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
  { url: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
  { url: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" },
  { url: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" }
];


const App = () => (



  <div className="App">
    
      <Main />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Welcome />
      <GymProgram />
      <Member />
      <Classes />
      <Schedule />
      <Trainers />
        <h1 style={{textAlign:"center",fontSize:"40px",margin:"20px"}}>Our<span style={{color:"rgb(237, 86, 59)"}}> Gellery</span></h1>
      <div style={{marginLeft:"20%",marginBottom:"30px"}}>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>
      <Contact />
    {/* <Profile /> */}
  </div>
);

export default App;
