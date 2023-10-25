'use client'
import { GlobalContext } from '@/GlobalState';
import Image from 'next/image';
import React, { useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ImPointRight } from 'react-icons/im'


import image1 from '../../../assets/a_5.svg'
import image2 from '../../../assets/b_1.svg'
import image3 from '../../../assets/l_5.svg'
import image4 from '../../../assets/s_5.svg'
import image5 from '../../../assets/o_5.svg'
import image6 from '../../../assets/g_5.svg'
import CommonImage from '@/Components/CommonImage/CommonImage';
import Link from 'next/link';

const page = () => {
     const { user } = useContext(GlobalContext);



     return (
          <div>
               <div>
                    <h1 className='  text-xl font-bold   uppercase md:text-2xl textColor  '> Leaderboard</h1>

                    <div className=' flex justify-center  sm:gap-2  md:gap-14 '>
                         <div className=' flex flex-col items-center gap-2  mt-14'>
                              <div className='  '>
                                   <Image className='   imageshodow  w-[50px] h-[50px] rounded-full md:w-[100px] md:h-[100px] ' width={200} height={200} src={"https://i.ibb.co/5cB6bLd/360-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg"} alt="" ></Image>
                              </div><h1 className=' md:text-xl font-bold '> Md: Shamim Hossain </h1>
                              <div className=' flex justify-center items-center gap-2'>
                                   <ImPointRight size={24}></ImPointRight>
                                   <p> 25.5k </p>
                              </div>
                         </div>

                         <div className=' flex flex-col items-center gap-2 '>
                              <div className='  '>
                                   <Image className=' imageshodow    w-[50px] h-[50px] rounded-full md:w-[100px] md:h-[100px] ' width={200} height={200} src={"https://i.ibb.co/br3XYDw/download.jpg"} alt="" ></Image>
                              </div><h1 className=' md:text-xl font-bold '> Md: adbur rahman  </h1>
                              <div className=' flex justify-center items-center gap-2'>
                                   <ImPointRight size={24}></ImPointRight>
                                   <p> 29.5k </p>
                              </div>
                         </div>
                         <div className=' flex flex-col items-center gap-2 mt-14'>
                              <div className='  '>
                                   <Image className='   imageshodow rounded-full w-[50px] h-[50px] md:w-[100px] md:h-[100px] ' width={200} height={200} src={"https://i.ibb.co/W5FrpSg/images.jpg"} alt="" ></Image>
                              </div><h1 className=' md:text-xl font-bold '> Md: Mostafuser  Rahman </h1>
                              <div className=' flex justify-center items-center gap-2'>
                                   <ImPointRight size={24}></ImPointRight>
                                   <p> 20.5k </p>
                              </div>
                         </div>
                    </div>

                    <div className=' flex justify-center py-6 items-center gap-2 mt-8 '>
                         <div className=' inline-block '>
                              <div className=' flex border-2 px-4 py-[5PX] rounded-md border-[#27895C] items-center gap-4 text-center'>
                                   <button className=' text-base   md:text-lg font-medium '>

                                        Your rank 120  out of 1200 students
                                   </button>
                                   <AiOutlineArrowRight size={24}></AiOutlineArrowRight>
                              </div>
                         </div>
                    </div>

                    <div className=' my-8 flex justify-center items-center flex-wrap gap-9'>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image1} alt=''></Image>
                              <h1 className=' text-base  md:text-xl font-semibold'> 100</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image2} alt=''></Image>
                              <h1 className=' text-base  md:text-xl font-semibold'> 200</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image6} alt=''></Image>
                              <h1 className=' text-base  md:text-xl font-semibold'> 400</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image3} alt=''></Image>
                              <h1 className=' text-base  md:text-xl font-semibold'> 500</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image4} alt=''></Image>
                              <h1 className=' text-base  md:text-xl font-semibold'> 800</h1>
                         </div>
                         <div className=' flex flex-col justify-center items-center gap-2'>
                              <Image className=' w-[80px] h-[80px] ' width={100} height={100} src={image5} alt=''></Image>
                              <h1 className=' text-base  md:text-xl font-semibold'> 1000</h1>
                         </div>
                    </div>

                    <Link href={`/dashboard/${user?.email}`} className='  bg-[#E5E5E5] px-3 py-1 rounded flex justify-between items-center gap-2 max-w-[1200px] mx-auto'>
                         <div className=' flex  gap-4 items-center'>
                              <div className='text-xl  md:text-xl font-bold '>
                                   4
                              </div>
                              <div>
                                   <Image className=' w-[30px] h-[30px] rounded-md ' width={50} height={50} src={image6} alt=''></Image>
                              </div>

                              <div className=' flex justify-center  items-center gap-2'>
                                   <div>
                                        {
                                             user?.photoURL ? <Image className=' w-[50px] h-[50px] rounded ' width={100} height={100} src={user?.photoURL} alt=''> </Image> : <div className=' primaryBg  p-2 text-black w-[50px] h-[50px] rounded  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                                        }
                                   </div>
                                   <div>
                                        <h1 className=' text-base md:text-lg font-medium'> Shamim Hossain</h1>
                                        <p> bogura polytechnic institute</p>
                                   </div>
                              </div>
                         </div>

                         <div>
                              <h1 className=' text-xl md:text-2xl font-medium my-3'> 15.5K</h1>
                         </div>
                    </Link>
                    <Link href={`/dashboard/${user?.email}`} className=' my-5 bg-[#E5E5E5] px-3 py-1 rounded flex justify-between items-center gap-2 max-w-[1200px] mx-auto'>
                         <div className=' flex  gap-4 items-center'>
                              <div className='text-xl  md:text-xl font-bold '>
                                   4
                              </div>
                              <div>
                                   <Image className=' w-[30px] h-[30px] rounded-md ' width={50} height={50} src={image6} alt=''></Image>
                              </div>

                              <div className=' flex justify-center  items-center gap-2'>
                                   <div>
                                        {
                                             user?.photoURL ? <Image className=' w-[50px] h-[50px] rounded ' width={100} height={100} src={user?.photoURL} alt=''> </Image> : <div className=' primaryBg  p-2 text-black w-[50px] h-[50px] rounded  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                                        }
                                   </div>
                                   <div>
                                        <h1 className=' text-base md:text-lg font-medium'> Shamim Hossain</h1>
                                        <p> bogura polytechnic institute</p>
                                   </div>
                              </div>
                         </div>

                         <div>
                              <h1 className=' text-xl md:text-2xl font-medium my-3'> 15.5K</h1>
                         </div>
                    </Link>
                    <Link href={`/dashboard/${user?.email}`} className=' bg-[#E5E5E5] px-3 py-1 rounded flex justify-between items-center gap-2 max-w-[1200px] mx-auto'>
                         <div className=' flex  gap-4 items-center'>
                              <div className='text-xl  md:text-xl font-bold '>
                                   4
                              </div>
                              <div>
                                   <Image className=' w-[30px] h-[30px] rounded-md ' width={50} height={50} src={image6} alt=''></Image>
                              </div>

                              <div className=' flex justify-center  items-center gap-2'>
                                   <div>
                                        {
                                             user?.photoURL ? <Image className=' w-[50px] h-[50px] rounded ' width={100} height={100} src={user?.photoURL} alt=''> </Image> : <div className=' primaryBg  p-2 text-black w-[50px] h-[50px] rounded  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                                        }
                                   </div>
                                   <div>
                                        <h1 className=' text-base md:text-lg font-medium'> Shamim Hossain</h1>
                                        <p> bogura polytechnic institute</p>
                                   </div>
                              </div>
                         </div>

                         <div>
                              <h1 className=' text-xl md:text-2xl font-medium my-3'> 15.5K</h1>
                         </div>
                    </Link>


               </div>
          </div >
     );
};

export default page;