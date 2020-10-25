import React from "react";
import PortFolio01 from "../../assets/img/portfolio-01.jpg";
import PortFolio02 from "../../assets/img/portfolio-02.jpg";
import PortFolio03 from "../../assets/img/portfolio-03.jpg";
import PortFolio04 from "../../assets/img/portfolio-04.jpg";
import PortFolio05 from "../../assets/img/portfolio-05.jpg";
import PortFolio06 from "../../assets/img/portfolio-06.jpg";
import PortFolio07 from "../../assets/img/portfolio-07.jpg";
import PortFolio08 from "../../assets/img/portfolio-08.jpg";
import PortFolio09 from "../../assets/img/portfolio-09.jpg";
import PortFolio10 from "../../assets/img/portfolio-10.jpg";

const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        <a href="#" class="portfolio__item">
          <img src={PortFolio01} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio02} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio03} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio04} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio05} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio06} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio07} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio08} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio09} alt="" className="portfolio__img" />
        </a>
        <a href="#" class="portfolio__item">
          <img src={PortFolio10} alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
};

export default MyWork;
