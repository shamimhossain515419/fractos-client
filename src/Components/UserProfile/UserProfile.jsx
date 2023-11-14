'use client'
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@/GlobalState';
import Image from 'next/image';
import './UserProfile.css';
import { RxAvatar } from 'react-icons/rx';
import PieChartComponent from '../ChartCurcal';

const UserProfile = () => {
    const { user, userinfo } = useContext(GlobalContext);
    console.log(user, userinfo);
    const [examReviews, setExamReviews] = useState([])

    const GetExamData = async (email) => {
        const data = await GetExam_reviews(email);
        console.log(data);
        setExamReviews(data)
    }


    useEffect(() => {
        if (user) {
            GetExamData(user?.email)
        }

    }, [user])
    console.log(examReviews);
    return (
        <div>
            <div className=' w-full flex flex-col items-center justify-center my-6'>
                {
                    user?.photoURL ?
                        < Image width={100} height={100} src={user?.photoURL} alt="download" border="0" className='h-32 w-32 rounded-full border-2  border-[#0EE6B8]' />
                        :
                        <RxAvatar className='h-[100px] w-[100px]'></RxAvatar>
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
                    <div className=' grid md:grid-cols-2   gap-3 mt-8'>
                        <div className=' primaryBg    min-h-[200px]'>
                            <p className=' p-4  text-lg font-bold'>Achievement</p>
                        </div>

                        <div className='rounded-md h-80 flex  justify-center items-center  relative primaryBg p-3 w-full'>


                            <div className=' absolute  top-0'>
                                <PieChartComponent></PieChartComponent>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;