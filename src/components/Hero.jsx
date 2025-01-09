import React from 'react'
import { assetspfp } from '../assets/pfp/assetspfp'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div id='home'>

            <div className=' max-w-[1200px] h-auto mx-4 my-2 flex flex-col-reverse gap-4 sm:flex-row justify-center items-center text-center py-10 md:text-left lg:mx-auto'>
                <div className=' flex-col my-auto mx-auto '>
                    <p className='md:text-4xl text-xl font-bold text-gray-300 sm:py-4'> Hello, I am Karthik. I like working on</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        <TypeAnimation
                            sequence={[
                                "Data Analytics",
                                1000,
                                "Full Stack",
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>Successfully 
                            completed more than 20 Courses and 10 projects across these domains</p>
                    </div>
                    <div className="text-5xl gap-16 my-7 text-purple-600 justify-center flex sm:justify-center md:justify-start">
                        <a
                            href="https://github.com/karthik-bha?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                        >
                            <AiFillGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/karthik-bhat-pro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            href='mailto:karthik.bhat.pro@gmail.com'
                            aria-label="Email Karthik"
                        >
                            <AiFillMail />
                        </a>
                    </div>

                    <div className="relative inline-flex my-3">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] 
                        via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 
                        group-hover:duration-200 animate-tilt"></div>
                        <a href="https://drive.google.com/file/d/1DCCeUaJFuhpzPTliAk69ov9zfXNphHn2/view?usp=sharing" target='_blank' title="Download CV" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-[270px] h-auto relative px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                            Checkout my Résumé here!
                        </a>
                    </div>

                </div>
                <div className='my-auto'>
                    <img className="w-[150px] sm:w-[350px] mx-auto aspect-square rounded-full border-4 border-gray-200 
                    shadow-lg transition-transform duration-300 hover:scale-105 -mt-10" src={assetspfp.pfp} alt="profile-pic" />



                </div>
            </div>

        </div>
    )
}

export default Hero