"use client"

import { GetSubjectByData } from '@/services/exam';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsCheckLg } from 'react-icons/bs';

const MockPreset = () => {
    const qnNames = [
        {
            "id": 1,
            "name": "DU-A"
        },
        {
            "id": 2,
            "name": "JU-A"
        },
        {
            "id": 3,
            "name": "BUET-Prili"
        },
        {
            "id": 4,
            "name": "CU-A"
        },
        {
            "id": 5,
            "name": "Agri Guccho"
        },
        {
            "id": 6,
            "name": "Medical"
        },
        {
            "id": 7,
            "name": "RU-C (Science)"
        },
        {
            "id": 8,
            "name": "JU-D"
        },
        {
            "id": 9,
            "name": "GST-A (Science)"
        }
    ];


    const subNames = [
        {
            "id": 1,
            "name": "mathematics"
        },
        {
            "id": 2,
            "name": "Chemistry"
        },
        {
            "id": 3,
            "name": "bangla"
        },
        {
            "id": 4,
            "name": "networking"
        },
        {
            "id": 5,
            "name": "Higher Math"
        },
        {
            "id": 6,
            "name": "biology"
        },
        {
            "id": 7,
            "name": "english"
        },
        {
            "id": 8,
            "name": "General Knowledge"
        }

    ];




    const [examName, setExamName] = useState("");
    const [select, setSelect] = useState(false);
    const [start, setStart] = useState(false);
    const [subject, setSubject] = useState("");

 console.log(examName);
  const [Question,setQuestion]=useState([])
   const getData = async (subject) => {

        const result = await GetSubjectByData(subject)
        setQuestion(result?.data)

    }
    useEffect(() => {
        if (subject) {
           getData(subject);
        }


    }, [subject])



    return (

        <div>

            {
                select==true ? <div>


                    <div>
                        <div className='my-5'>
                            <p className='font-bold text-2xl'>Subject</p>
                            <div className='my-10  mx-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2  gap-2'>
                                    {subNames.map(item => <button onClick={() => setSubject(item?.name)} key={item.id} className={` ${subject == item?.name ? "bg-slate-300 " : "bg-white"} col px-auto py-4  hover:bg-slate-300 border rounded-lg font-bold text-lg w-11/12 text-center  capitalize`}>{item.name}</button>)}
                                </div>

                            </div>

                        </div>


                        <div className=' bg-[#27895b41]  capitalize w-full  px-2 md:px-10  py-3  md:py-5  '>
                               
                            <h1 className=' text-2xl  font-medium my-t' > * Exam Name {Question?.exam_name ? Question?.exam_name : " "}</h1>
                            <h1 className=' text-xl  font-medium my-2'>1. Number of questions:</h1>
                            <p className=' ml-3 text-xl font-normal'> Number: {Question?.questions?.length} </p>
                            <h1 className=' text-xl  font-medium my-2'>2. Time:  </h1>
                            <p className=' ml-3 text-xl font-normal '> {Question?.questions?.length}  minutes</p>


                        </div>

                        <div  className=' pt-12'>
                            <Link href={`/online-exam/${subject}`} disabled={!subject} className=' disabled:bg-[#27895b38]  block w-full text-xl text-center  text-white font-medium  my-3 py-2 px-3 rounded primaryBg capitalize'>Start</Link>
                            <Link href={`/dashboard`} disabled={!subject} className=' bg-red-400 block w-full text-xl text-center  text-white font-medium  my-3 py-2 px-3 rounded  capitalize'>cancel</Link>
                            
                        </div>

                    </div>


                </div> : <div className=' md:px-10  overflow-hidden'>
                    <div className=' w-full   '>
                        <p className='font-bold text-2xl'>Preset</p>
                        <div className='my-10 grid justify-items-center '>
                            <div className='grid grid-cols-3 md:grid-cols-9  gap-2'>
                                {qnNames?.map(item => <button onClick={() => setExamName(item?.id)} key={item.id} className={` ${examName === item?.id ? "bg-slate-300 " : " bg-white"} col px-auto py-4  hover:bg-slate-300 border rounded-lg font-bold text-lg w-11/12 text-center`}>{item.name}</button>)}
                            </div>
                            <button className="my-4 px-8 py-4 bg-white hover:bg-slate-300 border rounded-lg font-bold text-lg">CKRUET</button>
                        </div>

                    </div>


                    <div className='font-bold text-2xl flex'>
                        <div className='border-t-2 border-black w-6/12 mt-4'></div>
                        <p className='mx-2'>OR</p>
                        <div className='border-t-2 border-black w-6/12 mt-4'></div>
                    </div>
                    <div className='my-5'>
                        <p className='font-bold text-2xl'>Subject</p>
                        <div className='my-10  mx-4'>
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-2'>
                                {subNames.map(item => <button onClick={() => setSubject(item?.name)} key={item.id} className={` ${subject == item?.name ? "bg-slate-300 " : "bg-white"} col px-auto py-4  hover:bg-slate-300 border rounded-lg font-bold capitalize text-lg w-11/12 text-center`}>{item.name}</button>)}
                            </div>

                        </div>

                    </div>


                    <div className=' '>
                        <button onClick={() => setSelect(true)} disabled={!subject} className=' disabled:bg-[#27895b38]  block w-full text-xl text-center  text-white font-medium  my-3 py-2 px-3 rounded primaryBg capitalize'>continue</button>
                       
                    </div>
                </div>

            }



        </div>
    );
};

export default MockPreset;