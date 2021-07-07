import React from 'react';
import '../App.css';
import HeroSection from './HeroSection';
import Cards from './Cards';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
        <HeroSection />
        <Cards />
        
        
        </>
    )
}

export default Home