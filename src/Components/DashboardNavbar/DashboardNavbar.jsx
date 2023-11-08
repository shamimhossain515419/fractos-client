'use  client'
import { GlobalContext } from "@/GlobalState";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import CommonImage from "../CommonImage/CommonImage";
import Image from "next/image";
import logo from '../../../public/logo.png'

const DashboardNavbar = () => {
     const { user, openModal, setOpenModal } = useContext(GlobalContext)
     return (
          <div className=" fixed top-0 w-full shadow-md overflow-hidden left-0 right-0  px-2 z-50 primaryBg">
               <div className=" flex    justify-between gap-1 items-center ">
                    <div className=" cursor-pointer" onClick={() => setOpenModal(!openModal)}>
                         {
                              openModal ? <AiOutlineClose size={24}></AiOutlineClose> : <FaBars size={24}></FaBars>
                         }

                    </div>
                    <div>
                          <Image className=" w-[100px] " src={logo} alt="image"></Image>
                    </div>
                    <div>
                         <BsSun size={24}></BsSun>
                    </div>
                    <div>
                         {
                              user?.photoURL ? <CommonImage data={user}></CommonImage> : <div className=' primaryBg rounded-full p-2 text-black  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                         }

                    </div>
               </div>
          </div>
     );
};

export default DashboardNavbar;