"use client"
import CommonImage from '@/Components/CommonImage/CommonImage';
import DashboardNavbar from '@/Components/DashboardNavbar/DashboardNavbar';
import { GlobalContext } from '@/GlobalState';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { FaRegCircleUser } from 'react-icons/fa';
import { BsArchive } from 'react-icons/bs';
import { MdOutlineLeaderboard } from 'react-icons/md';

const DashboardLayout = ({ children }) => {
     const { user, openModal } = useContext(GlobalContext)
     const pathname = usePathname();


     return (
          <div>

               <div className=' md:hidden p-4 '>
                    <DashboardNavbar ></DashboardNavbar>
               </div>
               <div className=' hidden md:block'>
                    <div className='  my-2  p-4   flex items-center gap-5'>
                         <h1 className='text-lg  md:text-3xl font-bold my-4'> FRACTOS</h1>
                         <h1 className=' text-base primary md:text-lg font-bold my-4'> Digital Question Bank  </h1>
                    </div>
               </div>




               <div className=' p-1 sm:p-2 md:p-8 relative '>
                    {
                         openModal ? <div>


                              <div className=' md:hidden  bg-[#ECF0F3]  py-8   space-y-2'>

                                   <Link
                                        href="/dashboard"
                                        className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <AiOutlineHome size={24}></AiOutlineHome>
                                        <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
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
                                        href="/dashboard/profile"
                                        className={`${pathname == "/dashboard/profile" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <FaRegCircleUser size={24}></FaRegCircleUser>
                                        <h1 className=' text-base md:text-lg f font-normal '> Profile </h1>
                                   </Link>


                              </div>
                         </div>
                              : null
                    }




                    <div className='   hidden md:block '>


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


                              </div>
                              <div>


                                   <div className=' cursor-pointer hidden md:block '>
                                        <Link href={'/dashboard/setting'}  className='    flex  items-center gap-3 '>

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