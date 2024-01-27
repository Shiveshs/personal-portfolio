import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import data from "./experienceData.json";

const Experience = () => {
  return (
    <section id="experience">
      <h5>{data.properties.pageTitle.properties.h5}</h5>
      <h2>{data.properties.pageTitle.properties.h2}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{data.properties.subtitles.properties.frontend.title}</h3>
          <div className="experience__content">
            {data.properties.subtitles.properties.frontend.properties.map(
              (property, index) => {
                return (
                  <article
                    key={property.subtitle + index}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{property.subtitle}</h4>
                      <small className="text-light">{property.details}</small>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
        <div className="experience__backend">
          <h3>{data.properties.subtitles.properties.backend.title}</h3>
          <div className="experience__content">
            {data.properties.subtitles.properties.backend.properties.map(
              (property, index) => {
                return (
                  <article
                    key={property.subtitle + index}
                    className="experience__details"
                  >
                    <BsPatchCheckFill className="experience__details-icon" />
                    <div>
                      <h4>{property.subtitle}</h4>
                      <small className="text-light">{property.details}</small>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
