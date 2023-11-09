'use client'
import { GetSubjectByData } from '@/services/exam';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import banner from '../../../../../public/banner1image.jpg'
import Link from 'next/link';
const page = () => {

     const prams = useParams();
     const category = "HSC"

     const [examData, setExamData] = useState({})
     const getData = async (id) => {
          const result = await GetSubjectByData(id, category);


          setExamData(result)
     }
     useEffect(() => {
         
          if (prams?.subject) {
               
               getData(prams?.subject);
          }


     }, [prams?.subject]);
 
     const QuestionData = examData?.data
   
     return (
          <div>
               <div className=' backgrounDSubject  flex justify-center items-center flex-col gap-2 h-[500px]'>

                    <h1 className=' text-3xl  capitalize  my-3 font-bold'> {QuestionData?.exam_name} </h1>
                    <h1 className=' text-3xl  capitalize  my-3 font-bold'> {QuestionData?.title} </h1>

               </div>


               <div className=' my-5'>
                    <div className=' bg-[#27895b41]  capitalize w-full  px-2 md:px-10  py-3  md:py-5  '>

                         <h1 className=' text-2xl  font-medium my-t' > * Exam Name {QuestionData?.exam_name ? QuestionData?.exam_name : " "}</h1>
                         <h1 className=' text-xl  font-medium my-2'>1. Number of Questions:</h1>
                         <p className=' ml-3 text-xl font-normal'> Number: {QuestionData?.questions?.length} </p>
                         <h1 className=' text-xl  font-medium my-2'>2. Time:  </h1>
                         <p className=' ml-3 text-xl font-normal '> {QuestionData?.questions?.length}  minutes</p>


                    </div>
               </div>

               <div>
                    <div className=' pt-12'>
                         <Link href={`/online-exam/${prams?.subject}/${category}`} className=' disabled:bg-[#27895b38]  block w-full text-xl text-center  text-white font-medium  my-3 py-2 px-3 rounded primaryBg capitalize'>Start</Link>
                         <Link href={`/dashboard`}  className=' bg-red-400 block w-full text-xl text-center  text-white font-medium  my-3 py-2 px-3 rounded  capitalize'>cancel</Link>

                    </div>
               </div>
          </div>
     );
};

export default page;