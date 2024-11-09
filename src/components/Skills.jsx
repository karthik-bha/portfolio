import React from 'react'
import SkillCard from './SkillCard'
import java from '../assets/logos/java.png'
import python from '../assets/logos/python.png'
import Cpp from '../assets/logos/Cpp.png'
import JS from '../assets/logos/js.png'
import R from '../assets/logos/R.jpg'
import SQL from '../assets/logos/SQL.png'
import DSA from '../assets/logos/DSA.png'
import FLASK from '../assets/logos/FLASK.png'
import HTML from '../assets/logos/HTML.png'
import CSS from '../assets/logos/CSS.png'
import REACT from '../assets/logos/REACT.png'
import EX from '../assets/logos/EX.png'
import MONGO from '../assets/logos/MONGO.png'
import DA from '../assets/logos/DA.jpg'
import NODE from '../assets/logos/NODE.png'


const Skills = () => {
    const skillSet=[
        {title:"Java" , pic: java},
        {title:"Python" , pic: python},
        {title:"C++" , pic: Cpp},
        {title:"JavaScript" , pic: JS},
        {title:"R" , pic: R},
        {title:"SQL" , pic:SQL},
        {title:"DSA" , pic: DSA},
        {title:"Flask" , pic: FLASK},
        {title:"HTML" , pic: HTML},
        {title:"CSS" , pic: CSS},
        {title:"React.js" , pic: REACT},
        {title:"Node.js" , pic: NODE},
        {title:"Express.js" , pic: EX},
        {title:"MongoDB" , pic: MONGO},
        {title:"Data Analytics" , pic: DA},
       

    ]
  return (
    <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white ' id='skills'>
    <div className='max-w-[1200px]  mx-auto'>
        <div className='flex py-10'>
            <h3 className=' text-4xl text-center mx-auto sm:text-center lg:text-left py-4 '>Skills</h3>
        </div>
        <div className=' flex flex-wrap mx-auto justify-center '>
            <SkillCard items={skillSet}/>
        </div>

    </div>
    </div>
  )
}

export default Skills