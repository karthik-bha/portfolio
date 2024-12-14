import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Footer from './components/Footer.jsx'


function App() {


  return (
    <>
      <div className="w-full overflow-hidden bg-yellow-400 sticky top-0 z-10">
        <h1 className="inline-block min-w-full whitespace-nowrap bg-yellow-400 animate-scroll-left">
          Beta Version! Website under Development
        </h1>
      </div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <p className='text-center text-white font-semibold p-4 hover:text-blue-600 cursor-pointer'><a href="https://github.com/karthik-bha/portfolio/tree/main " target="_blank">Portfolio source code here</a> (Leave a star if you like it!)</p>
      <div className='sticky bottom-0 z-10 w-full '>
        <Footer />
      </div>
     
    </>
  )
}

export default App
