import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";

const Contact = () => {
  const a= useContext(noteContext)
    return (
      <>
    <h1>Contact Us</h1>
    <div>
      In case of any problem contact us at {a.s2.phone}
    </div>
    </>
    )
  };
  


export default Contact;