import React from 'react'
import vit from '../assets/vit.png'
import vitap from '../assets/vitap.png'
//
const About = () => {
  return (
    <div className=' bg-[#1a1e26] height-screen mx-auto justify-center items-center text-white flex flex-col ' id='about'>

      <div className=' text-white max-w-[1200px]  py-5 items-center justify-center '>
        <h3 className='text-3xl md:text-5xl text-white mx-auto text-center sm:text-center lg:text-left'>About<span className='primary-text text-[32px] md:text-5xl' >  Me </span></h3>
        <div className='py-3'>
          <p className="text-gray-400 text-[16px] md:text-[22px] font-normal mx-2 font lg:text-left text-2xl py-4">

            I enjoy exploring different areas within Computer Science. With a solid foundation in multiple programming languages,
            <b> Data Structures</b>, and <b> Algorithms</b>, I`ve worked on personal projects in <b>Data Analytics </b>
            &<b> Full Stack Development</b>. These projects have given me practical experience and a broader understanding of how different technologies
            work together.
          </p>
        </div>
   
     
        <div >
          <h3 className="primary-text text-3xl md:text-5xl text-center sm:text-center lg:text-left py-4">
            Edu<span className="text-3xl md:text-5xl text-white">cation</span>
          </h3>
     
          </div>
        {/* Card Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 px-5 w-full py-5 lg:justify-start">
          {/* First card - Education */}
          <div className="w-full sm:w-[20rem] md:w-[22rem] h-[22rem] bg-white shadow-xl rounded-lg text-gray-900 mb-8 lg:mb-0">
            <div className="rounded-t-lg h-32 overflow-hidden">
              <img className="object-cover object-top w-full h-full" src={vitap} alt="VIT-AP Background" />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img className="object-cover object-center w-full h-full" src={vit} alt="VIT-AP Logo" />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold">VIT-AP</h2>
            </div>
            <div className="text-center mt-2 px-4">
              <p className="font-normal text-sm text-gray-700">
                <i>B.Tech Computer Science and Engineering with specialization in Data Analytics</i>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About