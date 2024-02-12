import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "black", color: "white", padding: "10px" }}>
      <div>
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px", color: "white" }}>About</Link>
        <Link to="/contact" style={{ marginRight: "10px", color: "white" }}>Contact</Link>
        <Link to="/blue" style={{ marginRight: "10px", color: "white" }}>Blue</Link>
        <Link to="/red" style={{ marginRight: "10px", color: "white" }}>Red</Link>
      </div>
    </footer>
  );
}

export default Footer;