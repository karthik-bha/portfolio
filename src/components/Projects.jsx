// Projects.js
import React from 'react';
import Card from './Card.jsx';
import DA2 from'../assets/projects/DAP.png'
const Projects = () => {
    const cardItems = [
        { title: 'College Management System', link: 'https://github.com/karthik-bha/CMS', description: 'A Functional College Management system that can perform various tasks like managing student records, teachers records, etc.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN2hsVG_rm1D449zxjEA-d9_HUJmH8PFWWg&s' },
        { title: 'Disease Predictor', link: 'https://github.com/karthik-bha/Disease-Predictor', description: 'A functional disease predictor website that predicts diseases based on user inputs (upto 8) with 97% accuracy using KNN. ', image: 'https://www.yourgenome.org/wp-content/uploads/2023/11/1600-shutterstock_2112088307.jpg' },
        { title: 'PassProtect', link: 'https://github.com/karthik-bha/PasswordManagerExpress', description: 'In this Project, We created a Full-Stack Password Manager that can add, edit, delete and copy passwords from local MongoDB collections. Built using MERN stack and Tailwind CSS', image: DA2 },
        { title: 'House Price Prediction', link: 'https://github.com/karthik-bha/Bharatintern_ML/blob/main/Blr_House_price_prediction.ipynb', description: 'In this Project, We predicted house prices of various types using Linear Regression with about 80% accuracy', image: 'https://miro.medium.com/v2/resize:fit:1024/1*smf9XOCYX-7NuQSkE4m84g.jpeg' }
    ];

    return (
        <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white flex flex-col' id='projects'>
            <div className=' text-white max-w-[1200px] mx-auto sm:flex flex-col'>
                <div className='py-4 text-center sm:text-center lg:text-left'>
                    <h3 className='text-4xl'>My Projects</h3>
                </div>

                <div className='text-gray-400 text-2xl font-medium text-center sm:text-center lg:text-left'>
                    <p>Projects completed are a mix of Data Analytics and Full Stack.</p>
                </div>

                <div className='flex flex-wrap max-w-[1200px] rounded-lg'>
                    <Card items={cardItems} />
                </div>
                <div className='flex  items-center justify-center'>
                    <button className="more-primary-color w-[250px] h-auto text-black rounded-lg py-4 px-6 transform ease-in-out duration-150 hover:scale-105 hover:[#3474eb] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#3474eb]">
                       <a href="https://github.com/karthik-bha?tab=repositories"> More Projects &rarr;</a>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Projects;
