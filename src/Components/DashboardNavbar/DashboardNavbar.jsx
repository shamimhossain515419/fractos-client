'use  client'
import { GlobalContext } from "@/GlobalState";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import CommonImage from "../CommonImage/CommonImage";


const DashboardNavbar = () => {
     const { user, openModal, setOpenModal } = useContext(GlobalContext)
     return (
          <div className=" fixed top-0 w-full overflow-hidden left-0 right-0  px-2 z-50 bg-[#ECF0F3]">
               <div className=" flex    justify-between gap-1 items-center ">
                    <div className=" cursor-pointer" onClick={() => setOpenModal(!openModal)}>
                         {
                              openModal ? <AiOutlineClose size={24}></AiOutlineClose> : <FaBars size={24}></FaBars>
                         }

                    </div>
                    <div>
                         <h1 className=" text-2xl font-semibold my-4 "> Fractors</h1>
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