

import { DeleteUser } from "@/services/users";
import Image from "next/image";
import React from "react";
import Notification from "../Notification/Notification";
import { toast } from "react-toastify";


export default function StudentDetails({ userInfo, showModal, setShowModal }) {

    const handleDelete = async (id) => {
    
        const result = await DeleteUser(id);
        console.log(result);
         toast.success(result?.massage)
        setShowModal(false)

    }

    return (
        <>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative md:min-w-[400px] w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full primaryBg outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5  rounded-t">
                                    <h3 className="text-3xl primary  text-center mx-auto font-semibold">
                                        {userInfo?.name}
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
                                {/*body*/}
                                <div className="relative p-6 flex-auto  justify-center  flex-col">
                                    <Image width={120} height={210} src={userInfo?.photo ? userInfo?.photo
                                        : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"} alt="" className=" block mx-auto text-center h-[100px] w-[100px] md:w-[200px] md:h-[200px] rounded-full border border-[#0EE6B8]" />
                                    <div className="">

                                        <div className="text-white p-5 text-center">
                                            <p>Name : {userInfo.name}</p>
                                            <p> Email: {userInfo.email}</p>
                                            <p> Collage:  {userInfo.collage}</p>
                                            <p>Category : {userInfo.category}</p>

                                            <p>Batch : {userInfo.batch}</p>

                                            <p>My Exam : {userInfo.exam}</p>
                                            <p>Mark : {userInfo.mark}</p>
                                            <p>Rank : {userInfo.rank}</p>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500   background-transparent font-bold uppercase px-6 py-2 text-base  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="  buttonColor  text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handleDelete(userInfo?._id)}
                                    >
                                        Delete
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            <Notification></Notification>
        </>
    );
}