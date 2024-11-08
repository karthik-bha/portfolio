// Projects.js
import React from 'react';
import Card from './Card.jsx';

const Projects = () => {
    const cardItems = [
        { title: 'College Management System', link: 'https://github.com/karthik-bha/CMS', description: 'A Functional College Management system that can perform various tasks like managing student records, teachers records, etc.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN2hsVG_rm1D449zxjEA-d9_HUJmH8PFWWg&s' },
        { title: 'Disease Predictor', link: 'https://github.com/karthik-bha/Disease-Predictor', description: 'A functional disease predictor website that predicts diseases based on user inputs (upto 8) with 97% accuracy using KNN. ', image: 'https://www.yourgenome.org/wp-content/uploads/2023/11/1600-shutterstock_2112088307.jpg' },
        { title: 'Under const', link: 'https://reactjs.org/docs/components-and-props.html#extracting-components', description: '', image: 'https://via.placeholder.com/150' },
        { title: 'Under const', link: 'https://reactjs.org/docs/getting-started.html', description: '', image: 'https://via.placeholder.com/150' }
    ];

    return (
        <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white flex flex-col' id='projects'>
        <div className=' text-white max-w-[1200px] mx-auto sm:flex flex-col'>
            <div className='py-4 text-center sm:text-center lg:text-left'>
                <h3 className='text-4xl'>My Projects</h3>
            </div>

            <div className='text-white text-center sm:text-center lg:text-left'>
                <p>Projects completed are a mix of Data Analytics and Full Stack</p>
            </div>

            <div className='flex flex-wrap max-w-[1200px] rounded-lg'>
                <Card items={cardItems} />
            </div>
            <div className='flex  items-center justify-center'>
                <button className=' bg-white w-[250px] h-auto text-black border-black border-4 rounded-lg'> Click Here to see more Projects</button>
            </div>
        </div>
        </div>
    );
};

export default Projects;
