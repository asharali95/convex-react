import React,{useEffect} from 'react'
import { Header } from '../Landingpage/Header'
import { Footer } from '../Landingpage/Footer'
import { ServiceSection } from './ServiceSection'
import { MobileHeader } from '../Landingpage/Mobile/MobileHeader'

export const ServiceLayout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
        <Header/>
        <MobileHeader/>
        <ServiceSection/>
        <Footer/>
    </div>
  )
}
