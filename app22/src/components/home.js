import React from "react";
import Greet from './greet'
import Img from './img'
import '../App.css'
import {Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Useref from "./useref";
import Usereduce from "./usereduce";


const Home = () => {
    return (
        <>
          <h1>Home</h1>
          <Greet />
          <Img />
          <Useref /><Usereduce /><br></br>
        
          <Link to="/register">
            {/* <button className="btn1">Registration</button> */}
            <Button className="btn1" variant="primary">Registration</Button>
          </Link>
          <Link to="/order">
            <Button className="btn1" variant="primary">Order here</Button>
          </Link>
          
        </>
      );
  };
  
  export default Home;