import React from "react";
import DevSemilore from "../../assets/img/dev-semilore-cropped.JPG";
import DevJane02 from "../../assets/img/dev-jane-02.jpg";

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section_title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        FullStack Developer based out of LAGOS
      </p>

      <div className="about-me__body">
        <p>
          Laboris tempor ut dolor labore eu adipisicing duis. Mollit
          reprehenderit laboris ullamco nulla ut et. Amet exercitation
          adipisicing incididunt anim aliquip nostrud minim deserunt occaecat
          deserunt dolor est sit.
        </p>
        <p>
          {" "}
          Laboris tempor ut dolor labore eu adipisicing duis. Mollit
          reprehenderit laboris ullamco nulla ut et. Amet exercitation
          adipisicing incididunt anim aliquip nostrud minim deserunt occaecat
          deserunt dolor est sit.
        </p>
      </div>

      <img
        src={DevSemilore}
        alt="Semilore leaning against a bus"
        className="about-me__img"
      />
    </section>
  );
};

export default AboutMe;
