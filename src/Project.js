import React from 'react';
import './Project.css';
import exp from './assets/experience.png' 

function Project() {
  return (
    <div className='project'>
      <h3>Experience</h3>
      <hr />
        <div className="project__exp">
        <img src={exp} alt="Experience" className="project__expimg" />
        <div className="project__expdesc">
          <p>Worked at Tata Consultancy services for a period of two years as Assistant System Engineer. My team managed a variety of
              notification systems in a prominent banking sector application. 
            My responsibilities included restarting, troubleshooting, resolving and escalating issues related to the application performance
            and functioning. Monitoring the application's activity and promptly reporting them, managing incidents and
            providing solutions to the customers.</p>
            <p>Got recognised as the <strong>"Star of the Month"</strong> in November 2022, for managing a critical situation, which would have had a significant impact on the client.</p>
        </div>
      </div>
      <h3>Projects</h3>
      <hr />
          <div className="project__experience">
              
          </div>
    </div>
  )
}

export default Project
