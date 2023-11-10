'use client'
import ComponentLevelLoader from '@/Components/DashboardNavbar/commonLoader/Commonloader';
import Notification from '@/Components/Notification/Notification';
import TitleBar from '@/Components/TitleBar';
import InputFiled from '@/Components/inputFeild';
import { GlobalContext } from '@/GlobalState';
import { QuestionPost } from '@/services/exam';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {

     const { user, Error, setError, componentLevelLoader, setComponentLevelLoader } = useContext(GlobalContext);
     const [Open, setOpen] = useState(false);
     const [exam_name, setExam_name] = useState("");
     const [title, setTitle] = useState("");
     const route = useRouter();
     const question = false;

     const [questions, setQuestion] = useState([])

     const handleSubmit = (e) => {
          e.preventDefault();

          const from = e.target;
          const question_name = from.question_name.value;
          const answer_a = from.answer_a.value;
          const answer_b = from.answer_b.value;
          const answer_c = from.answer_c.value;
          const answer_d = from.answer_d.value;
          const answer_right = from.answer_right.value;


          const question = { question: question_name, answer_a, answer_b, answer_c, answer_d, answer_right }
          if (question) {
               setQuestion([...questions, question])
               setOpen(false)
          }


     };


     console.log(exam_name);
     console.log(exam_name?.questions);

     const subject = { exam_name, questions, title, category: "HSC" }

     const handleQuestionSubmit = async () => {
          console.log("hsmim");

          setComponentLevelLoader({
               loading: true,
               id: "",
          })

          if (!exam_name) {
               setError(" Please Exam Name  Set")
          } else if (questions?.length >= 10) {
               setError(" Minimum Question 10 ")
          }
          else if (!title) {
               setError(" Please Exam Title  Set")
          }
          else {
               const res = await QuestionPost(subject)
               console.log(res);
               if (res?.success) {
                    toast.success(res.message, {
                         position: toast.POSITION.TOP_RIGHT,
                    });
                    route.push('/dashboard/archive')
                    setComponentLevelLoader({
                         loading: false,
                         id: "",
                    })
               }

          }

     }


     console.log(questions);

     return (
          <div>

               <div>
                    <TitleBar aline={"text-center"} subtitle={'Add new question for mock test'} title={"New Question Add"}></TitleBar>
               </div>
               <div className=' primaryBg p-4 rounded-md md:px-20 py-10'>

                    <h1 className=' text-center mx-auto text-lg  md:text-lg font-medium  text-red-500'> At least 10 questions should be added</h1>
                    <div>
                         <div>

                              <div className=' w-full   my-2'>
                                   <label className='  pl-2 text-base md:text-lg  capitalize font-bold pb-2   text-white'>Exam Name </label>
                                   <input onChange={(e) => setExam_name(e.target.value)} require={true} type={"text"} className=' focus:border-[#0EE6B8] border-2 secondBg py-2 px-2 w-full '
                                        placeholder="EX: English"></input>
                              </div>
                              <div className=' w-full   my-2'>
                                   <label className='  pl-2 text-base md:text-lg  capitalize font-bold pb-2   text-white'>Exam Title </label>
                                   <input onChange={(e) => setTitle(e.target.value)} require={true} type={"text"} className=' focus:border-[#0EE6B8] border-2 secondBg py-2 px-2 w-full '
                                        placeholder="EX: HSC English Exam"></input>
                              </div>

                              {
                                   Error ? <p className=' text-base py-2  font-medium text-red-500'> {Error} </p> : null
                              }


                              <div>
                                   <h1 className=' text-base md:text-2xl    primary'> New    Question  add </h1>
                              </div>


                              {
                                   Open ? <>

                                        <div>
                                             <div className=' p-3 rounded-md bg-[#0ee6b74d]'>
                                                  < form onSubmit={handleSubmit} action="">
                                                       <InputFiled require={true} type={"text"} name="question_name" title={"Question Name"} placeholder={"EX: What is the name of the capital of Bangladesh?  "}> </InputFiled>




                                                       <div className=' grid  grid-cols-1 lg:grid-cols-2  gap-3 md:gap-2  '>
                                                            <InputFiled require={true} type={"text"} name="answer_a" title={"Option-1"} placeholder={"EX: Dhaka "}> </InputFiled>

                                                            <InputFiled require={true} type={"text"} name="answer_b" title={"Option-2"} placeholder={"EX: Rajshahi  "}> </InputFiled>

                                                            <InputFiled require={true} type={"text"} name="answer_c" title={"Option-3"} placeholder={"EX:  Rongpur"}> </InputFiled>

                                                            <InputFiled require={true} type={"text"} name="answer_d" title={"Option-4"} placeholder={"EX: chattogram  "}> </InputFiled>

                                                       </div>
                                                       <div><InputFiled require={true} type={"text"} name="answer_right" title={"Right Answer"} placeholder={"EX: Dhaka"}> </InputFiled></div>

                                                       <div>
                                                            <button className='  buttonColor text-black  font-bold px-3 py-1 rounded-md text-base md:text-2xl '>Submit Single Question</button>
                                                       </div>



                                                  </form>
                                             </div>

                                        </div>

                                   </> : <> <div>
                                        <button onClick={() => setOpen(true)} className='  buttonColor text-black  font-bold px-3 py-1 rounded-md text-base md:text-2xl '>Add new</button>
                                   </div>
                                   </>
                              }


                              <div>
                                   {
                                        Error ? <p className=' text-base py-2  font-medium text-red-500'> {Error} </p> : null
                                   }
                              </div>


                              <div className=' mt-6'>
                                   <button onClick={handleQuestionSubmit} className=' py-2 disabled:bg-[#0ee6b740] w-full  flex justify-center items-center  buttonColor text-black  font-bold px-3 py-1 text-center rounded-md text-base md:text-2xl '>

                                        {componentLevelLoader && componentLevelLoader.loading ? (
                                             <ComponentLevelLoader
                                                  text={"Adding Question"}
                                                  color={"#000000"}
                                                  loading={
                                                       componentLevelLoader && componentLevelLoader.loading
                                                  }
                                             />
                                        ) : (
                                             "Submit all"
                                        )} </button>

                              </div>


                         </div>
                    </div>
               </div>
               <Notification></Notification>
          </div>
     );
};

export default page;