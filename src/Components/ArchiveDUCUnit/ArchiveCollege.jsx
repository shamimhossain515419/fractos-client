"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD:src/Components/Archive/ArchiveCollege.jsx
// import { Parallax } from 'react-parallax';
import './Archive.css';
=======
import { Parallax } from 'react-parallax';

>>>>>>> d977da7750d1850b96aec2021a5ec9c3329619d3:src/Components/ArchiveDUCUnit/ArchiveCollege.jsx

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

            <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-14'>
                {
                    colleges.map(college =>
                        <Link href={`/dashboard/question-bank/${college._id}`} key={college._id}>
                            <div className='rounded'>
<<<<<<< HEAD:src/Components/Archive/ArchiveCollege.jsx
                                 <div className='backgroundImage h-32'>
                                    <div  className='p-8 rounded text-center'>
                                    <h1 className='text-2xl font-bold text-white'>{college.CollegeName}</h1>
=======
                              <div className='backgroundImage h-32'>
                                    <div className='p-8 rounded text-center'>
                                        <h1 className='text-2xl font-bold text-white'>{college.CollegeName}</h1>
>>>>>>> d977da7750d1850b96aec2021a5ec9c3329619d3:src/Components/ArchiveDUCUnit/ArchiveCollege.jsx
                                    </div></div>
                                {/* </Parallax> */}
                                <div className='bg-blue-50 rounded text-black font-bold p-3'>
                                    <p>{college.department}</p>
                                    <div className='flex justify-between mt-3'>
                                        <p>{college.exam}</p>
                                        <p>{college.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                }
            </div>

        </>
    );
};

export default ArchiveCollege;