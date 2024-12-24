import React, { useState } from 'react';

const CertiCard = ({ items }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Open the modal and set the selected image
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="">
            {/* Certificate Cards Grid */}
            <div className="mx-2 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 max-w-[1200px] ">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center hover:text-white">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="rounded-lg h-[200px] w-full object-cover my-2 transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                            onClick={() => openModal(item.img)} // Trigger modal open on click
                        />
                        <h2 className="text-center">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-[#95a5a6] hover:text-white'>
                                {item.title}
                            </a>
                        </h2>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal} // Close modal if clicked outside
                >
                    <div className="relative bg-white p-4 rounded-lg">
                        <button
                            onClick={closeModal}
                            className="absolute top-0 right-0 text-xl p-2 bg-gray-300 rounded-full"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-[90%] max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertiCard;
