import React from "react";
import "./portfolio.css";
import ProjectImg_1 from "../../assets/portfolio1.PNG";
// import ProjectImg_2 from "../../assets/portfolio2.jfif";
// import ProjectImg_3 from "../../assets/portfolio3.jpg";
// import ProjectImg_4 from "../../assets/portfolio4.jpg";
// import ProjectImg_5 from "../../assets/portfolio5.jfif";
// import ProjectImg_6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: ProjectImg_1,
    title: " Personal Portfolio",
    github: "https://github.com/Shiveshs/personal-portfolio",
    demo: "https://shiveshs.github.io/personal-portfolio/",
  },
  // {
  //   id: 2,
  //   image: ProjectImg_2,
  //   title: " Project2",
  //   github: "https://github.com",
  //   demo: "https://reactdocs.com",
  // },
  // {
  //   id: 3,
  //   image: ProjectImg_3,
  //   title: " Project3",
  //   github: "https://github.com",
  //   demo: "https://reactdocs.com",
  // },
  // {
  //   id: 4,
  //   image: ProjectImg_4,
  //   title: " Project4",
  //   github: "https://github.com",
  //   demo: "https://reactdocs.com",
  // },
  // {
  //   id: 5,
  //   image: ProjectImg_5,
  //   title: " Project5",
  //   github: "https://github.com",
  //   demo: "https://reactdocs.com",
  // },
  // {
  //   id: 6,
  //   image: ProjectImg_6,
  //   title: " Project6",
  //   github: "https://github.com",
  //   demo: "https://reactdocs.com",
  // },
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
            <img src={image} alt="Project Image One" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} target="_blank" className="btn">
              Github
            </a>
            <a
              href={demo}
              target="_blank"
              className="btn btn-primary"
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
