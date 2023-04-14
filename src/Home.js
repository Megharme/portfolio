import React from 'react';
import './Home.css';
import pic from './assets/profile_img.png'

function Home() {
  return (
    <div className='home'>
          <div className="home__box1">
            <p className='home__salut'>Hey there!</p>
            <strong className='home__name'>I am Megha</strong>
          <div className="home__prof">
          Front end developer
          & Application Support Engineeer
        </div>
          <button onClick={''}>Get in touch</button>
          </div>
          
          <div className='home__box2'>
            <img className="home__pic" src={pic} />
          </div>
          
    
    </div>
  )
}

export default Home
