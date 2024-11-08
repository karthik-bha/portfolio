import React from 'react'
import vit from '../assets/vit.png'
import vitap from '../assets/vitap.png'

const About = () => {
  return (
    <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white flex flex-col'id='about'>
    
      <div className=' text-white max-w-[1200px]  py-3 items-center justify-center flex flex-col'>
        <h3 className='text-5xl text-white'>About<span className='primary-text text-5xl' >  Me </span></h3>
        <div className='py-3'>
          <p className="text-gray-300 text-1xl font-medium text-center lg:text-left">

            I enjoy exploring different areas within Computer Science. With a solid foundation in multiple programming languages,
            <b> Data Structures</b>, and <b> Algorithms</b>, I`ve worked on personal projects in <b>Data Analytics </b>
            &<b> Full Stack Development</b>. These projects have given me practical experience and a broader understanding of how different technologies
            work together.
          </p>
        </div>
      </div>
      <div className='  max-w-[1200px] sm:flex flex-col text-center lg:flex items-center'>
        <h3 className='primary-text text-5xl mx-6 px-3'>Edu<span className='text-5xl text-white'>cation </span></h3>

        {/* end of text  */}
        {/* card start */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 px-5 mt-16">
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
              {/* <p className="font-normal mt-2 text-gray-900 py-2">CGPA: 8.52</p> */}
            </div>
          </div>

         
          </div>
        </div>






    </div>
  )
}

export default About