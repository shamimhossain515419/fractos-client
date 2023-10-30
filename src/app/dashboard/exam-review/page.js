"use client"
import CommonTitle from '@/Components/CommonTitle/CommonTitle';
import NotFoundData from '@/Components/NotFoundData/NotFoundData';
import { GlobalContext } from '@/GlobalState';
import { GetExam_reviews } from '@/services/exam-reviews';
import moment from 'moment/moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FcRefresh } from 'react-icons/fc'
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
                        <table className="table border-2 border-[#27895C] w-full ">
                            {/* head */}
                            <thead>
                                <tr className='border-2 border-[#27895C]  '>

                                    <th className='font-bold text-black p-2'>
                                        <div className='flex items-center  gap-1'>
                                            <Image width={24} height={24} src={'/calendar-icon.png'} alt='image'></Image>
                                            <span>Date</span>
                                        </div>
                                    </th>
                                    <th className='font-bold text-black  border-x p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>
                                            <Image width={24} height={24} src={'/topic-icon.png'} alt='image'></Image>
                                            <span className=' text-xl text-black font-medium'>Topic</span>
                                        </div>
                                    </th>
                                    <th className='font-bold text-black border-x p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>
                                            <Image width={24} height={24} src={'/marks-icon.png'} alt='image'></Image>
                                            <span>Marks</span>
                                        </div>
                                    </th>
                                    <th className='font-bold text-black border-x p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>
                                            {/* <Image width={24} height={24} src={'/marks-icon.png'} alt='image'></Image> */}
                                            <FcRefresh size={24}> </FcRefresh>
                                            <span>Result</span>
                                        </div>
                                    </th>

                                    <th className='font-bold text-black border-x  p-2 border-[#27895C]'>
                                        <div className='flex items-center  gap-1'>
                                            <Image width={24} height={24} src={'/review-icon.png'} alt='image'></Image>
                                            <span>Exam Review</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    examReviews?.map(item => <tr key={item?._id} className='hover:bg-[#dddddd]  text-start py-1 cursor-pointer odd:bg-slate-100 even:bg-slate-200'>
                                        <td className=' p-2'> {moment().format("MMMM Do YYYY, ")}  </td>
                                        <td className=' p-2 border-x border-[#27895C]  capitalize'> {item?.exam_name} </td>
                                        <td className='border-x border-[#27895C]'>
                                            <div className='flex  gap-4 justify-around items-center'>
                                                <span>  {(item?.right?.length / item?.wrong?.length) * 100}% </span>
                                                <span> {item?.right?.length}/{item?.wrong?.length} </span>
                                            </div>
                                        </td>

                                        <td className=' p-2 border-x border-[#27895C]'>
                                            {
                                                ((item?.right?.length / item?.wrong?.length) * 100) >= 33 ? <p className=' primary'>Pass</p> : <p className=' text-red-400' >Fail</p>
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
                </div> : <NotFoundData paragraph={"Reviews Exam Not Found "} title={'Please give exam  '} href={'/dashboard/mock-exam'}></NotFoundData>
            }



        </div>
    );
};

export default page;