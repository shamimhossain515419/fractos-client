"use client"

import { GetCourses } from '@/services/courses';
import Image from 'next/image';
import React, {  useEffect, useState } from 'react';

const HscBatch = async () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function GetData() {
            const data = await GetCourses();
            setData(data)
        }

        GetData()
    }, [2000])

    return (
        <div className='pb-8 pt-4'>
            <div className=''>
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {
                        data?.map(course => <div className='col ' key={course._id}>
                            <div className="md:flex flex-row-reverse border primaryBg  mx-4 my-6 rounded-lg">
                                <div className='md:w-1/2  p-4 '>
                                    <Image className='w-full h-[250px] object-fill md:mt-4 rounded-lg' width={100} height={250} src={course.image} alt="download" border="0" 
                                    ></Image>
                                </div>
                                <div className='md:w-1/2  p-4 font-bold '>
                                    <h1 className='font-bold text-2xl  primary '>{course.subject_name}  {course?.subject}</h1>
                                    <h2 className='mt-4 text-xl secondColor'>{course.user?.name} </h2>
                                    <p className='mt-2 text-lg '> Time: {course?.time} </p>
                                    <p className='mt-2 text-lg'> Student:  {course.limit} </p>

                                    <p className='text-red-500 text-lg mt-2'>Price: ${course.price}/=</p>
                                    <div className='flex my-4 gap-4 items-center'>
                                        <button className='font-bold  border border-[#3eeac5]  p-2 bg-transparent hover:bg-[#6bebcf]  text-white hover:text-black  my-4'>View Details</button>
                                        <button className='font-bold  border border-[#3eeac5] p-2 bg-[#6bebcf] hover:bg-transparent  text-black hover:text-white  my-4'>Enroll Now</button>
                                    </div>
                                </div>

                            </div>


                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default HscBatch;