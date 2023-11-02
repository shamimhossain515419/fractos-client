"use client"
import Link from 'next/link';
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

            <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-14'>
                {
                    colleges.map(college =>
                        <Link href={`/dashboard/question-bank/${college._id}`} key={college._id}>
                            <div className='rounded'>
                              <div className='backgroundImage h-32'>
                                    <div className='p-8 rounded text-center'>
                                        <h1 className='text-2xl font-bold text-white'>{college.CollegeName}</h1>
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