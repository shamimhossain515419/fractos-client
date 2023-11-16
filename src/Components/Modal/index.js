'use client'

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { GlobalContext } from "@/GlobalState";
import { FeedbackPost } from "@/services/Feedback";
import Notification from "../Notification/Notification";
import { toast } from "react-toastify";


export default function Modal({ Question, setSuccess, name, RightAns }) {

     const [Open, setOpen] = useState(false);
     const { user } = useContext(GlobalContext)
     const [rating, setRating] = useState(0)
     const [title, setTitle] = useState("")
     const [comment, setComment] = useState("")

     const route = useRouter();


     const FeedbackData = { rating, title, comment, email: user?.email, photo: user?.photoURL ? user?.photoURL : "", name: user?.displayName ? user?.displayName : "" }


     const handleFeedback = async () => {

          const result = await FeedbackPost(FeedbackData);
          toast.success(result?.message)
          if (result.success) {

               route.push('/dashboard')
               setOpen(false)
               setSuccess(false)
          }

     }
     return (


          <div className="  h-screen  w-screen bg-[#ffffff5f]  z-40   fixed  top-0 left-0 right-0 bottom-0">
               <>
                    <div
                         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                         <div className="relative w-auto my-6 mx-auto max-w-3xl">


                              {
                                   Open ?
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  primaryBg outline-none focus:outline-none">

                                             <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                  <h3 className="text-3xl primary w-full flex justify-center items-center  capitalize text-center font-semibold">
                                                       Please  Your Feedback
                                                  </h3>
                                                  <button
                                                       className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                       onClick={() => setShowModal(false)}
                                                  >
                                                       <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                            ×
                                                       </span>
                                                  </button>
                                             </div>

                                             <div className="relative p-6  md:min-w-[500px] flex-auto">
                                                  <div className=' pt-16 flex justify-center items-center mx-auto w-full     '>
                                                       <div className=' w-full'>



                                                            <div>
                                                                 <div className=' w-full   my-2'>
                                                                      <label className='   text-base md:text-lg  capitalize font-bold pb-2   text-white'>Title </label>
                                                                      <input onChange={(e) => setTitle(e.target.value)} className=' focus:border-[#0EE6B8] border-2 secondBg py-2 px-2 w-full'
                                                                           type={"text"} placeholder={"Ex: Best Learning website"}></input>
                                                                 </div>
                                                                 <div className=' w-full   my-2'>
                                                                      <label className='   text-base md:text-lg  capitalize font-bold pb-2   text-white'>Comment </label>
                                                                      <textarea onChange={(e) => setComment(e.target.value)} placeholder={"Ex: Comment"} className=' focus:border-[#0EE6B8] border-2 secondBg py-2 px-2 w-full' rows={5} >

                                                                      </textarea>


                                                                 </div>
                                                                 <div className=' w-full   my-2'>
                                                                      <label className='   text-base md:text-lg  capitalize font-bold pb-2   text-white'>Ratings range from 1 to 5 </label>
                                                                      <input onChange={(e) => setRating(e.target.value)} className=' focus:border-[#0EE6B8] border-2 secondBg py-2 px-2 w-full'
                                                                           type={"number"} placeholder={"Ex: 5"}></input>
                                                                 </div>
                                                            </div>


                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="flex items-center  justify-center gap-3 p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                  <button onClick={() => { route.push('/'), setSuccess(false) }}
                                                       className="bg-red-500    text-white active:bg-emerald-600 font-bold capitalize text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="button"

                                                  >
                                                       Close
                                                  </button>
                                                  <button onClick={handleFeedback}
                                                       className=" buttonColor  text-black active:bg-emerald-600 font-bold   capitalize  text-lg px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                       type="button"

                                                  >
                                                       Submit
                                                  </button>
                                             </div>
                                        </div>
                                        : <div>
                                             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  primaryBg outline-none focus:outline-none">

                                                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                       <h3 className="text-3xl w-full flex justify-center items-center  capitalize text-center font-semibold">
                                                            {name}
                                                       </h3>
                                                       <button
                                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                            onClick={() => setShowModal(false)}
                                                       >
                                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                 ×
                                                            </span>
                                                       </button>
                                                  </div>

                                                  <div className="relative p-6  md:min-w-[500px] flex-auto">
                                                       <div className=' pt-16 flex justify-center items-center mx-auto w-full     '>
                                                            <div className=' w-full'>
                                                                 <div className='    bg-[#27895bd5]  text-2xl font-medium text-white  py-5 px-2 text-center  '>  Successfully  Exam    </div>


                                                                 <div>

                                                                      <div className=' text-left mt-5  flex justify-center  items-center flex-col gap-5'>
                                                                           <h1 className=' text-xl font-medium md:text-3xl  primary'> Right answer :{RightAns?.length} </h1>
                                                                           <h1 className=' text-xl font-medium md:text-3xl  text-red-500'> Wrong  answer :{RightAns?.length - Question?.questions?.length} </h1>
                                                                      </div>
                                                                 </div>


                                                            </div>
                                                       </div>
                                                  </div>

                                                  <div className="flex items-center  justify-center gap-3 p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                       <button onClick={() => { route.push('/dashboard'), setSuccess(false) }}
                                                            className="bg-red-500    text-white active:bg-emerald-600 font-bold capitalize text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"

                                                       >
                                                            Close
                                                       </button>
                                                       <button onClick={() => setOpen(true)}
                                                            className=" buttonColor  text-black active:bg-emerald-600 font-bold   capitalize  text-lg px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"

                                                       >
                                                            Please Feedback
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                              }

                         </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
               </>
               <Notification></Notification>
          </div>
     );
}