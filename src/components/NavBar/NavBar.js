import React from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const closeNavBar = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link" onClick={closeNavBar}>
            <HashLink
              to="/#home"
              style={{ textDecoration: "none", color: "var(--light)" }}
            >
              🏠Home
            </HashLink>
          </a>
        </li>
        <li className="nav__item">
          <a href="#services" className="nav__link" onClick={closeNavBar}>
            <HashLink
              to="/#services"
              style={{ textDecoration: "none", color: "var(--light)" }}
            >
              👨‍🔧My Services
            </HashLink>
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link" onClick={closeNavBar}>
            <HashLink
              to="/#about"
              style={{ textDecoration: "none", color: "var(--light)" }}
            >
              👦About Me
            </HashLink>
          </a>
        </li>
        <li className="nav__item">
          <a href="#work" className="nav__link" onClick={closeNavBar}>
            <HashLink
              to="/#work"
              style={{ textDecoration: "none", color: "var(--light)" }}
            >
              🚀My Work
            </HashLink>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
