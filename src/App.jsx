import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'

function App() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Certifications/>
    </>
  )
}

export default App
