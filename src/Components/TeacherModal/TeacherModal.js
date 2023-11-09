import { Teacherupdate } from "@/services/teacher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import Notification from "../Notification/Notification";

export default function TeacherModal({ data, setOpen }) {

     const newData = { email: data?.email, status: true }

     const handleUpdate = async () => {
          const result = await Teacherupdate(newData);
          if (result?.success == true) {
               toast.success(result?.massage)
               setOpen(false)
          } else {
               toast.error(result?.massage);
               setOpen(false)
          }

     }

     return (
          <>

               <>
                    <div
                         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                         <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/*content*/}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  primaryBg text-white outline-none focus:outline-none">
                                   {/*header*/}
                                   <div className="flex items-start justify-between p-5  rounded-t">
                                        <h3 className="text-3xl  w-full  flex justify-center items-center  primary text-center font-semibold">
                                             {data?.name}

                                        </h3>
                                        <button
                                             className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                             onClick={() => setOpen(false)}
                                        >
                                             <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                  ×
                                             </span>
                                        </button>
                                   </div>
                                   {/*body*/}
                                   <div className="relative p-6 flex-auto">
                                        <div className="my-4 text-blueGray-500 text-lg leading-relaxed">


                                             <div>
                                                  <Image className="  h-[250px] px-10 w-full  object-contain rounded-lg overflow-hidden" src={data?.image ? data?.image : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"} width={100} height={100} alt="image"></Image>
                                             </div>

                                             <div className=" flex   pt-5 gap-2 flex-wrap  md:gap-3 items-center">
                                                  <AiFillCheckCircle className="primary" size={24}></AiFillCheckCircle>
                                                  <h1 className=" text-white">   {data?.title}  </h1>
                                             </div>
                                             <div className=" flex    gap-2 flex-wrap  md:gap-3 items-center">
                                                  <AiFillCheckCircle className="primary" size={24}></AiFillCheckCircle>
                                                  <h1 className=" text-white">   {data?.email}  </h1>
                                             </div>
                                             <div className=" flex   gap-2 flex-wrap  md:gap-3 items-center">
                                                  <AiFillCheckCircle className="primary" size={24}></AiFillCheckCircle>
                                                  <h1 className=" text-white">   {data?.subject}  </h1>
                                             </div>
                                             <div className=" flex   gap-2 flex-wrap  md:gap-3 items-center">
                                                  <AiFillCheckCircle className="primary" size={24}></AiFillCheckCircle>
                                                  <h1 className=" text-white">   {data?.phone}  </h1>
                                             </div>
                                             <div className=" flex   gap-2 flex-wrap  md:gap-3 ">
                                                  <AiFillCheckCircle className="primary" size={24}></AiFillCheckCircle>
                                                  <h1 className=" text-white">   {data?.about}  </h1>
                                             </div>
                                             <div className=" flex   gap-2   items-center  md:gap-3 ">
                                                  <Link className="  hover:text-[#0EE6B8] " target="_blank" href={data?.cv}> CV Live Link : {data?.cv} </Link>
                                             </div>



                                        </div>
                                   </div>
                                   {/*footer*/}
                                   <div className="flex items-center justify-end p-6  rounded-b">
                                        <button onClick={() => setOpen(false)}
                                             className="text-red-500 border border-[#0EE6B8] primaryBg rounded shadow-xl hover:shadow-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                             type="button"

                                        >
                                             Close
                                        </button>
                                        <button onClick={handleUpdate}
                                             className=" buttonColor  text-black    font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                             type="button"

                                        >
                                             Accept
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
               </>

               <Notification></Notification>
          </>
     );
}