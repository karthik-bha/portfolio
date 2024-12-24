// Projects.js
import React from 'react';
import Card from './Card.jsx';
import BE from '../assets/projects/BE.png'

const Projects = () => {
    const cardItems = [
        { title: 'College Management System', link: 'https://github.com/karthik-bha/CMS', description: 'A Functional College Management system that can perform various tasks like managing student records, teachers records, etc.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN2hsVG_rm1D449zxjEA-d9_HUJmH8PFWWg&s' },
        { title: 'Disease Predictor', link: 'https://github.com/karthik-bha/Disease-Predictor', description: 'A functional disease predictor website that predicts diseases based on user inputs (upto 8) with 97% accuracy using KNN. ', image: 'https://www.yourgenome.org/wp-content/uploads/2023/11/1600-shutterstock_2112088307.jpg' },
        { title: 'BookEasy - Book and Manage Travels', link: 'https://bookeasy-frontend.onrender.com/', description: 'Developed and deployed a complete travel management website with MongoDB Atlas, Express, Node.js, and React.js, hosted on Render. Enabled users to book travel packages, download invoices, and access a streamlined booking experience.', image: BE },
        { title: 'House Price Prediction', link: 'https://github.com/karthik-bha/Bharatintern_ML/blob/main/Blr_House_price_prediction.ipynb', description: 'In this Project, We predicted house prices of various types using Linear Regression with about 80% accuracy', image: 'https://miro.medium.com/v2/resize:fit:1024/1*smf9XOCYX-7NuQSkE4m84g.jpeg' }
    ];

    return (
        <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white flex flex-col' id='projects'>
            <div className=' text-white max-w-[1200px] mx-auto sm:flex flex-col'>
                <div className='py-4 text-center'>
                    <h3 className='text-3xl md:text-4xl'>My Projects</h3>
                </div>

                <div className='text-gray-400 text-[16px] md:text-[22px] font-medium text-center'>
                    <p>Projects completed are a mix of Data Analytics and Full Stack.</p>
                </div>

                <div className='flex flex-wrap max-w-[1200px] rounded-lg'>
                    <Card items={cardItems} />
                </div>
                <div className='flex  items-center justify-center my-8'>
                    <button className="more-primary-color w-[250px] h-auto text-black rounded-lg py-4 px-6 transform ease-in-out duration-150 hover:scale-105 hover:[#3474eb] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3474eb]">
                       <a href="https://github.com/karthik-bha?tab=repositories"> More Projects &rarr;</a>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Projects;
