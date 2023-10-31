'use client'

import CommonTitle from '@/Components/CommonTitle/CommonTitle';
import { GetExam_by_id } from '@/services/exam-reviews';
import { useParams, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const page = () => {
     const prams = useParams();
     const router = useRouter();
     const [examData, setExamData] = useState({})

     const getData = async (id) => {
          const result = await GetExam_by_id(id);
          if (!result) {
               router.push('/dashboard/exam-review')
          }

          setExamData(result)
     }
     useEffect(() => {
          if (prams?.id) {
               getData(prams?.id);
          }


     }, [prams?.id])
     console.log(examData, "shmiamdf");

     return (
          <div>


               <CommonTitle title={"Question Reviews "} ></CommonTitle>
               <div className='  flex justify-center items-center md:gap-5 gap-2 flex-wrap '>
                    <div className=' text-xl md:text-2xl font-thin my-4  capitalize '  >Subject :  {examData?.exam_name}  </div>

                    <p className=' text-xl primary font-medium my-2'>Right Ans: {examData?.right?.length ? examData?.right?.length : 0} </p>
                    <p className=' text-red-500  text-xl font-medium my-2'>Wrong Ans: {examData?.wrong?.length ? examData?.wrong?.length : 0} </p>

               </div>

               <div className=' my-3'>

                    <CommonTitle title={"Right  Answer"} ></CommonTitle>


                    <div className=' '>
                         {
                              examData?.wrong?.map((item, index) => <div key={index} className={`  max-w-[800px] my-4 mx-auto  boxshadow p-4 rounded`}>
                                   <div>
                                        <h1 className=' text-black text-sm md:text-lg  font-medium my-1'> {index + 1}  .  {item?.question}  </h1>
                                   </div>
                                   <div className={`  textColor grid sm:grid-cols-4 md:grid-cols-2  gap-2 md:gap-4`}>
                                        <div className='  cursor-pointer bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 1.</span> {item?.answer_a} </div>
                                        <div className='  cursor-pointer bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 2.</span> {item?.answer_b}</div>
                                        <div className=' cursor-pointer  bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 3.</span> {item?.answer_c} </div>
                                        <div className='  cursor-pointer bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 4.</span> {item?.answer_d} </div>

                                   </div>
                              </div>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default page;