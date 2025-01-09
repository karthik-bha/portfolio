import React from 'react'
import SkillCard from './SkillCard'
import { assetsLogo } from '../assets/logos/assetsLogo.js'



const Skills = () => {
    const skillSet=[
        {title:"Java" , pic: assetsLogo.java},
        {title:"Python" , pic: assetsLogo.python},
        {title:"C++" , pic: assetsLogo.Cpp},
        {title:"JavaScript" , pic: assetsLogo.JS},
        {title:"R" , pic: assetsLogo.R},
        {title:"SQL" , pic:assetsLogo.SQL},
        {title:"DSA" , pic: assetsLogo.DSA},
        {title:"Flask" , pic: assetsLogo.FLASK},
        {title:"HTML" , pic: assetsLogo.HTML},
        {title:"CSS" , pic: assetsLogo.CSS},
        {title:"React.js" , pic: assetsLogo.REACT},
        {title:"Next.js" , pic: assetsLogo.Next},
        {title:"Node.js" , pic: assetsLogo.NODE},
        {title:"Express.js" , pic: assetsLogo.EX},
        {title:"MongoDB" , pic: assetsLogo.MONGO},
        {title:"Data Analytics" , pic: assetsLogo.DA},
        {title:"GitHub & Git" , pic: assetsLogo.GITHUB},
        {title:"Tailwind CSS" , pic: assetsLogo.TW},
        {title:"Google Cloud" , pic: assetsLogo.GC},
        {title:"NumPy" , pic: assetsLogo.NP},
        {title:"Pandas" , pic: assetsLogo.PD},
        
    ]
  return (
    <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white ' id='skills'>
    <div className='max-w-[1200px]  mx-auto'>
        <div className='flex py-10'>
            <h3 className=' text-4xl text-center mx-auto sm:text-center lg:text-left py-4 font-[Outfit] '>Skills</h3>
        </div>
  
            <SkillCard items={skillSet}/>
       

    </div>
    </div>
  )
}

export default Skills