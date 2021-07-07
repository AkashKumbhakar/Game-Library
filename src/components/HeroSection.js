import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div classname="hero-container">
            <h1 style={{ color: "darkblue"}}>LIFE IS MORE FUN IF YOU PLAY GAMES</h1>
            <video src='/videos/video-1.mp4'
            autoPlay loop muted />
        </div>
    )
}

export default HeroSection;