import React from 'react'
import SteelProductsShowcase from '../components/Products'
import Hero from '../components/Hero'
import MiniAbout from './../components/MiniAbout';
import StrategicPartners from '../components/Partners';


function Home() {
  return (
    <div className=''>
      <Hero />
      <SteelProductsShowcase />
      <MiniAbout/>
      <StrategicPartners />
    </div>
  
  )
}

export default Home