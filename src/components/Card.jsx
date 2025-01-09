// Card.js
import React from 'react';
import github from '../assets/logos/github.svg'
const Card = ({ items }) => {
    return (
        <div className='mx-2  max-w-[1200px] grid grid-cols-1 gap-10 rounded-lg  p-4 md:p-12 md:grid-cols-2 lg:grid-cols-2 '>
                {items.map ((item, index)=>(
                    <div key={index} className='flex flex-col p-6 text-center border-black shadow-md rounded-lg bg-[#2b353f] transform transition-all duration-300 ease-in-out hover:scale-105'>
                        <img src={item.image} alt={item.title} className='rounded-lg h-[200px] w-full object-cover my-2'/>
                          <h2 className='my-2 flex gap-2  mx-auto items-center text-white font-semibold'>
                            
                                {item.title}
                            {item.link &&<><div className='h-4 w-[1px] bg-black'></div><a href={item.link} target="_blank" className='text-green-500 hover:text-green-400 font-semibold'>Live Link</a></> }
                          </h2>
                          <p className='font-normal text-gray-400 text-left'>
                            {item.description}
                          </p>
                        
                          <div className='flex justify-center mt-auto'>
                           <a href={item.gitlink} target='_blank'> <img className="hover:scale-105 hover:cursor-pointer"src={github} width={44}/></a>
                            </div>
                       
                        </div>
                        
                ))}
        </div>
      
    );
};

export default Card;
   