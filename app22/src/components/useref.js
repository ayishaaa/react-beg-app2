import React, { useState,useRef } from "react";
import '../App.css';


function Useref(){
    const refElement = useRef("");
    const[name,setName]= useState("Hello")
    console.log(refElement)
    function Reset(){
        setName("")
        refElement.current.focus()
    }
    function handleInput(){
        refElement.current.style.color="blue"
        refElement.current.value="Enter Your Name"
    }
    return(
        <><br></br>
        <div  style={{"textAlign":"center"}}>
        <h3>Learn useRef</h3>
        <input ref={refElement} type="text" onClick={handleInput} value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={Reset}>Reset</button>
        
        </div><br></br>
        </>
    )
}

export default Useref;