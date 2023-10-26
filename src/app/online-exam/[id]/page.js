"use client"

import Container from '@/Components/Container/Container';
import CountdownTimer from '@/Components/CountdownTimer/CountdownTimer';
import Notification from '@/Components/Notification/Notification';
import ExamModel from '@/Components/Shared/ExamModel';
import { GlobalContext } from '@/GlobalState';
import { GetSubjectByData } from '@/services/exam';
import { UpdateUser } from '@/services/users';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect, useContext } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsArchive } from 'react-icons/bs';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { PiExamBold } from 'react-icons/pi';
import { toast } from 'react-toastify';

const page = () => {


     const { user } = useContext(GlobalContext);
     const router = useRouter();
     const prams = useParams();
     const [Question, setQuestion] = useState([])
     const getData = async (subject) => {

          const result = await GetSubjectByData(subject);
          if (!result?.data) {
               router.push('/dashboard/mock-exam')
          }
          setQuestion(result?.data)

     }
     useEffect(() => {
          if (prams?.id) {
               getData(prams?.id);
          }


     }, [prams?.id])

     const [select, setSelect] = useState("")
     const [selectId, setSelectId] = useState([])
     const [RightAns, setRightAns] = useState([])
     const [success, setSuccess] = useState(false)

     const isActive = (id) => {
          return selectId.includes(id) ? 'cursor-none bg-[#27895b80]' : '';
     }
     const examSubmit = async () => {
          const data = { rank: RightAns?.length * 50, mark: RightAns?.length * 5, exam: 1, email: user?.email }
          const result = await UpdateUser(data);
          if (result.success == true) {
               setSuccess(true);
               toast.success(" Exam successfully ")
          }


     }
     useEffect(() => {

          console.log(select);
          if (select) {
               const data = Question?.questions?.find(ans => ans?.answer_right === select);
               if (data) {
                    setRightAns([...RightAns, data]);
               }

          }



     }, [select]);
     const time = Question?.questions?.length * 60;






     return (
          <div>


               <div>
                    <div className='   bg-[#ECF0F3] flex justify-center py-3  shadow-md items-center gap-5 fixed top-0 w-full z-50   '>

                         <Link
                              href="/dashboard"
                              className={` flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                         >
                              <AiOutlineHome size={24}></AiOutlineHome>
                              <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
                         </Link>

                         <Link
                              href="/dashboard/mock-exam"
                              className={` flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                         >
                              <PiExamBold size={24}></PiExamBold>
                              <h1 className=' text-base md:text-lg f font-normal '> Mock exam </h1>
                         </Link>

                         <Link
                              href="/dashboard/archive"
                              className={`flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                         >
                              <BsArchive size={24}></BsArchive>
                              <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                         </Link>


                         <Link
                              href="/dashboard/Leaderboard"
                              className={` flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                         >
                              <MdOutlineLeaderboard size={24}></MdOutlineLeaderboard>
                              <h1 className=' text-base md:text-lg f font-normal '> Leaderboard </h1>
                         </Link>
                         <Link
                              href="/dashboard"
                              className={` flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                         >
                              <BiUserCircle size={24}></BiUserCircle>
                              <h1 className=' text-base md:text-lg f font-normal '> Profile </h1>
                         </Link>


                    </div>
               </div>

               <Container>


                    <div>
                         {
                              success ? <div className=' pt-16 flex justify-center items-center mx-auto w-full md:w-[800px]     md:h-screen'>
                                   <div className=' w-full'>
                                        <div className='  bg-[#27895bd5] text-2xl font-medium text-white  py-5 px-2 text-center  '>  Successfully  Exam    </div>


                                        <div>

                                             <div className=' text-left mt-5  flex justify-center  items-center flex-col gap-5'>
                                                  <h1 className=' text-xl font-medium md:text-3xl  primary'> Right answer :{RightAns?.length} </h1>
                                                  <h1 className=' text-xl font-medium md:text-3xl  text-red-500'> Wrong  answer :{RightAns?.length - Question?.questions?.length} </h1>
                                             </div>
                                        </div>

                                        <div className='  my-7 flex   justify-center items-center gap-1'>
                                             <Link className=' text-white text-xl font-normal md:text-2xl  primaryBg py-2 px-4 ' href={'/dashboard'}> Go to Home page </Link>
                                        </div>
                                   </div>
                              </div> : <div>


                                   <div className=' mt-10'>
                                        <ExamModel exam={Question?.exam_name} time={Question?.questions?.length} mark={Question?.questions?.length}></ExamModel>


                                        <div>
                                             <h1 className='   text-xl font-bold md:text-2xl text-center text-red-500'>  {
                                                  time ? <CountdownTimer time={time}></CountdownTimer> : null
                                             }   </h1>
                                        </div>


                                   </div>

                                   <div className=' '>
                                        {
                                             Question?.questions?.map((item, index) => <div key={index} className={` ${isActive(index)} max-w-[800px] my-4 mx-auto  boxshadow p-4 rounded`}>



                                                  <div>
                                                       <h1 className=' text-black text-sm md:text-lg  font-medium my-1'> {index + 1}  .  {item?.question}  </h1>
                                                  </div>
                                                  <div className={`   textColor grid sm:grid-cols-4 md:grid-cols-2  gap-2 md:gap-4`}>
                                                       <div onClick={() => { setSelect(item?.answer_a), setSelectId([...selectId, index]) }} className='  cursor-pointer bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 1.</span> {item?.answer_a} </div>
                                                       <div onClick={() => { setSelect(item?.answer_b), setSelectId([...selectId, index]) }} className='  cursor-pointer bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 2.</span> {item?.answer_b}</div>
                                                       <div onClick={() => { setSelect(item?.answer_c), setSelectId([...selectId, index]) }} className=' cursor-pointer  bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 3.</span> {item?.answer_c} </div>
                                                       <div onClick={() => { setSelect(item?.answer_d), setSelectId([...selectId, index]) }} className='  cursor-pointer bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2'>   <span className='text-lg font-bold'> 4.</span> {item?.answer_d} </div>

                                                  </div>
                                             </div>)
                                        }
                                   </div>





                                   <div className='  flex justify-center items-center gap-5'>
                                        <button onClick={examSubmit} className=' disabled:bg-[#27895b63]   text-xl text-center  text-white font-medium  my-3 py-2 px-3 rounded primaryBg capitalize'>Submit</button>
                                        <button className='text-xl   text-center  text-white font-medium  my-3 py-2 px-3 rounded  capitalize bg-red-400'>cancel</button>
                                   </div>
                              </div>

                         }
                    </div>



               </Container>

               <Notification></Notification>

          </div>
     );
};

export default page;