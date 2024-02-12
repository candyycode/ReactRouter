import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar" style={{ backgroundColor: "black", color: "white" }}>
      <Link to="/" style={{fontWeight: 'normal', color: "white"}}>Home</Link>
      <Link to="/about" style={{fontWeight: 'normal', color: "white"}}>About</Link>
      <Link to="contact/" style={{fontWeight: 'normal', color: "white"}}>Contact</Link>
      <Link to="/blue" style={{fontWeight: 'normal', color: "white"}}>Blue</Link>
      <Link to="/red" style={{fontWeight: 'normal', color: "white"}}>Red</Link>
    </div>
  );
}

export default Navbar;