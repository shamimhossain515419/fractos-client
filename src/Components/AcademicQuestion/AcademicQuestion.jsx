// "use client"
import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

const AcademicQuestion = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('/question.json')
            .then(res => res.json())
            .then(data => {
                setSubjects(data);
            })
    }, []);


    console.log(subjects);
    return (
        <>
            <div className=''>
                <button className=' m-3  px-4  rounded-2xl border-2'>Academic</button>
                <button className=' m-3  px-4  rounded-2xl border-2'>Admission</button>
                <button className=' m-3  px-4 rounded-2xl border-2'>Model Test</button>
            </div>
            <div className='grid md:grid-cols-3 px-4 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                {
                    subjects.map(subject =>
                        <div key={subject._id}>
                            <div className='rounded-xl'>
                                {/* className="w-[50px] h-[50px]" */}
                                <Parallax
                                 bgImage="https://i.ibb.co/LQ2F8Jj/download-2.jpg"
                                 bgImageAlt="the cat" 
                                //  strength={200}
                                 className="bg-cover bg-fixed h-full rounded-xl">
                                    <div  className='p-8 rounded text-center text-white'>
                                    <h1 className='text-3xl font-bold '>{subject.subject}</h1>
                                    <h1 className='text-3xl font-bold '>{subject.paper}</h1>
                                    <h3 className='text-3xl font-bold '>ACADEMIC</h3>
                                    </div>
                                </Parallax>
                                <div className='rounded text-black p-2'>
                                    <p className='text-xl'>{subject.subject} 
                                    {subject.paper}</p>
                                    <div className='flex'>
                                        <small>{subject.exam}</small>
                                        <small>exams .</small> 
                                        <small>{subject.ongoing}</small>
                                        <small>ongoing</small>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>

        </>
    );
};

export default AcademicQuestion;