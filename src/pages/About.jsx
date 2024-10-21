import React from 'react'
import AboutHero from '../components/AboutHero'
import MiniAbout from '../components/MiniAbout'
import FounderSection from '../components/GenerationList'

const About = () => {
  return (
    <div>
      <AboutHero/> {/* this has the video */}
      <MiniAbout/>
      <FounderSection/>
    </div>
  )
}

export default About
