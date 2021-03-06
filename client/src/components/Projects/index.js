import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const ProjectList = (props) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
      <div className="portfolio-wrap">
        <h3 className="about content h3">{props.name}</h3>
        <img src={props.image} className="img-fluid" alt={props.alt} />
        <div className="portfolio-links">
          <a
            href={props.demo}
            data-gall="portfolioGallery"
            target="blank"
            title="App 2"
          >
            <i className="bx bx-plus">
              <AiOutlineEye />
            </i>
            Demo
          </a>
          <a href={props.github} target="blank" title="More Details">
            <i className="bx bxl-github">
              <AiFillGithub />
            </i>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
