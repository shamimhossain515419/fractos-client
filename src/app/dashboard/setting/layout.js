'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { AiOutlineUnlock } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import Link from 'next/link';
import { GlobalContext } from '@/GlobalState';
import Notification from '@/Components/Notification/Notification';
import { toast } from 'react-toastify';

const SettingLayout = ({ children }) => {
     const { logOutUser, pageLoader } = useContext(GlobalContext);
     const pathname = usePathname();
     const router=useRouter();
     const handleSingout = () => {
          logOutUser().then(result => {

               router.push("/")
               if (result) {
                    toast.success("successfully logout user")
               }

          })
     }

     return (
          <div>

               <div>
                    {
                         pageLoader ? <div className='w-full  primaryBg px-3 text-center py-2  rounded-xl'> <h1>  profile successfully update  </h1>     </div> : null
                    }
               </div>



               <h1 className=' text-lg md:text-2xl font-medium mb-5  '> Setting </h1>
               <div className=' flex   p-3   boxShadowNormal' >
                    <div className=' w-full md:w-[250px] gap-4    my-7 md:mt-5  md:mb-16 '>
                         <div className='   space-y-2    '>

                              <Link
                                   href="/dashboard/setting/profile"
                                   className={`${pathname == "/dashboard/setting" ? " bg-[#8d9ddc69] border-l-2 border-[#a73131c5] text-[#a73131c5] " : "bg-[#8d9ddc2c]  "} flex   hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <FaRegUserCircle size={24}></FaRegUserCircle>
                                   <h1 className=' text-base md:text-lg f font-normal '> Profile </h1>
                              </Link>

                              <Link
                                   href="/dashboard/setting/password"
                                   className={`${pathname == "/dashboard/setting/password" ? " bg-[#8d9ddc85]  text-[#a73131c5]" : "bg-[#8d9ddc2c] "} flex  hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3`}

                              >
                                   <AiOutlineUnlock size={24}></AiOutlineUnlock>
                                   <h1 className=' text-base md:text-lg f font-normal '> Archive </h1>
                              </Link>
                              <div onClick={handleSingout} className='  cursor-pointer flex  bg-[#8d9ddc2c] hover:bg-[#8d9ddc85] items-center   py-1 px-2 rounded-md gap-3'>
                                   <BiLogOut size={24}></BiLogOut>
                              </div>


                         </div>
                    </div>
                    <div className='  w-full p-4'>
                         {children}
                    </div>
               </div>
               <Notification></Notification>
          </div>
     );
};

export default SettingLayout;