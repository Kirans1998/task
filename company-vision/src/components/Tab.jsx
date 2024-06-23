import React from 'react';
import './Tab.css';

const Tab = ({ title, description }) => {
  return (
    <div className="tab">
      <div className="tab-content">
      {description && <p>{description}</p>}
        <h2>{title}</h2>
        
      </div>
      <div className="plus">+</div>
    </div>
  );
}

export default Tab;
