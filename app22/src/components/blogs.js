import React, {useContext, useEffect} from "react";
import noteContext from "../context/notes/noteContext";

const Blogs = () => {
  const a = useContext(noteContext)
  useEffect(()=>{
    a.update()
  })
    return (
      <>
    <h1>Blog Articles</h1>
    <div>
      This Website is created by {a.state.name} from {a.state.place}
    </div>
    </>
    )
  };
  
  export default Blogs;