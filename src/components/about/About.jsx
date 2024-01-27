import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import data from "./aboutData.json";

const About = () => {
  return (
    <section id="about">
      <h5>{data.properties.pageTitle.properties.h5}</h5>
      <h2>{data.properties.pageTitle.properties.h2}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {data.properties.subtitles.properties.map((property, index) => {
              return (
                <article
                  key={property.subtitle + index}
                  className="about__card"
                >
                  <FaAward className="about__icon" />
                  <h5>{property.subtitle}</h5>
                  <small>{property.details}</small>
                </article>
              );
            })}
          </div>

          <p>
            {data.properties.summary.properties.line1}
            <br /> {data.properties.summary.properties.line2}
            <br /> {data.properties.summary.properties.line3}
          </p>

          <a href="#contact" className="btn btn-primary">
            {data.properties.link.properties.link}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
