'use client'

import { GetAdmission, GetAdmissionBlog } from '@/services/admission';
import { GetSubjectByData } from '@/services/exam';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import NotFoundData from '../NotFoundData/NotFoundData';

const MockPreset = () => {
    const category = "mock"
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
            "name": "chemistry"
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
            "name": "higherMath"
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
            "name": "generalknowledge"
        }

    ];




    const [examName, setExamName] = useState("");
    const [select, setSelect] = useState(false);
    const [start, setStart] = useState(false);
    const [subject, setSubject] = useState("");
    const [PresetData, setPresetData] = useState([]);
    const [itemDataPreset, setItemDataPreset] = useState(false);

    const [Question, setQuestion] = useState([])
    const getData = async (subject, category) => {

        const result = await GetSubjectByData(subject, category)
        setQuestion(result?.data)

    }
    useEffect(() => {
        if (subject) {
            getData(subject, category);
        }


    }, [subject, category])

    useEffect(() => {
        const GetData = async () => {
            const colleges = await GetAdmissionBlog("");
            setPresetData(colleges)
        }
        GetData()
    })




    const GetAllQuestion = async (subject) => {
        const result = await GetAdmission();
        const filter = result?.filter(item => item?.university == subject)
        setItemDataPreset(filter)
    }

    useEffect(() => {
        GetAllQuestion(subject)
    }, [subject]);

    console.log(itemDataPreset, "dfgdfgadfgadf");

    return (

        <div>

            {
                select == true ? <div>


                    <div>
                        <div className='my-5'>
                            <p className='font-bold text-2xl primary'>Subject</p>
                            <div className='my-10  mx-4'>
                                <div className='grid grid-cols-1 md:grid-cols-2  gap-2'>
                                    {subNames.map(item => <button onClick={() => setSubject(item?.name)} key={item.id} className={` ${subject == item?.name ? "  primaryBg" : " secondBg "} col px-auto py-4  hover:bg-[#102B3A]  border border-[#0EE6B8]  rounded-lg font-bold text-lg w-11/12 text-center  capitalize`}>{item.name}</button>)}
                                </div>

                            </div>

                        </div>


                        <div className=' bg-[#27895b41]  capitalize w-full  px-2 md:px-10  py-3  md:py-5  '>

                            <h1 className=' text-2xl  font-medium my-t primary' > * Exam Name {Question?.exam_name ? Question?.exam_name : " "}</h1>
                            <h1 className=' text-xl  font-medium my-2'>1. Number of questions:</h1>
                            <p className=' ml-3 text-xl font-normal'> Number: {Question?.questions?.length} </p>
                            <h1 className=' text-xl  font-medium my-2'>2. Time:  </h1>
                            <p className=' ml-3 text-xl font-normal '> {Question?.questions?.length}  minutes</p>


                        </div>

                        <div className=' pt-12'>
                            <Link href={`/online-exam/${subject}/${category}`} disabled={!subject} className=' disabled:bg-[#27895b38]  block w-full text-xl text-center  text-black buttonColor font-medium  my-3 py-2 px-3 rounded  capitalize'>Start</Link>
                            <Link href={`/dashboard`} disabled={!subject} className=' bg-red-400 block w-full text-xl text-center  text-white font-medium  my-3 py-2 px-3 rounded  capitalize'>cancel</Link>

                        </div>

                    </div>


                </div> : <div className=' md:px-10  overflow-hidden'>
                    <div className=' w-full   '>
                        <p className='font-bold text-2xl primary'>Preset</p>
                        <div className='my-10 grid justify-items-center '>
                            <div className='grid grid-cols-3 md:grid-cols-9  gap-2'>
                                {PresetData?.map(item => <button onClick={() => { setSubject(item?.path?.[0]), setStart(item?.path?.[0]) }} key={item._id} className={` ${subject === item?.path?.[0] ? "  primaryBg" : " secondBg "} col px-auto py-4  hover:bg-[#102B3A]  border border-[#0EE6B8] rounded-lg font-bold text-lg w-11/12 text-center`}>{item?.CollegeName}</button>)}
                            </div>

                        </div>

                    </div>


                    <div>

                        <div>
                            {
                                start ? <> {
                                    itemDataPreset?.length ? <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-5  my-8'>
                                        {
                                            itemDataPreset?.map(item => <Link href={`/online-exam/${item?.exam_name}/${item?.university}/admission`} key={item._id} className='col border border-[#8d9ddc85] cursor-pointer rounded  bg-[#8d9ddc2a] hover:bg-[#8d9ddc85]  text-sm px-2 py-4'>
                                                <div className='flex   justify-center'>
                                                    <h1 className=' text-center  text-base  md:text-2xl font-medium'> {item?.title} </h1>
                                                </div>
                                                <div className='mt-4 flex  justify-center '>
                                                    <p className='mr-8'>{item?.questions?.length} Question </p>
                                                    <p>{item?.questions?.length} Time</p>
                                                </div>
                                            </Link>)
                                        }

                                    </div> : <>  <NotFoundData href={'dashboard/mock-exam'} title={" Data Not Found"} ></NotFoundData>    </>
                                } </> : null
                            }
                        </div>





                    </div>




                    <div className='font-bold text-2xl flex'>
                        <div className='border-t-2 border-[#0EE6B8] w-6/12 mt-4'></div>
                        <p className='mx-2'>OR</p>
                        <div className='border-t-2 border-[#0EE6B8] w-6/12 mt-4'></div>
                    </div>
                    <div className='my-5'>
                        <p className='font-bold text-2xl'>Subject</p>
                        <div className='my-10  mx-4'>
                            <div className='grid grid-cols-1 md:grid-cols-2  gap-2'>
                                {subNames.map(item => <button onClick={() => setSubject(item?.name)} key={item.id} className={` ${subject == item?.name ? "  primaryBg" : " secondBg "} col px-auto py-4  hover:bg-[#102B3A]  border border-[#0EE6B8]  rounded-lg font-bold capitalize text-lg w-11/12 text-center`}>{item.name}</button>)}
                            </div>

                        </div>

                    </div>


                    <div className=' '>
                        <button onClick={() => setSelect(true)} disabled={!subject} className=' disabled:bg-[#27895b38]  block w-full text-xl text-center  text-black font-medium  my-3 py-2 px-3 rounded buttonColor capitalize'>continue</button>

                    </div>
                </div>

            }



        </div>
    );
};

export default MockPreset;