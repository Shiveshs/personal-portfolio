import React from "react";
import "./services.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>Where and what I have worked on</h5>
      <h2>Work Experiences</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h2>Senior Software Engineer</h2>
            <h3>Mphasis Limited</h3>
            <h5>December 2021 - Present</h5>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Extensively worked on feature development using ReactJS, SASS,
                CSS, and JS.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Worked on multiple features and developed components as per
                design and requirements.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Worked on creation of Technical Design Documentation (TDD) for
                different features/releases.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Resolved multiple bugs/blockers and helped in clearing backlogs
                for each sprint.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Worked on creating new AEM pages according to the authoring
                requirement.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Worked on integrating API’s with frontend for different use
                cases and scenarios.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Worked closely with design team for discussions and finalization
                of UI design for new features.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Worked on unit test cases using Jest/ Enzyme for UI components
                and functionalities.
              </p>
            </li>
          </ul>
        </article>
        {/* END of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h2>Senior System Engineer</h2>
            <h3>IBM</h3>
            <h5>January 2021 - December 2021</h5>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Extensively worked on business and persistence tier using
                ReactJS, SASS, HTML and CSS.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Created multiple generic and customized reusable React
                components the project.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Involved in writing application-level code to interact with APIs
                using AJAX, AXIOS, JSON.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Analysed cross browser DOM Layout, DOM functions, JS, CSS using
                Developer Tool Bar.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Created responsive react components easily rendered in all kinds
                of screens.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Used multiple react packages like react-router, redux, slick,
                carousal, slider etc.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Used Lighthouse tool for optimising code quality and application
                performance.
              </p>
            </li>
          </ul>
        </article>
        {/* END of Web Development */}

        <article className="service">
          <div className="service__head">
          <h2>System Engineer</h2>
            <h3>Tata Consultancies Services</h3>
            <h5>June 2018 - January 2021</h5>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Carrying out Agile practices, requirements gathering,
                analysis and estimations.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Working closely with product owner and other stakeholders for product understanding</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Developing user stories to enhance/add features as per client’s requiremnets.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Developing reusable and responsive components using ReactJS library.</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Used Apollo Client to make service calls to the GraphQL backend.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Unit test cases and functional testing from developer’s point of
                view
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Writing Cypress automation test scripts with a developer’s point
                of view.
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>
                Demo user stories to client stakeholders at the end of each
                sprint.
              </p>
            </li>
          </ul>
        </article>
        {/* END of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
