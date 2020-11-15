import React from 'react';
import './HeroSection.css';
import video from '../../assets/videos/videoplayback_1.mp4'


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted playsInline />
    </div>
  )
}

export default HeroSection;
