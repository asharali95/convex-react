import React from 'react'
import { Footer } from '../Landingpage/Footer';
import { Header } from '../Landingpage/Header';
import "../Landingpage/landingpage.css";
import { Aboutdescription } from './Aboutdescription';
import { AboutHero } from './AboutHero';

export const AboutLayout = () => {
  return (
    <div>
        <Header/>
        <AboutHero/>
        <Aboutdescription/>
        <Footer/>
    </div>
  )
}
