import React from "react";
import DevJane01 from "../../assets/img/dev-jane-01.jpg";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Semilore Idowu</strong>{" "}
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Full Stack Dev
      </p>
      <img
        src={DevJane01}
        alt="Semilore Idowu smiling"
        className="intro__img"
      />
    </section>
  );
};

export default Intro;
