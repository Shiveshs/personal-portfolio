import React from "react";
import "./portfolio.css";
import ProjectImg_1 from "../../assets/portfolio1.PNG";
import ProjectImg_2 from "../../assets/portfolio2.PNG";

const data = [
  {
    id: 1,
    image: ProjectImg_1,
    title: " Personal Portfolio",
    github: "https://github.com/Shiveshs/personal-portfolio",
    demo: "https://shiveshs.github.io/personal-portfolio/",
  },
  {
    id: 2,
    image: ProjectImg_2,
    title: " Tic Tac Toe",
    github: "https://github.com/Shiveshs/tic-tac-toe",
    demo: "https://shiveshs.github.io/tic-tac-toe/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id,image,demo,github,title}, key=id)=>{
          return <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="Project One" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} target="_blank" className="btn" rel="noreferrer">
              Github
            </a>
            <a
              href={demo}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        })}
      </div>
    </section>
  );
};

export default Portfolio;
