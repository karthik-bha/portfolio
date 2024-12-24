import React from 'react'
import SkillCard from './SkillCard'
import java from '../assets/logos/java.svg'
import python from '../assets/logos/python.svg'
import Cpp from '../assets/logos/cpp.svg'
import JS from '../assets/logos/js.svg'
import R from '../assets/logos/r.svg'
import SQL from '../assets/logos/sql.svg'
import DSA from '../assets/logos/dsa.svg'
import FLASK from '../assets/logos/flask.svg'
import HTML from '../assets/logos/html.svg'
import CSS from '../assets/logos/css.svg'
import REACT from '../assets/logos/react.svg'
import EX from '../assets/logos/express.svg'
import MONGO from '../assets/logos/mongo.svg'
import DA from '../assets/logos/DA.svg'
import NODE from '../assets/logos/node.svg'
import GITHUB from '../assets/logos/github.svg'
import TW from '../assets/logos/tailwind.svg'
import GC from '../assets/logos/GC.svg'
import NP from '../assets/logos/numpy.svg'
import PD from '../assets/logos/pandas.svg'
import Next from '../assets/logos/next.svg'



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
        {title:"Next.js" , pic: Next},
        {title:"Node.js" , pic: NODE},
        {title:"Express.js" , pic: EX},
        {title:"MongoDB" , pic: MONGO},
        {title:"Data Analytics" , pic: DA},
        {title:"GitHub & Git" , pic: GITHUB},
        {title:"Tailwind CSS" , pic: TW},
        {title:"Google Cloud" , pic: GC},
        {title:"NumPy" , pic: NP},
        {title:"Pandas" , pic: PD},
        
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