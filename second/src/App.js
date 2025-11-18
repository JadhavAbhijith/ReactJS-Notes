import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


function App() {
  return(
  
    <Router>
      <div style={{textAlign: "center"}}>
        <h2>React Router Example</h2>

        {/*Navigation Links*/}
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about">About</Link> | {" "}
          <Link to="/contact">Contact</Link>
        </nav>


        <br/>

        {/*Page Routes */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
 
}

export default App;
