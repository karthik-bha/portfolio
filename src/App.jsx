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
    <div className='font-sans'>
      {/* <div className="w-full overflow-hidden bg-yellow-400 sticky top-0 z-10">
        <h1 className="inline-block min-w-full whitespace-nowrap bg-yellow-400 animate-scroll-left">
          Beta Version! Website under Development
        </h1>
      </div> */}
      <NavBar />
      
      <Hero />
      <hr className='h-[1px] bg-slate-800 border-none'/>
      <About />
      <hr className='h-[1px] bg-slate-800 border-none'/>
      <Projects />
      <hr className='h-[1px] bg-slate-800 border-none'/>
      <Skills />
      <hr className='h-[1px] bg-slate-800 border-none'/>
      <Certifications />
      <hr className='h-[1px] bg-slate-800 border-none'/>
      <a href="https://github.com/karthik-bha/portfolio/tree/main " target="_blank" className='block text-center text-white font-semibold p-2 hover:text-blue-600 cursor-pointer'>Portfolio source code here</a>
  
        <Footer />
     
     
    </div>
  )
}

export default App
