import React from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const openNavBar = () => {
    document.body.classList.toggle("nav-open");
  };
  return (
    <header>
      <div className="logo">🚀</div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={openNavBar}
      >
        <span className="hamburger"></span>
      </button>
      <NavBar />
    </header>
  );
};

export default Header;
