import React from 'react';
import "./Pricing.css"
import { FaCheckCircle } from 'react-icons/fa';
import CommonTitle from '../CommonTitle/CommonTitle';
import Image from 'next/image';


const Pricing = () => {
    return (
        <div className='py-[130px]'>
            <CommonTitle title={"PLANS"}></CommonTitle>
            {/* pricing section */}
            <div className='flex gap-y-5 gap-x-20 justify-center items-start w-full'>
                {/* basic price card */}
                <div className='bg-white rounded-lg p-5'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-xl'>Basic</h3>
                        <p>Free</p>
                    </div>
                    <ul className='space-y-5'>
                    <li className='flex items-center gap-2'>
                            <Image src={'/warning.png'} height={20} width={20}></Image>
                            <span>Mock Exam (8 Times)</span>
                        </li>
                    <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span>Exam Review</span>
                        </li>
                    <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20}></Image>
                            <span>Live Exam</span>
                        </li>
                    <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20}></Image>
                            <span>Feedback & Support</span>
                        </li>
                    </ul>
                    <button className='w-full rounded-lg bg-[#4A3AFF] text-white text-xl mt-5 py-2'>Get Started</button>
                </div>
                {/* premium price card */}
                <div className='bg-white rounded-lg p-5'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-xl'>Premium</h3>
                        <p>$25</p>
                    </div>
                    <ul className='space-y-5'>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span>Mock Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span>Exam Review</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span>Live Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span>Feedback & Support</span>
                        </li>
                    </ul>
                    <button className='w-full rounded-lg bg-[#4A3AFF] text-white text-xl mt-5 py-2'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;