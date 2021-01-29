import React from 'react';

function SkillItem({ name }) {
  return (
    <li>
      <i className="icofont-rounded-right"></i> <strong>{name}</strong>
    </li>
  );
}

export default SkillItem;
