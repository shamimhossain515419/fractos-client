"use client"
import CommonImage from '@/Components/CommonImage/CommonImage';

import { GlobalContext } from '@/GlobalState';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsArchive } from 'react-icons/bs';
import { PiExamBold } from 'react-icons/pi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import DashboardNavbar from '@/Components/DashboardNavbar/DashboardNavbar';
import { BiUserCircle } from 'react-icons/bi';

const DashboardLayout = ({ children }) => {
     const { user, openModal } = useContext(GlobalContext)
     const pathname = usePathname();

     console.log(openModal);
     return (
          <div>

               <div className='md:hidden  w-full overflow-hidden  p-4 '>
                    <DashboardNavbar></DashboardNavbar>
               </div>


               <div className=' hidden  fixed top-2 left-3 md:block'>
                    <div className='  my-2  p-4   flex items-center gap-5'>
                         <h1 className='text-lg  md:text-3xl font-bold my-4'> FRACTOS</h1>
                    </div>
               </div>


               <div className=' p-2 sm:p-2 md:p-8 relative '>

                    <div className=' md:hidden p-2'>
                         {
                              openModal == true ? <div>
                                <div className=' md:hidden  bg-[#ECF0F3]  py-8   space-y-2'>

                                        <Link
                                             href="/dashboard"
                                             className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                        >
                                             <AiOutlineHome size={24}></AiOutlineHome>
                                             <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
                                        </Link>

                                        <Link
                                             href="/dashboard/mock-exam"
                                             className={`${pathname == "/dashboard/mock-exam" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                        >
                                             <PiExamBold size={24}></PiExamBold>
                                             <h1 className=' text-base md:text-lg f font-normal '> Mock exam </h1>
                                        </Link>

                                        <Link
                                             href="/dashboard/archive"
                                             className={`${pathname == "/dashboard/archive" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                        >
                                             <BsArchive size={24}></BsArchive>
                                             <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                                        </Link>


                                        <Link
                                             href="/dashboard/Leaderboard"
                                             className={`${pathname == "/dashboard/Leaderboard" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                        >
                                             <MdOutlineLeaderboard size={24}></MdOutlineLeaderboard>
                                             <h1 className=' text-base md:text-lg f font-normal '> Leaderboard </h1>
                                        </Link>
                                        <Link
                                             href="/dashboard"
                                             className={`${pathname == "/dashboard/profile" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                        >
                                             <BiUserCircle size={24}></BiUserCircle>
                                             <h1 className=' text-base md:text-lg f font-normal '> Profile </h1>
                                        </Link>


                                   </div>
                              </div>
                                   : null
                         }

                    </div>



                    <div className='   hidden md:block  fixed top-[150px] w-[300px] left-3 '>


                         <div className=' max-w-[300px]   flex flex-col justify-between gap-2 absolute top-1 bottom-2 left-2 h-[80vh] '>
                              <div className='   space-y-2'>

                                   <Link
                                        href="/dashboard"
                                        className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <AiOutlineHome size={24}></AiOutlineHome>
                                        <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
                                   </Link>

                                   <Link
                                        href="/dashboard/mock-exam"
                                        className={`${pathname == "/dashboard/mock-exam" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <PiExamBold size={24}></PiExamBold>
                                        <h1 className=' text-base md:text-lg f font-normal '> Mock exam </h1>
                                   </Link>

                                   <Link
                                        href="/dashboard/archive"
                                        className={`${pathname == "/dashboard/archive" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <BsArchive size={24}></BsArchive>
                                        <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                                   </Link>
                                   <Link
                                        href="/dashboard/performance-analysis"
                                        className={`${pathname == "/dashboard/performance-analysis" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <BsArchive size={24}></BsArchive>
                                        <h1 className=' text-base md:text-lg f font-normal '> performance-analysis </h1>
                                   </Link>
                                   <Link
                                        href="/dashboard/leaderboard"
                                        className={`${pathname == "/dashboard/leaderboard" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <MdOutlineLeaderboard size={24}></MdOutlineLeaderboard>
                                        <h1 className=' text-base md:text-lg f font-normal '> Leaderboard </h1>
                                   </Link>


                              </div>
                              <div>


                                   <div className=' cursor-pointer hidden md:block '>
                                        <Link href={'/dashboard/setting'} className='    flex  items-center gap-3 '>

                                             {
                                                  user?.photoURL ? <CommonImage data={user}></CommonImage> : <div className=' primaryBg rounded-full p-2 text-black  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                                             }



                                             <div className='   space-y-0'>


                                                  <h1 className=' font-medium  text-base'>{user?.displayName ? user?.displayName : user?.email.slice(0, 6)}</h1>

                                             </div>

                                        </Link>
                                   </div>
                              </div>
                         </div>

                    </div>

                    <div className=' md:ml-[300px] p-3'>
                         {children}
                    </div>

               </div>

          </div>
     );
};

export default DashboardLayout;