import React from "react";
// import Devjane from "../../assets/img/devjane.png";

const Header = () => {
  const openNavBar = () => {
    document.body.classList.toggle("nav-open");
  };

  const closeNavBar = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <header>
      <div className="logo">
        {/* <img src={Devjane} alt="logo" /> */}
        🚀
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={openNavBar}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={closeNavBar}>
              🏠Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={closeNavBar}>
              👨‍🔧My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={closeNavBar}>
              👦About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={closeNavBar}>
              🚀My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
