import React from "react";
import logo from '../logo.svg';
import '../App.css';

function Img(){
    return(
    <div>
        <img src={logo} className="App-logo1" alt="logo" />
        <h1 style={{marginLeft:"600px"}}>Welcome to React</h1>
     </div>

    )
}

export default Img;