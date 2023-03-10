import React from 'react';
import './home.css';
import video from '../../Assets/video.mp4';

const Home = () => {
  return (
    <sextion className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallText'>Our Packages</span>
          <h1 className='homeTitle'>Search your Holiday</h1>
        </div>

        <div className='cardDiv grid'>
          <label htmlFor='city'> Search your destination:</label>
          <div className input flex>
            <input type='text' placeholder='Enter name here....' />
          </div>
        </div>
      </div>

    </sextion>
  )
}

export default Home;