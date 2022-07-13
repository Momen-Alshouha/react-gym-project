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
      <Contact />
    {/* <Profile /> */}
  </div>
);

export default App;
