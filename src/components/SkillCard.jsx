import React from 'react'

const SkillCard = ({items}) => {
  return (
    <div className='mx-2 max-w-[1200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10 rounded-lg text-black py-4'>
        {items.map((item, index)=>(
            <div key={index} className='bg-[#2c3e50] flex flex-col text-center rounded-lg justify-center py-4' >
                <img src={item.pic} alt={item.title}   className='h-[100px] w-[100px] rounded-full shadow-lg object-contain mx-auto '/>
                <h3 className='text-2xl py-2 px-2 skill-text'>
                    {item.title}
                </h3>
            </div>

        ))
        }

    </div>
  )
}

export default SkillCard