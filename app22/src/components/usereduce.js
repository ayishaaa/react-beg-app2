import React, { useState,useRef } from "react";
import '../App.css';
import Counter from "./counter";

function Usereduce() {
    return(
        <>
        
        <div style={{"textAlign":"center"}}>
        <h3>Learn useReducer</h3>
            <Counter />
        </div>
        </>
    )
}

export default Usereduce