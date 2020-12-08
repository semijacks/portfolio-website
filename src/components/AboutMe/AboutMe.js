import React from "react";

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section_title--about">👦Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        FullStack Developer based out of LAGOS
      </p>

      <div className="about-me__body">
        <p>
          Semilore Idowu is a frontend and aspiring full-stack software engineer
          based out of Lagos, Nigeria. He is currently in the process of
          acquiring a Bachelor of Science degree in computer engineering from
          the University of Lagos. He has a very sound software engineering
          background. He can usually be found building responsive and modern
          websites using popular javascript frameworks like ReactJS.
        </p>
        <p>
          {" "}
          He is passionate about tech in general and hopes to one day solve a
          problem facing Nigeria and Africa in general using software. To this
          end, he is looking to seek as much experience as possible by
          collaborating with the top minds in the software industry.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
