import React from 'react'

const SkillCard = ({items}) => {
  return (
    <div className='mx-2 max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 rounded-lg text-black py-4'>
        {items.map((item, index)=>(
            <div key={index} className='bg-white border-4 border-pink flex flex-col text-center rounded-lg justify-center' >
                <img src={item.pic} alt={item.title}   className='h-[100px] w-[100px] rounded-full shadow-lg object-cover mx-auto '/>
                <h3 className='text-2xl py-2'>
                    {item.title}
                </h3>
            </div>

        ))
        }

    </div>
  )
}

export default SkillCard