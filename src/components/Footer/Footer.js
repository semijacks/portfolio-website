import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:semijacks27@gmail.com" className="footer__link">
        📧semijacks27@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://linkedin.com/in/semilore-idowu-963518182/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/semijacks"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://twitter.com/IAmSemijacks"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://facebook.com/semijacks.idowu"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://dribbble.com/semijacks"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
