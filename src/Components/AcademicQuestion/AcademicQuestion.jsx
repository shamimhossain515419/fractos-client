"use client"
import { GetQuestion } from '@/services/exam';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

const AcademicQuestion = () => {
    const [subjects, setSubjects] = useState([]);

   

    const GetAllQuestion = async () => {
        const result = await GetQuestion();
        const filter = result?.filter(item=> item?.category =="HSC")
        setSubjects(filter)
    }

    useEffect(() => {
        GetAllQuestion()
    }, [2000]);


    console.log(subjects);
    return (
        <>

            <div className='grid md:grid-cols-3 px-4 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                {
                    subjects.map(subject =>
                        <Link href={`/dashboard/archive/${subject?.exam_name}`} key={subject._id} className=' shadow-md   rounded '>

                            <div className=''>
                               
                                <Parallax
                                    bgImage="https://i.ibb.co/LQ2F8Jj/download-2.jpg"
                                    bgImageAlt="the cat"
                                 
                                    className="bg-cover bg-fixed h-full rounded-xl">
                                    <div className='p-4 rounded space-y-3 text-center text-white'>
                                        <h1 className='text-3xl font-bold  capitalize'>{subject?.title}</h1>
                                        <h1 className='text-3xl font-bold  capitalize'>{2023}</h1>
                                         <h3 className='text-3xl font-bold '>ACADEMIC</h3>
                                    </div>
                                </Parallax>
                                <div className='rounded text-black p-2'>
                                    <p className='text-xl capitalize'>{subject.exam_name}
                                         </p>
                                    <div className='flex '>
                                        <small > {subject?.questions?.length} </small>
                                        <small>exams .</small>
                                        <small> {subject?.questions?.length}  </small>
                                        <small>ongoing</small>
                                    </div>
                                </div>
                            </div>
                    
                    
                        </Link>)
                }
            </div>

        </>
    );
};

export default AcademicQuestion;