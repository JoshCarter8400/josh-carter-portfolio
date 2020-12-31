import React from "react";
import profilePic from "../Portfolio/img/correct-profile.jpg";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

function Nav(props) {
  const { nav = [], currentNav, setCurrentNav } = props;
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

        <nav className="nav-menu">
          <ul>
            <li>
              <a
                className={`mx-1 ${currentNav === "About" ? "navActive" : ""}`}
                href="#about"
                onClick={() => setCurrentNav("About")}
              >
                <i className="bx bx-user">
                  <BiSmile />
                </i>{" "}
                About
              </a>
            </li>

            <li>
              <a href="#resume" onClick={() => setCurrentNav("Resume")}>
                <i className="bx bx-file-blank">
                  <AiOutlineFile />
                </i>{" "}
                Resume
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={() => setCurrentNav("Portfolio")}>
                <i className="bx bx-book-content">
                  <FaRegFolderOpen />
                </i>{" "}
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setCurrentNav("Contact")}>
                <i className="bx bx-envelope">
                  <IoMdContact />
                </i>{" "}
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => Nav(props.nav)}
          className="mobile-nav-toggle d-xl-none"
        >
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  );
}

export default Nav;
