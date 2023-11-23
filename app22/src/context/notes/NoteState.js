import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 ={
        "name":"Ayisha",
        "place":"Calicut",
        "phone":"9526347895",
    }
    const s2 ={
        "name":"Fidha",
        "place":"Malappuram",
        "phone":"7559254589",
    }
    const [state, setState]=useState(s1);
    const update=()=>{
        setTimeout(()=>{
            setState({
                "name":"Adithya",
                "place":"Bangalore"
            })
        },1000)
    }
    return(
        <>
        <noteContext.Provider value={{state, update, s2}}>
            {props.children}
        </noteContext.Provider>
        
        </>
    )
}

export default NoteState;
