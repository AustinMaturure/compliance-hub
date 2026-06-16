import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './sections/navbar'
import { Hero } from './sections/hero'
import { MoreSection } from './sections/more'
import { ComplianceSection } from './sections/compliance'

function App() {


  return (
    <>
      <section >
       <Navbar />
       <Hero />
    <MoreSection />
    <ComplianceSection /> 
      </section>

    
    </>
  )
}

export default App
