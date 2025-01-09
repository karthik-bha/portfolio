// Projects.js
import React from 'react';
import Card from './Card.jsx';
import {projectAssets} from '../assets/projects/projectAssets.js'

const Projects = () => {
    const cardItems = [
        
        {
            title: 'Get Me A Coffee',
            gitlink: 'https://github.com/karthik-bha/GetMeACoffee-FundraiserApp', 
            link: 'https://get-me-a-coffee-fundraiser-app-wndd.vercel.app/',
            description: 'GetMeACoffee-FundraiserApp is a full-stack crowdfunding platform built with Next.js, featuring secure authentication (NextAuth.js), Razorpay payment integration, and a responsive design (Tailwind CSS). Backend is powered by Node.js and MongoDB.',
            image: projectAssets.GMAC, 
            live:true,
        },
        { title: 'BookEasy', 
            gitlink: 'https://github.com/karthik-bha/BookEasy-BookAndManageTravels', 
            link: 'https://bookeasy-frontend.onrender.com/', 
            description: 'Developed and deployed a complete travel management website with MongoDB Atlas, Express, Node.js, and React.js, hosted on Render. Enabled users to book travel packages, download invoices, and access a streamlined booking experience.', 
            image: projectAssets.BE,
            live:true, 
        },
        { title: 'College Management System', 
            gitlink: 'https://github.com/karthik-bha/CMS', 
            description: 'A Functional College Management system that can perform various tasks like managing student records, teachers records, etc.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN2hsVG_rm1D449zxjEA-d9_HUJmH8PFWWg&s',
            live:false 
        },
        { title: 'Disease Predictor', 
            gitlink: 'https://github.com/karthik-bha/Disease-Predictor', 
            description: 'A functional disease predictor website that predicts diseases based on user inputs (upto 8) with 97% accuracy using KNN. ', 
            image: 'https://www.yourgenome.org/wp-content/uploads/2023/11/1600-shutterstock_2112088307.jpg',
            live:false,

         }
       

    ];

    return (
        <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white flex flex-col' id='projects'>
            <div className=' text-white max-w-[1200px] mx-auto sm:flex flex-col'>
                <div className='my-4 text-center'>
                    <h3 className='text-3xl md:text-4xl font-[Outfit] '>My Projects </h3>
                </div>

                <div className='flex flex-wrap max-w-[1200px] rounded-lg'>
                    <Card items={cardItems} />
                </div>
                <div className='flex  items-center justify-center my-8'>
                    <button className="more-primary-color w-[250px] h-auto text-black rounded-lg py-4 px-6 transform ease-in-out duration-150 hover:scale-105 hover:[#3474eb] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3474eb]">
                        <a href="https://github.com/karthik-bha?tab=repositories" target='_blank'> More Projects &rarr;</a>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Projects;
