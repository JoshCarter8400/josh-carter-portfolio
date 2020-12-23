import React from "react";
import profilePic from "../../assets/img/correct-profile.jpg";

function Nav() {
  // const categories = [
  //   {
  //     name: "About",
  //     description: "Short description of myself",
  //   },
  //   { name: "Portfolio", description: "Collection of my projects" },
  //   { name: "Contact", description: "How to Contact me" },
  //   {
  //     name: "Resume",
  //     description: "List of qualifications",
  //   },
  // ];

  // function categorySelected(name) {
  //   console.log(`${name} clicked`);
  // }
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={profilePic} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="index.html">Josh Carter</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://github.com/JoshCarter8400"
              target="blank"
              className="github"
            >
              <i className="bx bxl-github" alt=""></i>
            </a>
            <a
              href="https://www.linkedin.com/in/joshcarter4813"
              target="blank"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#about">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1Zdfno3WPaAxMlCr3YHMfI6Ujbsb5wWgV2dehVFzh2hI/edit?usp=sharing"
                target="blank"
              >
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="bx bx-book-content"></i> Portfolio
              </a>
            </li>

            <li>
              <a href="#contact">
                <i class="bx bx-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  );
}

export default Nav;
