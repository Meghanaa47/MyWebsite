import React from "react";
import "../Styles/Navbar.css";


const Navbar = () => {
  return (
    <nav>
      <div className="logo">DMK.</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
