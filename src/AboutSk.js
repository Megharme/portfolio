import './AboutSk.css';
import React from 'react'

function AboutSk() {
  return (
    <div className='skills'>
          <div className="skills__skill">
              <p>HTML</p>
              <div className="skills__bar">
                  <div className="skills__html"></div>
              </div>
          </div>
          <div className="skills__skill">
              <p>CSS</p>
              <div className="skills__bar">
                  <div className="skills__css"></div>
              </div>
          </div>
          <div className=" skills__skill">
              <p>JavaScript</p>
              <div className="skills__bar">
                  <div className="skills__javascr"></div>
              </div>
          </div>
          <div className="skills__skill">
              <p>Communication</p>
              <div className="skills__bar">
                  <div className="skills__commu"></div>
              </div>
          </div>
          <div className="skills__skill">
              <p>Problem Solving</p>
              <div className="skills__bar">
                  <div className="skills__problem"></div>
              </div>
          </div>
          <div className="skills__skill">
              <p>Team Work</p>
              <div className="skills__bar">
                  <div className="skills__team"></div>
              </div>
          </div>
    </div>
  )
}

export default AboutSk

