import React, {useContext} from "react";
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
// import NoteState from "./context/notes/NoteState";
import noteContext from './context/notes/noteContext';


const Layout = () => {
  const a = useContext(noteContext)
  return (
    <>
    

        <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p1>React</p1>
        <nav className='linkstyle'>
        <ul >
            <Link style={{ marginLeft: "750px",paddingTop: "500px" }} to="/">Home</Link>
         
            <Link style={{ marginLeft: "25px"}} to="/blogs">Blogs</Link>
          
            <Link style={{ marginLeft: "25px"}} to="/contact">Contact</Link>
          
        </ul>
      </nav>
        

        </header>
        
      
        
      
      <Outlet />
        
  
      
      <footer>
        <img src={logo} className="App-logo2" alt="logo" />
        <p1>React</p1>
        <p>
        
        <Link  to="*">
          src/App.js
        </Link>
          
        </p>
        In case of any enquery call us at {a.s2.phone}
        


      </footer>
      
    </>
  )
};

export default Layout;
