import React from "react";
import Footer from "../components/Footer/Footer";
import Portfolio01 from "../assets/img/portfolio-01.jpg";
import PortfolioDetails from "../assets/img/services-bg.jpg";
import Devjane from "../assets/img/devjane.png";
import { HashLink } from "react-router-hash-link";

const openNavBar = () => {
  document.body.classList.toggle("nav-open");
};

const closeNavBar = () => {
  document.body.classList.remove("nav-open");
};

const PortfolioItem = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={Devjane} alt="logo" />
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
                <HashLink
                  to="/#home"
                  style={{ textDecoration: "none", color: "var(--light)" }}
                >
                  Home
                </HashLink>
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={closeNavBar}>
                <HashLink
                  to="/#services"
                  style={{ textDecoration: "none", color: "var(--light)" }}
                >
                  My Services
                </HashLink>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeNavBar}>
                <HashLink
                  to="/#about"
                  style={{ textDecoration: "none", color: "var(--light)" }}
                >
                  About Me
                </HashLink>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link" onClick={closeNavBar}>
                <HashLink
                  to="/#work"
                  style={{ textDecoration: "none", color: "var(--light)" }}
                >
                  My Work
                </HashLink>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          The title <strong>of my project</strong>{" "}
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          A short subitle
        </p>
        <img src={Portfolio01} alt="" className="intro__img" />
      </section>
      <div className="portfolio-item-individual">
        <p>
          Id id velit deserunt Lorem. Nisi sit minim ipsum ullamco veniam tempor
          pariatur velit eiusmod dolor veniam id culpa. Irure velit occaecat ad
          aute esse do Lorem.
        </p>
        <img src={PortfolioDetails} alt="" className="intro_img" />
        <p>
          Id id velit deserunt Lorem. Nisi sit minim ipsum ullamco veniam tempor
          pariatur velit eiusmod dolor veniam id culpa. Irure velit occaecat ad
          aute esse do Lorem.{" "}
        </p>
        <p>
          Id id velit deserunt Lorem. Nisi sit minim ipsum ullamco veniam tempor
          pariatur velit eiusmod dolor veniam id culpa. Irure velit occaecat ad
          aute esse do Lorem.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PortfolioItem;
