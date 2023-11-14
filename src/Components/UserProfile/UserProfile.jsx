'use client'
import React, { useContext } from 'react';
import { GlobalContext } from '@/GlobalState';
import Image from 'next/image';
import './UserProfile.css';
import { RxAvatar } from 'react-icons/rx';

const UserProfile = () => {
    const { user, userinfo } = useContext(GlobalContext);
    console.log(user, userinfo);

    return (
        <div>
            <div className=' w-full flex flex-col items-center justify-center my-6'>
                {
                    user?.photoURL ?
                        < Image width={100} height={100} src={user?.photoURL} alt="download" border="0" className='h-32 w-32 rounded-full border-2  border-[#0EE6B8]' />
                    :
                    <RxAvatar  className='h-[100px] w-[100px]'></RxAvatar>
                    }
                <h3 className='font-bold primary text-xl'>{user?.displayName ? user?.displayName : null}</h3>
                <p> {userinfo?.batch ? userinfo?.batch : null} </p>
                <p> {userinfo?.collage ? userinfo?.collage : null} </p>

            </div>

            <div className='md:flex lg:flex items-center my-4  justify-center '>

                <div className='md:w-3/4 lg:w-3/4'>
                    <div className='md:flex lg:flex justify-between text-white gap-4'>
                        <div className='rounded-md primaryBg p-5  w-full'>
                            <p className='font-bold'>{userinfo?.rank ? userinfo?.rank : 0}</p>
                            <p className=' secondColor'>Rank</p>
                        </div>
                        <div className='rounded-md primaryBg p-5 w-full '>
                            <p className='font-bold'>{userinfo?.exam ? userinfo?.exam : 0}</p>
                            <p className=' secondColor'>Exams</p>
                        </div>
                        <div className='rounded-md primaryBg p-5 w-full'>
                            <p className='font-bold'>{userinfo?.mark ? userinfo?.mark : 0}</p>
                            <p className=' secondColor'>point</p>
                        </div>
                    </div>
                    <div className='md:flex lg:flex justify-between gap-3 mt-8'>
                        <div className=' rounded-md primaryBg h-52 p-3 w-full'>
                            <p className='font-bold'>Achievement</p>
                        </div>

                        <div className='rounded-md h-52 primaryBg p-3 w-full'>
                            <p className='font-bold'>Accuracy</p>


                            <div className='m-auto flex flex-col items-center'>
                                <img src='https://i.ibb.co/5Mm3ybc/removal-ai-03620765-b252-454f-be72-97967e1a567d-chart.png' alt="" width={100} height={100} />
                                <div>
                                    <button className='h-3 w-3 bg-green-500 rounded-full'></button>
                                    <small className='pe-3'>Correct</small>
                                    <button className='h-3 w-3 bg-orange-500  rounded-full'></button>
                                    <small className='pe-3'>Wrong</small>
                                    <button className='h-3 w-3 bg-yellow-500 rounded-full'></button>
                                    <small className=' secondColor'>Skipped</small>
                                </div>
                            </div>
                        </div>

                        {/* <PieChartComponent></PieChartComponent> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;