import React from "react";
import "./services.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import data from "./servicesData.json";

const Services = () => {
  return (
    <section id="services">
      <h5>{data.properties.pageTitle.properties.h5}</h5>
      <h2>{data.properties.pageTitle.properties.h2}</h2>

      <div className="container services__container">
        {data.properties.experiences.properties.map((org, index) => {
          return (
            <article key={org.organisation.h3} className="service">
              <div className="service__head">
                <h2>{org.organisation.h2}</h2>
                <h3>{org.organisation.h3}</h3>
                <h5>{org.organisation.h5}</h5>
                <p className="service__context">{org.organisation.context}</p>
              </div>
              <ul className="service__list">
                {org.organisation.properties.map((property, index) => {
                  return (
                    <li key={property.details + index}>
                      <BsFillCheckCircleFill className="service__list-icon" />
                      <p>{property.details}</p>
                    </li>
                  );
                })}
              </ul>
              <p className="service__technologies"><strong>Technologies:</strong> {org.organisation.technologies}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
