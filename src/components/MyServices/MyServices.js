import React from "react";

const MyServices = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">👨‍🔧What I do</h2>
      <div className="services">
        <div className="service">
          <h3>🎯Front End Development</h3>
          <p>
            I build mobile first and responsive web applications using the very
            versatile ReactJS frontend framework. I also create JAMStack
            (server-side rendering) applications using NextJS.
          </p>
        </div>
        <div className="service">
          <h3>🎯Back End Development</h3>
          <p>
            I develop modern REST APIs using highly in-demand technologies such
            as ExpressJS (a NodeJS based framework), ApolloGRAPHQL (a framework
            based on the graphql query language).
          </p>
        </div>
        <div className="service">
          <h3>🎯FullStack Apps</h3>
          <p>
            I build complete apps with modern user interfaces in communication
            with APIs which equip your app with everything it needs.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        🚀My Work
      </a>
    </section>
  );
};

export default MyServices;
