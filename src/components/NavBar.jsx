import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const navRef = useRef(null); // Create a reference for the navbar to check clicks outside

    const handleNav = () => {
        setNav(!nav);
    };

    // Close the navbar if the click is outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNav(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className='shadow-lg text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l sticky top-0 z-10 bg-[#20242d] rounded-xl opacity-90'>
            <h1 className='text-3xl font-bold primary-color ml-4'>Karthik S Bhat</h1>
            <ul className='hidden md:flex'>
                <li className='p-5 hover:text-white'>
                    <a href='#home'>Home</a>
                </li>
                <li className='p-5 hover:text-white'>
                    <a href="#about">About</a>
                </li>
                <li className='p-5 hover:text-white'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='p-5 hover:text-white'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='p-5 hover:text-white'>
                    <a href="#certifications">Certifications</a>
                </li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div
                ref={navRef} // Attach the reference to the navbar container
                className={nav ? 'z-10 text-gray-500 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}
            >
                <h1 className='text-3xl font-bold primary-color m-4'>Karthik S Bhat</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2 hover:text-white'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='p-2 hover:text-white'>
                        <a href="#about">About</a>
                    </li>
                    <li className='p-2 hover:text-white'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='p-2 hover:text-white'>
                        <a href="#skills">Skills</a>
                    </li>
                    <li className='p-2 hover:text-white'>
                        <a href="#certifications">Certifications</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
