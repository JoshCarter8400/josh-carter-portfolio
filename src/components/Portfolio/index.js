import React from "react";
import killTheKeg from "./img/kill-the-keg.png";
import blogSite from "./img/blog-site-mvc.jpg";
import weatherDashboard from "./img/5-day.jpg";
import movieNight from "./img/family-movie.jpg";
import employeeTracker from "./img/employee-tracking.jpg";
import codeQuiz from "./img/code-quiz.jpg";
import workDay from "./img/work-day.jpg";
import teamProfile from "./img/team-profile.jpg";
import passwordGenerator from "./img/password.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

function Portfolio() {
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
                <img src={killTheKeg} className="img-fluid" alt="" />
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Public Blog Site</h3>
                <img src={blogSite} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://rocky-cove-83154.herokuapp.com/"
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
                    href="https://github.com/JoshCarter8400/tech-blog"
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Weather Dashboard</h3>
                <img src={weatherDashboard} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://joshcarter8400.github.io/Weather-Dashboard/"
                    data-gall="portfolioGallery"
                    title="Weather Dashboard"
                    target="blank"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/Weather-Dashboard"
                    target="blank"
                    title="Github"
                  >
                    <i className="bx bxl-github">
                      <AiFillGithub />
                    </i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Quarantine Movie Nights</h3>
                <img src={movieNight} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://joshcarter8400.github.io/quarantine-movie-nights/"
                    data-gall="portfolioGallery"
                    title="Quarantine Movie Nights"
                    target="blank"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/quarantine-movie-nights"
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Employee Tracker</h3>
                <img src={employeeTracker} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://drive.google.com/file/d/1UGaoigaSNjBwoRfkr0olVUatX_lssFCB/view"
                    data-gall="portfolioGallery"
                    title="App 3"
                    target="blank"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/employee-tracker"
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Coding Quiz!</h3>
                <img src={codeQuiz} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://joshcarter8400.github.io/Code-Quiz/"
                    data-gall="portfolioGallery"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" target="blank">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/Code-Quiz"
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Work Day Scheduler</h3>
                <img src={workDay} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://joshcarter8400.github.io/Work-Day-Scheduler/"
                    data-gall="portfolioGallery"
                    title="Web 2"
                    target="blank"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/Work-Day-Scheduler"
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Team Profile Generator</h3>
                <img src={teamProfile} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://drive.google.com/file/d/1Kayd8H1IqGEkQdXyNWh512L_gGRUykLB/view"
                    data-gall="portfolioGallery"
                    target="blank"
                    title="Card 1"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/team-profile-generator"
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <h3 className="about content h3">Password Generator</h3>
                <img src={passwordGenerator} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="https://joshcarter8400.github.io/Password-Generator/"
                    data-gall="portfolioGallery"
                    title="App 2"
                    target="blank"
                  >
                    <i className="bx bx-plus">
                      <AiOutlineEye />
                    </i>
                    Demo
                  </a>
                  <a
                    href="https://github.com/JoshCarter8400/Password-Generator"
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
}

export default Portfolio;
