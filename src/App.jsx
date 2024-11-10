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
      <div className="w-full overflow-hidden bg-yellow-400 sticky top-0 z-10">
        <h1 className="inline-block min-w-full whitespace-nowrap bg-yellow-400 animate-scroll-left">
          Beta Version! Website under Development
        </h1>
      </div>
      <NavBar className="sticky top-0 w-full"/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
    </>
  )
}

export default App
