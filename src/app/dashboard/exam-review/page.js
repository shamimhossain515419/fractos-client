'use client'
import CommonTitle from '@/Components/CommonTitle/CommonTitle';
import NotFoundData from '@/Components/NotFoundData/NotFoundData';
import { GlobalContext } from '@/GlobalState';
import { GetExam_reviews } from '@/services/exam-reviews';
import moment from 'moment/moment';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillFileMarkdown, AiOutlineCompress } from 'react-icons/ai';
import { BiRevision } from 'react-icons/bi';
import { MdOutlineDateRange, MdTopic } from 'react-icons/md';

const page = async () => {
    const { user } = useContext(GlobalContext)
    const [examReviews, setExamReviews] = useState([])

    const GetExamData = async (email) => {
        const data = await GetExam_reviews(email);
        console.log(data);
        setExamReviews(data)
    }


    useEffect(() => {
        if (user) {
           GetExamData(user?.email)
        }

    }, [user])




    return (
        <div>

            <CommonTitle title={"Review Your Exams "}></CommonTitle>


            {
                examReviews?.length > 0 ? <div>
                    <div className="overflow-x-auto mt-[80px]">
                        <table className="table overflow-x-auto  border-2 border-[#27895C] w-full ">
                            {/* head */}
                            <thead>
                                <tr className='border-2 border-[#27895C]  '>

                                    <th className='font-bold   primary primaryBg p-2'>
                                        <div className='flex items-center  gap-1'>
                                            <MdOutlineDateRange size={28}></MdOutlineDateRange>
                                            <span className='  text-lg   primary primaryBg font-medium'>Date</span>
                                        </div>
                                    </th>
                                    <th className='font-bold   primary primaryBg  border-x p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>
                                            <MdTopic size={28}></MdTopic>
                                            <span className='  text-lg   primary primaryBg font-medium'>Topic</span>
                                        </div>
                                    </th>
                                    <th className='font-bold   primary primaryBg border-x p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>
                                            <AiFillFileMarkdown size={28}></AiFillFileMarkdown>

                                            <span className='  text-lg   primary primaryBg font-medium'>Marks</span>
                                        </div>
                                    </th>
                                    <th className='font-bold   primary primaryBg border-x p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>

                                            <AiOutlineCompress className=' primary' size={28}> </AiOutlineCompress>
                                            <span className='  text-lg   primary primaryBg font-medium'> Result</span>
                                        </div>
                                    </th>

                                    <th className='font-bold   primary primaryBg border-x  p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>
                                            <BiRevision size={28}></BiRevision>

                                            <span className='  text-lg   primary primaryBg font-medium'>Exam Review</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    examReviews?.map(item => <tr key={item?._id} className='hover:bg-[#0ee6b769]    hover:text-black text-start py-1 cursor-pointer  secondBg even:bg-[#102B3A]'>
                                        <td className=' p-2'> {moment(item?.date).format("MMMM Do YYYY, ")}  </td>
                                        <td className=' p-2 border-x border-[#27895C]  capitalize'> {item?.exam_name} </td>
                                        <td className='border-x border-[#27895C]'>
                                            <div className='flex  gap-4 justify-around items-center'>
                                                <span>  {((item?.right?.length / (item?.wrong?.length + item?.right?.length)) * 100).toFixed(2)}% </span>
                                                <span> {item?.right?.length}/{(item?.wrong?.length + item?.right?.length)} </span>
                                            </div>
                                        </td>

                                        <td className='  p-2 border-x  border-[#27895C]'>
                                            {
                                                ((item?.right?.length / item?.wrong?.length) * 100) >= 33 ? <p className=' hover:text-black primary '>Pass</p> : <p className=' text-red-400 ' >Fail</p>
                                            }
                                        </td>
                                        <td className=' p-2 border-x border-[#27895C]'>
                                            <Link href={`/dashboard/exam-review/${item?._id}`}> Click Review </Link>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                    :
                    <NotFoundData paragraph={"Reviews Exam Not Found "} title={'Please give exam  '} href={'/dashboard/mock-exam'}></NotFoundData>
            }



        </div>
    );
};

export default page;