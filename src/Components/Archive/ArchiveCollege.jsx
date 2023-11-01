"use client"
import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

const ArchiveCollege = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('/collageDetails.json')
            .then(res => res.json())
            .then(data => {
                setColleges(data);
            })
    }, []);


    console.log(colleges);
    return (
        <>
            <div className=''>
                <button className='bg-purple-950 m-3 p-2 font-bold rounded'>Academic</button>
                <button className='bg-purple-950 m-3 p-2 font-bold rounded'>Admission</button>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-14'>
                {
                    colleges.map(college =>
                        <div key={college._id}>
                            <div className='rounded'>
                                {/* className="w-[50px] h-[50px]" */}
                                <Parallax
                                 bgImage={college.image} 
                                 bgImageAlt="the cat" 
                                 strength={200}
                                 className="bg-cover bg-fixed h-36">
                                    <div  className='p-8 rounded text-center'>
                                    <h1 className='text-2xl font-bold text-white'>{college.CollegeName}</h1>
                                    </div>
                                </Parallax>
                                <div className='bg-blue-50 rounded text-black font-bold p-3'>
                                    <p>{college.department}</p>
                                    <div className='flex justify-between mt-3'>
                                        <p>{college.exam}</p>
                                        <p>{college.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </>
    );
};

export default ArchiveCollege;