// Card.js
import React from 'react';

const Card = ({ items }) => {
    return (
        <div className='mx-2  max-w-[1200px] grid grid-cols-2 gap-10 rounded-lg text-black py-4 '>
                {items.map ((item, index)=>(
                    <div key={index} className='px-7 gap-10 h-auto py-5 text-center border-black shadow-md rounded-lg bg-white transform transition-all duration-300 ease-in-out hover:scale-105'>
                        <img src={item.image} alt={item.title} className='rounded-lg h-[200px] w-full object-cover my-2'/>
                          <h2 className='my-2'>
                            <a href={item.link} target='_blank'  rel="noopener noreferrer" className='text-center'>
                                {item.title}
                            </a>
                          </h2>
                          <p className='font-normal '>
                            {item.description}
                          </p>
                        </div>
                ))}
        </div>
      
    );
};

export default Card;
   