import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import categories from "./experienceData.json";

const Experience = () => (
  <section id="experience">
    <h5>Tools and technologies I work with</h5>
    <h2>Technical Skills</h2>
    <div className="container experience__container">
      {categories.map(({ title, items }) => (
        <div key={title}>
          <h3>{title}</h3>
          <div className="experience__content">
            {items.map(skill => (
              <article key={skill} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Experience;
