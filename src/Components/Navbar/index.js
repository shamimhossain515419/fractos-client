'use client'
import Link from "next/link";
import Notification from "../Notification/Notification";
import Image from "next/image";
import { FaBars } from 'react-icons/fa'
import Container from "../Container/Container";
import MenuBar from "./MenuBar";
import { useContext, useState } from "react";
import { GlobalContext } from "@/GlobalState";




const Navbar = () => {
     const { userinfo, user } = useContext(GlobalContext);
     const [Open, setOpen] = useState(true)

     return (
          <div>
               <div>
                    <nav className='px-2 w-full fixed py-3 z-50 bg-[#ECF0F3]      top-0  left-0 right-0    shadow-lg'>
                         <Container>
                              <div className=' '>
                                   <div className=' flex    justify-between items-center'>
                                        <div className=' flex  items-center gap-4'>
                                             {
                                                  user ? <Link href={'/'}>  <Image width={60} height={60} className=" h-12 w-12 md:hidden rounded-full object-cover" src={user?.photoURL} alt="image" /></Link> : <></>
                                             }


                                             <Link href="/"> <h1 className='  py-2 font-semibold  text-base md:text-2xl text-color   uppercase'> FRACTOS </h1></Link>
                                        </div>
                                        <div className=' hidden md:flex items-center gap-3  space-x-5'>
                                             {
                                                  userinfo?.role == "Admin" ? (isAdmin == true ? <>
                                                       <Link href={'/'}> Home</Link>
                                                       <Link href={'/teacher'}>Teacher </Link>
                                                       <Link href={'/leader-board'}> Leader board</Link>
                                                       <Link href={'/blogs'}> Blogs</Link>
                                                       <Link href={'/contact'}> Contact Us</Link>
                                                       <button onClick={() => setIsAdmin(false)} className=" bgColor text-white  px-3 py-1 ">Admin view</button>
                                                  </> : <>
                                                       <Link href={'/'}> Home</Link>

                                                       <Link href={'/teacher'}>Teacher </Link>
                                                       <Link href={'/leader-board'}> Leader board</Link>
                                                       <Link href={'/blogs'}> Blogs</Link>
                                                       <Link href={'/contact'}> Contact Us</Link>
                                                       {
                                                            user?.email ? <Link href={'/dashboard'}>Dashboard</Link> : null
                                                       }


                                                  </>) : (<>

                                                       <Link href={'/'}> Home</Link>

                                                       <Link href={'/teacher'}>Teacher </Link>
                                                       <Link href={'/leader-board'}> Leader board</Link>
                                                       <Link href={'/blogs'}> Blogs</Link>
                                                       {
                                                            user?.email ? <Link href={'/dashboard'}>Dashboard</Link> : null
                                                       }

                                                  </>)


                                             }



                                        </div>




                                        <div className=" hidden sm:block">
                                             { user ? <div onClick={() => setOpenModal(true)} className=' cursor-pointer hidden md:block '>
                                                       <div className='   relative flex gap-2 items-center '>
                                                            <Image width={60} height={60} className=' relative h-10 w-10 rounded-full object-cover' src={user?.photoURL} alt="image" />
                                                            <div className=' absolute w-3 h-3  left-8 -top-1  bg-[rgb(1,179,31)] rounded-full '></div>
                                                            <div className=' relative  space-y-0'>
                                                                 <h1 className='relative  text-base'>{user?.displayName}</h1>
                                                                 <span className=' absolute -bottom-3 text-xs mt-4'> Active now</span>
                                                            </div>

                                                       </div>
                                                  </div> : <Link href={'/login'} className={'text-[#298742]'}> Login/Register</Link>
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