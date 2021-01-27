import React from 'react';
import profilePic from '../Portfolio/img/correct-profile.jpg';

function About() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Full Stack Web Developer and Personal Trainer with a background in
              sales and customer service. I am skilled on both the front-end and
              back-end of development but I definitely enjoy the back-end
              technologies much more. I have strong problem-solving skills and
              communicate well within a team as I am open-minded to all ideas
              and solutions. I’m constantly seeking ways to improve myself and
              thinking of how to be helpful to those around me. You will get a
              person with an eagerness to learn and willingness to try new
              things. I will always give you an honest effort to put forth the
              best quality product possible.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={profilePic} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Contact Info</h3>
              <p class="font-italic">
                Please feel free to contact me to start our journey together.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>Phone:</strong> 305-896-2811
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>City:</strong> Key West, FL
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>Email: </strong>
                      <a href="mailto:Joshcarter8400@gmail.com">
                        Joshcarter8400@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{' '}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>

              <div className="about content">
                <h3>Skills</h3>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
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
                <div className="d-flex col-lg-6">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
