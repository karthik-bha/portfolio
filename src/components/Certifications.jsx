import React from 'react'
import CertiCard from './CertiCard';
import FS from '../assets/certificates/FS.png'
import DA from '../assets/certificates/DA.png'
import DS from '../assets/certificates/DS.png'
import CDL from '../assets/certificates/CDL.png'
import SMBAIML from '../assets/certificates/SMBAIML.png'




const Certifications = () => {
    const certiList = [
        {
            title: "IBM Full Stack Developer", link: "https://www.coursera.org/account/accomplishments/professional-cert/CMU5VWJJZU95?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
            , img: FS
        },
        { title: "IBM Data Analyst", link: "https://coursera.org/share/8077e02d4d5855153e707747f5510372", img: DA },
        { title: "IBM Data Science", link: "https://coursera.org/share/ec631601ed57c5a5655c7567b3c4a28f", img: DS },
        { title: "Google Cloud Digital Leader ", link: "https://www.credly.com/badges/a0625092-4083-46cb-9b9e-96396bccf8e9/public_url", img: CDL },
        { title: "SmartBridge AI & ML ", link: "https://drive.google.com/file/d/1qunn2YAJCD9GQdDWcudWKp1ZEDmrC4yF/view", img: SMBAIML }
    ];
    return (
        <div className='bg-[#1a1e26] height-auto mx-auto justify-center items-center text-white py-4 pb-8 ' id='certifications'>
            <div className='max-w-[1200px]  mx-auto'>
                <div className='flex py-10'>
                    <h3 className='text-4xl  text-center mx-auto sm:text-center lg:text-left font-[Outfit] '> Certifications </h3>
                </div>

                <CertiCard items={certiList} />

            </div>
        </div>
    )
}

export default Certifications