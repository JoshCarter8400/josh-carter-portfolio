import React from 'react';
import credentials from './Josh-Resume.pdf';

function Resume() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <div className="section-title about content">
              <h2>Skills</h2>
              <button className="about content resume-btn">
                <a href={credentials} target="blank">
                  <span className="resume-btn">
                    Click here to Download my Resume
                  </span>
                </a>
              </button>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>React</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>HTML5</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>CSS3</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Bootstrap</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>React</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>JavaScript ES6</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>jQuery</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Handlebars</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>RESTful APIs</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Progressive Web Apps</strong>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Node</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Express</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Mongoose</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Sequelize</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>MySQL</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Inquirer</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Object-Oriented Programming</strong>
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Model-View-Controller Paradigm</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;
