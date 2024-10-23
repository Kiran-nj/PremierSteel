import React from 'react'
import SteelProductsShowcase from '../components/Products'
import Hero from '../components/Hero'
import MiniAbout from './../components/MiniAbout';


function Home() {
  return (
    <div className=''>
      <Hero />
      <SteelProductsShowcase />
      <MiniAbout/>
    </div>
  
  )
}

export default Home