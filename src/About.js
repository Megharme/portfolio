import React from 'react';
import './About.css';
import AboutSk from './AboutSk';


function About() {
  return (
      <div className='about'>
          <div className="about__section1">
              <h3>About Me</h3>
              <hr className='about__line' />
              <p>A highly motivated and multi-talented professional, with strong interpersonal skills, who is
                  seeking new ways to expand knowledge and provide significant contributions by leveraging creativity and team work.</p>
          </div>
        <AboutSk />
    </div>
  )
}

export default About
