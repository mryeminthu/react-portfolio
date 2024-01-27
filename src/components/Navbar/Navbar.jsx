import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

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
      <Link to="/" className="my-logo">
        Ye Min Thu
      </Link>
      <i
        className={`fa-solid fa-bars ${isActive ? "fa-xmark" : ""}`}
        id="hamburger-icon"
        onClick={toggleMenu}
      ></i>
      <ul
        id="navLinks"
        class="navLinks"
        className={isActive ? "active-menu" : ""}
      >
        <li className="menu-links" onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="menu-links" onClick={closeMenu}>
          <Link to="/about">About</Link>
        </li>
        <li className="menu-links" onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
