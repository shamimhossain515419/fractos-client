import React from 'react';
import "./Pricing.css"
import CommonTitle from '../CommonTitle/CommonTitle';
import Image from 'next/image';


const Pricing = () => {
    return (
        <div className='py-[130px]'>
            <CommonTitle title={"PLANS"}></CommonTitle>
            {/* pricing section */}
            <div className='flex gap-y-5 gap-x-20 justify-center items-start w-full mt-10'>
                {/* basic price card */}
                <div className=' secondBg rounded-lg p-5 w-full md:min-w-[400px] shadow-lg border border-[#0EE6B8]'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-2xl md:text-4xl  primary  font-bold'>Basic</h3>
                        <p className='font-semibold text-xl'>Free</p>
                    </div>
                    <ul className='space-y-5'>
                        <li className='flex items-center gap-2'>
                            <Image src={'/warning.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Mock Exam (8 Times)</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}alt='image'></Image>
                            <span className='text-xl font-semibold'>Exam Review</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20}alt='image'></Image>
                            <span className='text-xl font-semibold'>Live Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20}alt='image'></Image>
                            <span className='text-xl font-semibold'>Feedback & Support</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20}alt='image'></Image>
                            <span className='text-xl font-semibold'>Read & Write Blogs</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/wrong.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Performance Analysis</span>
                        </li>
                    </ul>
                    <button className='w-full rounded-lg border-2 border-[#0EE6B8]  hover:bg-[#0EE6B8] hover:text-black capitalize text-xl mt-10 transition-all font-bold py-5'>Get Started</button>
                </div>
                {/* premium price card */}
                <div className='secondBg rounded-lg p-5 w-full md:min-w-[400px] shadow-lg border border-[#0EE6B8]'>
                    <div className='flex items-center justify-between mb-5'>
                        <h3 className='text-2xl md:text-4xl  primary  font-bold'>Premium</h3>
                        <p className='font-semibold text-xl'>$25</p>
                    </div>
                    <ul className='space-y-5'>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Mock Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Exam Review</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Live Exam</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Feedback & Support</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Read & Write Blogs</span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <Image src={'/correct.png'} height={20} width={20} alt='image'></Image>
                            <span className='text-xl font-semibold'>Performance Analysis</span>
                        </li>
                    </ul>
                    <button className='w-full rounded-lg bg-[#0EE6B8] text-black text-xl mt-10 transition-all hover:bg-[#0EE6B8]   font-bold py-5'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;