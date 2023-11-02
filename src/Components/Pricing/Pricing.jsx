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
            <div className='flex gap-y-5 gap-x-20 justify-center items-start w-full mt-10'>
                {/* basic price card */}
                <div className='bg-slate-100 rounded-lg p-5 w-full md:min-w-[400px] shadow-lg border border-[#0c009455]'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-2xl md:text-4xl text-[#0C0094] font-bold'>Basic</h3>
                        <p className='font-semibold text-xl'>Free</p>
                    </div>
                    <ul className='space-y-5'>
                        <li className='flex items-center gap-2'>
                            <Image src={'/warning.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Mock Exam (8 Times)</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Exam Review</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Live Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Feedback & Support</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Read & Write Blogs</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Performance Analysis</span>
                        </li>
                    </ul>
                    <button className='w-full rounded-lg border-2 border-blue-600  hover:bg-[#4A3AFF] hover:text-white text-xl mt-10 transition-all font-bold py-5'>Get Started</button>
                </div>
                {/* premium price card */}
                <div className='bg-slate-100 rounded-lg p-5 w-full md:min-w-[400px] shadow-lg border border-[#0c009455]'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-2xl md:text-4xl text-[#0C0094] font-bold'>Premium</h3>
                        <p className='font-semibold text-xl'>$25</p>
                    </div>
                    <ul className='space-y-5'>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Mock Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Exam Review</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Live Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Feedback & Support</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Read & Write Blogs</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}></Image>
                            <span className='text-xl font-semibold'>Performance Analysis</span>
                        </li>
                    </ul>
                    <button className='w-full rounded-lg bg-[#4A3AFF] text-white text-xl mt-10 transition-all hover:bg-[#4a3affdf] font-bold py-5'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;