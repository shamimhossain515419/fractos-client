'use client'
import Link from "next/link";
import Notification from "../Notification/Notification";

import { FaBars } from 'react-icons/fa'
import Container from "../Container/Container";
import MenuBar from "./MenuBar";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/GlobalState";
import CommonImage from "../CommonImage/CommonImage";
import UserModal from "../UserModal/UserModal";

const Navbar = () => {
     const [isShrink, setIsShrink] = useState(false);
     const { userinfo, user, setIsAdmin, isAdmin } = useContext(GlobalContext);
     const [Open, setOpen] = useState(true);
     const [isUserModalOpen, setIsUserModalOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 500) {
                    setIsShrink(true);
               } else {
                    setIsShrink(false);
               }
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);
     return (
          <div className=" mb-12">
               <div>
                    <nav className={`px-2 py-2 z-50 bg-[#ECF0F3] shadow-lg fixed top-0 left-0 w-full transition-transform ${isShrink ? 'h-[66px] bg-slate-300' : 'h-[74px]'
                         } transition-all`}>
                         <Container>
                              <div className=' '>
                                   <div className='flex justify-between items-center'>
                                        <div className=' flex  items-center gap-4'>

                                             <div className=" md:hidden">
                                                  {
                                                       user ? <Link href={'/'}>      <CommonImage data={user} className="w-[50px] h-[50px]"></CommonImage></Link> : null
                                                  }
                                             </div>
                                             <Link href="/"> <h1 className=' primary py-2 font-semibold  text-base md:text-2xl text-color   uppercase'> FRACTOS </h1></Link>
                                        </div>

                                        {/* desktop navigation links */}
                                        <div className=' hidden md:flex items-center gap-3  space-x-5'>
                                             <Link className="p-2 rounded-lg hover:bg-[#4A3AFF] hover:text-white transition-all" href={'/'}>Home</Link>
                                             <Link className="p-2 rounded-lg hover:bg-[#4A3AFF] hover:text-white transition-all" href={'/teacher'}>Teacher</Link>
                                             <Link className="p-2 rounded-lg hover:bg-[#4A3AFF] hover:text-white transition-all" href={'/blogs'}>Blogs</Link>
                                             <Link className="p-2 rounded-lg hover:bg-[#4A3AFF] hover:text-white transition-all" href={'/contact'}>Contact Us</Link>

                                        </div>

                                        {/* desktop navigation right side */}
                                        <div className=" hidden sm:block">
                                             {
                                                  user ?
                                                       <div className='relative cursor-pointer hidden md:block '>
                                                            <div onClick={() => setIsUserModalOpen(!isUserModalOpen)} className='flex gap-2 items-center  p-2 rounded-lg hover:bg-[#4A3AFF] hover:text-white transition-all'>
                                                                 <CommonImage data={user}></CommonImage>
                                                                 <h1 className='relative  text-base'>{user?.displayName}</h1>
                                                            </div>
                                                            {
                                                                 isUserModalOpen ?
                                                                      <div className="absolute top-[100%]">
                                                                           <UserModal></UserModal>
                                                                      </div>
                                                                      :
                                                                      <></>
                                                            }
                                                       </div>
                                                       :
                                                       <div className="flex gap-2 items-center">
                                                            <Link href={'/login'} className="px-3 py-2 text-white bg-[#4A3AFF] rounded-lg hover:shadow-lg">Login</Link>
                                                            <Link href={'/register'} className="px-3 py-2 bg-gray-100 hover:bg-slate-600 hover:text-white rounded-lg hover:shadow-lg">Register</Link>
                                                       </div>
                                             }
                                        </div>


                                        <div onClick={() => setOpen(!Open)} className=' md:hidden '>

                                             {
                                                  Open ? <FaBars size={24} className=' '> </FaBars> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                  </svg>

                                             }

                                        </div>
                                   </div>

                                   <div className='md:hidden'>
                                        {
                                             Open ? "" : <MenuBar user={user} setOpen={setOpen}></MenuBar>
                                        }
                                   </div>


                              </div>
                         </Container>

                    </nav>

                    <Notification></Notification>
               </div >
          </div>
     );
};

export default Navbar;