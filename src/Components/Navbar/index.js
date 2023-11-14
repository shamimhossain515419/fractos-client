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
import Image from "next/image";
import logo from '../../../public/logo.png'
import { usePathname } from "next/navigation";
const Navbar = () => {
     const { userinfo, user, setIsAdmin, isAdmin, setIsUserModalOpen, isUserModalOpen } = useContext(GlobalContext);
     const [Open, setOpen] = useState(true);
     const pathName = usePathname()
     return (
          <div className=" mb-12">
               <div>
                    <nav className={`px-2 py-3 z-50 primaryBg shadow-lg fixed top-0 left-0 w-full transition-transform`}>
                         <Container>
                              <div className=' '>
                                   <div className='flex justify-between items-center'>
                                        <div className=' flex  items-center gap-4'>

                                             <div onClick={() => setIsUserModalOpen(!isUserModalOpen)} className=" lg:hidden relative cursor-pointer">
                                                  <CommonImage data={user} className="w-[50px] h-[50px]"></CommonImage>
                                                  {
                                                       isUserModalOpen ?
                                                            <div className="absolute top-[100%] -right-1/2">
                                                                 <UserModal></UserModal>
                                                            </div>
                                                            :
                                                            <></>
                                                  }
                                             </div>
                                             <Link href="/">  <Image className="    w-[100px]   md:max-w-[200px]" src={logo} alt="image" /> </Link>
                                        </div>

                                        <div className=' hidden lg:flex items-center gap-3  space-x-5'>
                                             <Link className={`px-2 rounded-lg ${pathName == "/" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/'}>Home</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/teacher" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/teacher'}>Teacher</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/courses" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/courses'}> All Courses</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/blogs" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/blogs'}>Blogs</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/about" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/blogs'}>About</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/contact" ? "activeLink" : ""} hover:bg-[#0EE6B8] hover:text-black font-medium transition-all`} href={'/contact'}>Contact Us</Link>

                                        </div>


                                        {/* right side user image and modal for large screen */}
                                        <div className=" hidden lg:block">
                                             {
                                                  user ?
                                                       <div className='relative cursor-pointer hidden md:block '>
                                                            <div onClick={() => setIsUserModalOpen(!isUserModalOpen)} className='flex gap-x-2 items-center py-1  px-2 rounded-lg hover:bg-[#27895C] font-medium transition-all'>
                                                                 <CommonImage data={user}></CommonImage>
                                                                 <h1 className='relative  text-base'>{user?.displayName}</h1>
                                                            </div>
                                                            {
                                                                 isUserModalOpen ?
                                                                      <div className="absolute top-[100%] -right-1/2">
                                                                           <UserModal setIsUserModalOpen={setIsUserModalOpen}></UserModal>
                                                                      </div>
                                                                      :
                                                                      <></>
                                                            }
                                                       </div>
                                                       :
                                                       <div className="flex gap-2 items-center">
                                                            <Link href={'/login'} className="px-5 border-2 hover:border-white transition-all border-[#27895C] text-white bg-[#27895C] hover:bg-[#black font-mediumFe1] rounded-full font-mediumer:shadow-lg">Login</Link>
                                                            <Link href={'/register'} className="px-3 bg-transparent text-white border-2 border-slate-600 hover:bg-slate-600 rounded-full hover:shadow-lg transition-all">Register</Link>
                                                       </div>
                                             }
                                        </div>

                                        {/* three bar menu for mobile screen */}
                                        <div onClick={() => setOpen(!Open)} className=' lg:hidden '>
                                             {
                                                  Open ? <FaBars size={24} className=' '> </FaBars>
                                                       :
                                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                       </svg>

                                             }

                                        </div>
                                   </div>
                                   {/* navigation links  for mobile screen */}
                                   <div className='lg:hidden'>
                                        {
                                             Open ? "" : <MenuBar user={user} setOpen={setOpen}></MenuBar>
                                        }
                                   </div>


                              </div>
                         </Container>

                    </nav>
               </div>

               <Notification></Notification>
          </div>
     );
};

export default Navbar;