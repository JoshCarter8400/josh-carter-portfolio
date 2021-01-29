import React, { useState } from 'react';
import SkillItem from '../SkillItem';

function Skills() {
  const [skills] = useState([
    'Bootstrap',
    'React',
    'JavaScript ES6',
    'Jest',
    'TypeScript',
    'Agile Development',
    'Progressive Web Apps',
    'Node',
    'Express',
    'MongoDB/Mongoose',
    'SQL/Sequelize',
    'GraphQL',
    'Git/Github',
    'Heroku',
  ]);
  return (
    <>
      <div className="about content">
        <h3>Skills</h3>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            {skills.slice(0, 7).map((skill) => (
              <SkillItem name={skill} />
            ))}
          </ul>
        </div>
        <div className="d-flex col-lg-6">
          <ul>
            {skills.slice(7).map((skill) => (
              <SkillItem name={skill} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;
