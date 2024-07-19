import React from 'react'
import './Hero.css'
import hand_icon from'../Assets/hand_icon.png'
import arrow_icon from'../Assets/arrow.png'
import hero_image from'../Assets/hero_image.png'
const Hero = () => {
  return (
    <div class="hero">
    <div class="hero-left">
        
        <div className="new-arrivals-section">
            <h2>NEW ARRIVALS ONLY</h2>
            <div class="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    </div>
    <div className="hero-right">
        <img src={hero_image} alt="" />
    </div>
</div>


    
  )
}

export default Hero