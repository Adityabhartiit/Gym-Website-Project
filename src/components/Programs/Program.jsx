import React from 'react';
import './Program.css';
import { programsData } from '../../data/programsData';


const Program = () => {
  return (
    <div className="program" id="programs">
      <div className="program-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span> 
            <div className="join-now">
            
              <button className=' program-button btn '>Join  Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
