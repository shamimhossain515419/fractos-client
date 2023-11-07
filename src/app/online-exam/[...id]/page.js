'use client'

import Container from '@/Components/Container/Container';
import CountdownTimer from '@/Components/CountdownTimer/CountdownTimer';
import Modal from '@/Components/Modal';
import Notification from '@/Components/Notification/Notification';
import ExamModel from '@/Components/Shared/ExamModel';
import { GlobalContext } from '@/GlobalState';
import { GetAdmissionYear } from '@/services/admission';
import { GetSubjectByData } from '@/services/exam';
import { PostExamReviews } from '@/services/exam-reviews';
import { UpdateUser } from '@/services/users';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState, useEffect, useContext } from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsArchive } from 'react-icons/bs';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { PiExamBold } from 'react-icons/pi';
import { toast } from 'react-toastify';

const page = () => {
     const { user, openModal, setOpenModal } = useContext(GlobalContext);
     const prams = useParams();
     console.log(prams);
     const name = prams?.id?.[0];
     const category = prams?.id?.[1];
     const admission = prams?.id?.[2];



     const [Question, setQuestion] = useState([]);
      const [selectQuestion, setSelectQuestion] = useState(null);
     const [wrong, setWrong] = useState([]);
     const [countExamTime, setCountExamTime] = useState("00")
     const [selectId, setSelectId] = useState([])
     const [select, setSelect] = useState(null)
     const [RightAns, setRightAns] = useState([])
     const [selectOption, setSelectOption] = useState([])
     const [success, setSuccess] = useState(false)
     const currentDate = new Date();
     const time = Question?.questions?.length * 60;
     const getData = async (subject, category, admission) => {

          if (admission === "admission") {

               const result = await GetAdmissionYear(subject, category);
               setQuestion(result)


          } else {

               const result = await GetSubjectByData(subject, category);
               setQuestion(result?.data)
               console.log(result);
          }




     }
     useEffect(() => {
          if (name, category) {
               getData(name, category, admission);
          }


     }, [name, category, admission])


     const isActive = (id) => {
          return selectId.includes(id) ? 'cursor-none bg-[#0ee6b753]  ' : ' secondBg cursor-pointer ';
     }
     const optionActive = (id) => {
          return selectOption.includes(id) ? '   primary ' : ' ';
     }


     const examSubmit = async () => {
          const exam_data = { email: user?.email, time: countExamTime, date: currentDate, exam_name: Question?.exam_name, wrong, number: RightAns?.length, right: RightAns }
          const Userdata = { rank: RightAns?.length * 50, mark: RightAns?.length * 5, exam: 1, email: user?.email }
          const result = await UpdateUser(Userdata);
          const exam_reviews = await PostExamReviews(exam_data);
          if (result?.success == true && exam_reviews?.success == true) {
               setSuccess(true);
               toast.success(" Exam successfully ")
          }
     }




     useEffect(() => {

          const data = Question?.questions?.find(ans => ans?.answer_right === select);
          console.log(data, "shamimdf");
          if (data) {
               setRightAns([...RightAns, data]);
          }
          else {
               console.log(select, "selclte");
               console.log(selectQuestion, 'selectQuestion');
               const wrongData = Question?.questions?.find(ans => ans?.question === selectQuestion);
               if (wrongData) {
                    setWrong([...wrong, wrongData])
               }

          }
     }, [select && selectQuestion])



     return (
          <div>


               <div>
                    <div className='   primaryBg  flex justify-center py-3  shadow-md items-center gap-5 fixed top-0 w-full z-50   '>

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
                         <div>


                              <div className=' mt-10'>
                                   <ExamModel exam={Question?.exam_name} time={Question?.questions?.length} mark={Question?.questions?.length}></ExamModel>


                                   <div>
                                        <h1 className='   text-xl font-bold md:text-2xl text-center text-red-600'>  {
                                             time ? <CountdownTimer setCountExamTime={setCountExamTime} time={time}></CountdownTimer> : null
                                        }   </h1>
                                   </div>


                                   <h1 className=' text-center my-6 primary text-base md:text-3xl font-bold'>  Any option can be selected, after selection it cannot be changed </h1>


                              </div>

                              <div className=' '>
                                   {
                                        Question?.questions?.map((item, index) => <div key={index} className={` ${isActive(index)} max-w-[800px]   text-white   my-4 mx-auto  boxshadow p-4 rounded`}>



                                             <div>
                                                  <h1 className=' text-sm md:text-lg  font-medium my-1'> {index + 1}  .  {item?.question}  </h1>
                                             </div>
                                             <div className={`grid sm:grid-cols-4 md:grid-cols-2  gap-2 md:gap-4`}>
                                                  <div onClick={() => { setSelect(item?.answer_a), setSelectQuestion(item?.question), setSelectId([...selectId, index]), setSelectOption([...selectOption, item?.answer_a]) }} className={` ${optionActive(item?.answer_a)} bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2`}  >   <span className='text-lg font-bold'> 1.</span> {item?.answer_a} </div>
                                                  <div onClick={() => { setSelect(item?.answer_b), setSelectQuestion(item?.question), setSelectId([...selectId, index]), setSelectOption([...selectOption, item?.answer_b]) }} className={` ${optionActive(item?.answer_b)} bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2`}>   <span className='text-lg font-bold'> 2.</span> {item?.answer_b}</div>
                                                  <div onClick={() => { setSelect(item?.answer_c), setSelectQuestion(item?.question), setSelectId([...selectId, index]), setSelectOption([...selectOption, item?.answer_c]) }} className={` ${optionActive(item?.answer_c)} bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2`}>   <span className='text-lg font-bold'> 3.</span> {item?.answer_c} </div>
                                                  <div onClick={() => { setSelect(item?.answer_d), setSelectQuestion(item?.question), setSelectId([...selectId, index]), setSelectOption([...selectOption, item?.answer_b]) }} className={` ${optionActive(item?.answer_d)} bg-[#00000043]  px-4 py-[4px] rounded-2xl flex  gap-2`}>   <span className='text-lg font-bold'> 4.</span> {item?.answer_d} </div>

                                             </div>
                                        </div>)
                                   }
                              </div>





                              <div className='  flex justify-center items-center gap-5'>
                                   <button onClick={examSubmit} className=' disabled:bg-[#27895b63]   text-xl text-center  text-black font-medium  my-3 py-2 px-3 rounded buttonColor capitalize'>Submit</button>
                                   <Link href={'/dashboard/mock-exam'} className='text-xl   text-center  text-white font-medium  my-3 py-2 px-3 rounded  capitalize bg-red-600'>cancel</Link>
                              </div>
                         </div>


                    </div>



               </Container>

               <Notification></Notification>


               {
                    success ? <> <Modal setSuccess={setSuccess} name={name} Question={Question} RightAns={RightAns}></Modal>
                    </> : <></>
               }

          </div>
     );
};

export default page;