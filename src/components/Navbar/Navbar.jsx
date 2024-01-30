import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import NavLogo from "./nav-logo.gif";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav>
      <Link to="/" className="nav-logo-div">
        <img src={NavLogo} alt="Logo" />
      </Link>
      <i
        className={`fa-solid fa-bars ${isActive ? "fa-xmark" : ""}`}
        id="hamburger-icon"
        onClick={toggleMenu}
      ></i>
      <ul id="navLinks" className={isActive ? "active-menu" : ""}>
        <li className="menu-links" onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="menu-links" onClick={closeMenu}>
          <Link to="/about">About</Link>
        </li>
        <li className="menu-links" onClick={closeMenu}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="menu-links" onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
