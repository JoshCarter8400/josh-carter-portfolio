import React, { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ProjectList = () => {
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Kill The Keg",
      image: "./img/kill-the-keg.png",
      description:
        "Helping bar owners to quickly deplete kegs from leftover product, while helping avid beer drinkers find less expensive ways to drink with friends.",
      tools: "Sequelize/Express/Node/Handlebars",
      github: "https://github.com/JoshCarter8400/kill-the-keg",
      demo: "https://obscure-eyrie-90813.herokuapp.com/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Social Network API",
      description:
        "This is a project where I built the APIs on the backend for a social network web application. It allows users to share their thoughts, are able to react to friend's thoughts, and create a friends list.",
      tools: "MongoDB/Mongoose/Express/Node",
      github: "https://github.com/JoshCarter8400/social-network-api",
      demo: "https://rocky-cove-83154.herokuapp.com/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Public Blog site",
      description:
        "This is a full stack application that allows user to post their thoughts and opinions through their personal blog post on a CMS style website. This project follows the Model View Controller paradigm.",
      tools: "Sequelize/Express/Node/Express-Session",
      github: "https://github.com/JoshCarter8400/tech-blog",
      demo: "https://rocky-cove-83154.herokuapp.com/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Weather Dashboard",
      description:
        "In this application we used Third Party APIs to get the weather and current conditions for the location that the user searches for. We used JavaScript to make the application interactive by allowing ciities that are searched for to be saved into a card list that can be clicked on again to see that cities conditions at anytime.",
      tools: "HTML5/CSS3/JavaScript/Bootstrap/Moment.js/AJAX",
      github: "https://github.com/JoshCarter8400/Weather-Dashboard",
      demo: "https://joshcarter8400.github.io/Weather-Dashboard/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Quarantine Movie Nights",
      description:
        "To assist a user in locating a streaming movie based on the genre and actor of choice. The app will also save a Watch List for any movies selected within the app.",
      tools: "HTML5/CSS3/JavaScript/Bootstrap/Moment.js/AJAX",
      github: "https://github.com/JoshCarter8400/quarantine-movie-nights",
      demo: "https://joshcarter8400.github.io/quarantine-movie-nights/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Employee Tracker",
      description:
        "This is a command line application that allows the owner of a business to view and manage the employees and departments of the business as they see fit to organize and improve the business.",
      tools: "HTML5/CSS3/Bulma/AJAX/Javascript",
      github: "https://github.com/JoshCarter8400/employee-tracker",
      demo:
        "https://drive.google.com/file/d/1UGaoigaSNjBwoRfkr0olVUatX_lssFCB/view",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Coding Quiz!",
      description:
        "This project is a dynamic interactive quiz on coding knowledge. The quiz is timed and with each incorrect answer 10 seconds is removed from the timer when you reach the end of the game the remaining time is your score!! You will be able to save your initials and score at the end of the game. Have fun!!",
      tools: "HTML5/CSS3/Javascript/DOM Manipulation",
      github: "https://github.com/JoshCarter8400/Code-Quiz",
      demo: "https://joshcarter8400.github.io/Code-Quiz/",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Team Profile Generator",
      description:
        "This is a command line application that allows an officer manager to build his team through a series of prompts. They can select another manager, an engineer, and an intern. Their answers are then used to generate an HTML file that displays in the browser. The manager is the able to send the employees an email and to click their github username to view their profile.",
      tools: "Node/Express/Inquirer/TDD/OOP/Bootstrap",
      github: "https://github.com/JoshCarter8400/team-profile-generator",
      demo:
        "https://drive.google.com/file/d/1Kayd8H1IqGEkQdXyNWh512L_gGRUykLB/view",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
    {
      name: "Password Generator",
      image: "./img/password.jpg",
      description:
        "This is a command line application that allows an officer manager to build his team through a series of prompts. They can select another manager, an engineer, and an intern. Their answers are then used to generate an HTML file that displays in the browser. The manager is the able to send the employees an email and to click their github username to view their profile.",
      tools: "JavaScript",
      github: "https://joshcarter8400.github.io/Password-Generator/",
      demo: "https://github.com/JoshCarter8400/Password-Generator",
      icon1: <AiOutlineEye />,
      icon2: <AiFillGithub />,
    },
  ]);

  const currentProjects = projects.filter(
    (project) => project.name === "Portfolio"
  );

  return (
    <main id="main">
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p></p>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Kill The Keg</h3>
                <img
                  src={require(`./img/kill-the-keg.png`)}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-links">
                  <a
                    href="https://obscure-eyrie-90813.herokuapp.com/"
                    data-gall="portfolioGallery"
                    target="blank"
                    title="App 2"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/kill-the-keg"
                    target="blank"
                    title="More Details"
                  >
                    <i className="bx bxl-github">
                      <AiFillGithub />
                    </i>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
