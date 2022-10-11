import React ,{useEffect} from 'react'
import { Footer } from '../../Landingpage/Footer'
import { Header } from '../../Landingpage/Header'
import { MobileHeader } from '../../Landingpage/Mobile/MobileHeader'
import { Pitch } from './Pitch'
import { PitchAwards } from './PitchAwards'
import { PitchRequirements } from './PitchRequirements'
import { PitchWinner } from './PitchWinner'

export const PitchLayout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
        <Header/>
        <MobileHeader/>
        <Pitch/>
        <PitchAwards/>
        <PitchRequirements/>
        <PitchWinner/>
        <Footer/>
    </div>
  )
}
