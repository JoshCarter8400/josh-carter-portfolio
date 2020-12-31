import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import profilePic from "../Portfolio/img/correct-profile.jpg";

function Header(props) {
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
              <i className="bx bxl-github" alt="">
                <AiFillGithub />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/joshcarter4813"
              target="blank"
              className="linkedin"
            >
              <i className="bx bxl-linkedin">
                <AiFillLinkedin />
              </i>
            </a>
          </div>
        </div>

        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
