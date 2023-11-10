'use client'
import CommonImage from '@/Components/CommonImage/CommonImage';
import { GlobalContext } from '@/GlobalState';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { AiFillFolderAdd, AiOutlineHome } from 'react-icons/ai';
import { BsArchive } from 'react-icons/bs';
import { PiExamBold } from 'react-icons/pi';
import { MdBatchPrediction, MdOutlineLeaderboard } from 'react-icons/md';
import DashboardNavbar from '@/Components/DashboardNavbar/DashboardNavbar';
import { BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { FaUsers } from 'react-icons/fa';

const DashboardLayout = ({ children }) => {
     const { user, openModal, userinfo } = useContext(GlobalContext)
     const pathname = usePathname();
     const Admin = userinfo?.role == 'admin'
     const UserRole = userinfo?.role == 'user'
     const Teachers = userinfo?.role == 'teacher'



     return (
          <div>

               <div className='md:hidden  w-full overflow-hidden   p-4 '>
                    <DashboardNavbar></DashboardNavbar>
               </div>





               <div className='  relative '>

                    <div className=' md:hidden p-2'>
                         {
                              openModal == true ? <div>
                                   <div className=' md:hidden    primaryBg py-8   space-y-2'>

                                        <Link
                                             href="/dashboard"
                                             className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                        >
                                             <AiOutlineHome size={24}></AiOutlineHome>
                                             <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
                                        </Link>

                                        {
                                             Admin ? <> <Link
                                                  href="/dashboard/academic"
                                                  className={`${pathname == "/dashboard/mock-exam" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                             >
                                                  <AiFillFolderAdd size={24}></AiFillFolderAdd>
                                                  <h1 className=' text-base md:text-lg f font-normal '>Academic </h1>
                                             </Link>

                                                  <Link
                                                       href="/dashboard/archive"
                                                       className={`${pathname == "/dashboard/archive" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                  >
                                                       <BsArchive size={24}></BsArchive>
                                                       <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                                                  </Link>
                                                  <Link
                                                       href="/dashboard/all-users"
                                                       className={`${pathname == "/dashboard/all-users" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                  >
                                                       <FaUsers size={24}></FaUsers>
                                                       <h1 className=' text-base md:text-lg f font-normal '> all-users </h1>
                                                  </Link>

                                                  <Link
                                                       href="/dashboard/leaderboard"
                                                       className={`${pathname == "/dashboard/leaderboard" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                  >
                                                       <MdOutlineLeaderboard size={24}></MdOutlineLeaderboard>
                                                       <h1 className=' text-base md:text-lg f font-normal '> Leaderboard </h1>
                                                  </Link>


                                                  <Link
                                                       href="/dashboard/setting"
                                                       className={`${pathname == "/dashboard/setting" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                  >
                                                       <FiSettings size={24}></FiSettings>
                                                       <h1 className=' text-base md:text-lg f font-normal '> setting </h1>
                                                  </Link>
                                             </>
                                                  : Teachers ? <>

                                                       <Link
                                                            href="/dashboard/setting"
                                                            className={`${pathname == "/dashboard/setting" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <FiSettings size={24}></FiSettings>
                                                            <h1 className=' text-base md:text-lg f font-normal '> setting </h1>
                                                       </Link>

                                                       <Link
                                                            href="/dashboard/academic"
                                                            className={`${pathname == "/dashboard/mock-exam" ? " bg-[#323b5d85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <AiFillFolderAdd size={24}></AiFillFolderAdd>
                                                            <h1 className=' text-base md:text-lg f font-normal '>Academic </h1>
                                                       </Link>
                                                       <Link
                                                            href="/dashboard/my-course"
                                                            className={`${pathname == "/dashboard/mock-exam" ? " bg-[#323b5d85]" : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <MdBatchPrediction size={24}></MdBatchPrediction>
                                                            <h1 className=' text-base md:text-lg f font-normal '>My Course </h1>
                                                       </Link>

                                                  </>
                                                       : <>


                                                            <Link
                                                                 href="/dashboard/archive"
                                                                 className={`${pathname == "/dashboard/archive" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                            >
                                                                 <BsArchive size={24}></BsArchive>
                                                                 <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                                                            </Link>



                                                            <Link
                                                                 href="/dashboard/mock-exam"
                                                                 className={`${pathname == "/dashboard/mock-exam" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                            >
                                                                 <PiExamBold size={24}></PiExamBold>
                                                                 <h1 className=' text-base md:text-lg f font-normal '> Mock exam </h1>
                                                            </Link>

                                                            <Link
                                                                 href="/dashboard/leaderboard"
                                                                 className={`${pathname == "/dashboard/leaderboard" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                            >
                                                                 <MdOutlineLeaderboard size={24}></MdOutlineLeaderboard>
                                                                 <h1 className=' text-base md:text-lg f font-normal '> Leaderboard </h1>
                                                            </Link>

                                                            <Link
                                                                 href="/dashboard/performance-analysis"
                                                                 className={`${pathname == "/dashboard/performance-analysis" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                            >
                                                                 <BsArchive size={24}></BsArchive>
                                                                 <h1 className=' text-base md:text-lg f font-normal '> performance-analysis </h1>
                                                            </Link>

                                                            <Link
                                                                 href="/dashboard/profile"
                                                                 className={`${pathname == "/dashboard/profile" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                            >
                                                                 <BiUserCircle size={24}></BiUserCircle>
                                                                 <h1 className=' text-base md:text-lg f font-normal '> Profile </h1>
                                                            </Link>

                                                            <Link
                                                                 href="/dashboard/exam-review"
                                                                 className={`${pathname == "/dashboard/exam-review" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                            >
                                                                 <Image src={'/review-icon.png'} width={24} height={24} alt='image'></Image>
                                                                 <h1 className=' text-base md:text-lg f font-normal '> Review </h1>
                                                            </Link>
                                                            <Link
                                                                 href="/dashboard/setting"
                                                                 className={`${pathname == "/dashboard/setting" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                            >
                                                                 <FiSettings size={24}></FiSettings>
                                                                 <h1 className=' text-base md:text-lg f font-normal '> setting </h1>
                                                            </Link>
                                                       </>
                                        }



                                   </div>
                              </div>
                                   : null
                         }

                    </div>



                    <div className='    hidden md:block top-0  fixed  w-[350px]  '>


                         <div className=' max-w-[350px]  secondBg  shadow-xl   px-5    flex flex-col justify-between gap-2 absolute top-1 bottom-2     h-screen pb-6 '>


                              <div className='   space-y-2'>
                                   <div className='    md:block'>
                                        <div className='  my-2  p-4   flex items-center gap-5'>

                                             <Link href={'/'} >   <Image className=" w-[150px] object-fill " src={logo} alt="image"></Image></Link>
                                        </div>
                                   </div>
                                   <Link
                                        href="/dashboard"
                                        className={`${pathname == "/dashboard" ? " bg-[#8d9ddc69] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                   >
                                        <AiOutlineHome size={24}></AiOutlineHome>
                                        <h1 className=' text-base md:text-lg f font-normal '> Dashboard </h1>
                                   </Link>


                                   {
                                        Admin ? <> <Link
                                             href="/dashboard/academic"
                                             className={`${pathname == "/dashboard/mock-exam" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                        >
                                             <AiFillFolderAdd size={24}></AiFillFolderAdd>
                                             <h1 className=' text-base md:text-lg f font-normal '>Academic </h1>
                                        </Link>

                                             <Link
                                                  href="/dashboard/archive"
                                                  className={`${pathname == "/dashboard/archive" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                             >
                                                  <BsArchive size={24}></BsArchive>
                                                  <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                                             </Link>

                                             <Link
                                                  href="/dashboard/all-users"
                                                  className={`${pathname == "/dashboard/all-users" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                             >
                                                  <FaUsers size={24}></FaUsers>
                                                  <h1 className=' text-base md:text-lg f font-normal '> all-users </h1>
                                             </Link>

                                             <Link
                                                  href="/dashboard/leaderboard"
                                                  className={`${pathname == "/dashboard/leaderboard" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                             >
                                                  <MdOutlineLeaderboard size={24}></MdOutlineLeaderboard>
                                                  <h1 className=' text-base md:text-lg f font-normal '> Leaderboard </h1>
                                             </Link>


                                             <Link
                                                  href="/dashboard/setting"
                                                  className={`${pathname == "/dashboard/setting" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                             >
                                                  <FiSettings size={24}></FiSettings>
                                                  <h1 className=' text-base md:text-lg f font-normal '> setting </h1>
                                             </Link>
                                        </>
                                             : Teachers ? <>


                                                  <Link
                                                       href="/dashboard/academic"
                                                       className={`${pathname == "/dashboard/mock-exam" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                  >
                                                       <AiFillFolderAdd size={24}></AiFillFolderAdd>
                                                       <h1 className=' text-base md:text-lg f font-normal '>Academic </h1>
                                                  </Link>


                                                  <Link
                                                       href="/dashboard/my-course"
                                                       className={`${pathname == "/dashboard/mock-exam" ? " bg-[#323b5d85]" : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                  >
                                                       <MdBatchPrediction size={24}></MdBatchPrediction>
                                                       <h1 className=' text-base md:text-lg f font-normal '>My Course </h1>
                                                  </Link>



                                                  <Link
                                                       href="/dashboard/setting"
                                                       className={`${pathname == "/dashboard/setting" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                  >
                                                       <FiSettings size={24}></FiSettings>
                                                       <h1 className=' text-base md:text-lg f font-normal '> setting </h1>
                                                  </Link>



                                             </>
                                                  : <>


                                                       <Link
                                                            href="/dashboard/archive"
                                                            className={`${pathname == "/dashboard/archive" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <BsArchive size={24}></BsArchive>
                                                            <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                                                       </Link>



                                                       <Link
                                                            href="/dashboard/mock-exam"
                                                            className={`${pathname == "/dashboard/mock-exam" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <PiExamBold size={24}></PiExamBold>
                                                            <h1 className=' text-base md:text-lg f font-normal '> Mock exam </h1>
                                                       </Link>

                                                       <Link
                                                            href="/dashboard/leaderboard"
                                                            className={`${pathname == "/dashboard/leaderboard" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <MdOutlineLeaderboard size={24}></MdOutlineLeaderboard>
                                                            <h1 className=' text-base md:text-lg f font-normal '> Leaderboard </h1>
                                                       </Link>

                                                       <Link
                                                            href="/dashboard/performance-analysis"
                                                            className={`${pathname == "/dashboard/performance-analysis" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <BsArchive size={24}></BsArchive>
                                                            <h1 className=' text-base md:text-lg f font-normal '> performance-analysis </h1>
                                                       </Link>

                                                       <Link
                                                            href="/dashboard/profile"
                                                            className={`${pathname == "/dashboard/profile" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <BiUserCircle size={24}></BiUserCircle>
                                                            <h1 className=' text-base md:text-lg f font-normal '> Profile </h1>
                                                       </Link>

                                                       <Link
                                                            href="/dashboard/exam-review"
                                                            className={`${pathname == "/dashboard/exam-review" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <Image src={'/review-icon.png'} width={24} height={24} alt='image'></Image>
                                                            <h1 className=' text-base md:text-lg f font-normal '> Review </h1>
                                                       </Link>
                                                       <Link
                                                            href="/dashboard/setting"
                                                            className={`${pathname == "/dashboard/setting" ? " bg-[#8d9ddc85] " : "bg-[#8d9ddc2c] "} flex hover:bg-[#8d9ddc85]  items-center   py-1 px-2 rounded-md gap-3`}

                                                       >
                                                            <FiSettings size={24}></FiSettings>
                                                            <h1 className=' text-base md:text-lg f font-normal '> setting </h1>
                                                       </Link>
                                                  </>
                                   }


                              </div>
                              <div>


                                   <div className=' cursor-pointer hidden md:block '>
                                        <Link href={'/dashboard/setting'} className='    flex  items-center gap-3 '>

                                             {
                                                  user?.photoURL ? <CommonImage data={user}></CommonImage> : <div className=' primaryBg rounded-full p-2 text-black  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                                             }



                                             <div className='   space-y-0'>


                                                  <h1 className=' font-medium primary   uppercase  text-base'>{user?.displayName ? user?.displayName : user?.email.slice(0, 6)}</h1>

                                             </div>

                                        </Link>
                                   </div>
                              </div>
                         </div>

                    </div>

                    <div className=' md:ml-[300px] overflow-hidden p-3'>
                         {children}
                    </div>

               </div>

          </div>
     );
};

export default DashboardLayout;