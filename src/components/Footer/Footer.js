import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:semijacks27@gmail.com" className="footer__link">
        semijacks27@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://facebook.com/semijacks.idowu"
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://twitter.com/IAmSemijacks"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/semijacks"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://dribbble.com/semijacks"
            target="_blank"
          >
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
