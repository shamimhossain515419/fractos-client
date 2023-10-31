"use client"
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Img1 from './Images/Untitled1.png'
import Img2 from './Images/Untitled3.png'
import Banner from './Images/banner.png'
import Image from 'next/image';
import cdi from './Images/images (3).jpeg'
import cdi2 from './Images/images (4).jpeg'
import cdi3 from './Images/images (7).jpeg'
import Link from 'next/link';


const BannerSwiper = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');
  return (
    // bg-gradient-to-r from-sky-300 to-sky-300
    <div className='   my-16 text-white rounded-lg'>
      <div >
        <div className="md:flex  px-4 py-8 md:pt-20 md:pb-8 md:px-16 gap-3">

          <div className=" ">


            <div className='mt-1 px-3 md:pl-12'>
              <Image
                src={Banner}
                height={400}
                width={500}
                alt="Picture of the author" />
            </div>

          </div>
          <div className="md:w-8/12 h-10/12 md:mt-12 mt-8 md:ml-12 flex justify-center items-center flex-col">

            <div className='font-bold text-2xl md:text-4xl  py-5 text-indigo-500 '>


              <TypeAnimation
                sequence={[
                  1500,
                  () => {
                    setTypingStatus('Typing...');
                  },
                  'Join With Us & Prepare You For Exam !!!',
                  () => {
                    setTypingStatus('Done Typing');
                  },
                  1000,
                  () => {
                    setTypingStatus('Deleting...');
                  },
                  '',
                  () => {
                    setTypingStatus('Done Deleting');
                  },
                  500,
                  () => {
                    setTypingStatus('Typing...');
                  },
                ]}

                repeat={Infinity}
              />
            </div>
            <div className='flex my-4 mx-4'>
              <Image
                src={Img1}
                className='h-12 w-28'
                alt="Picture of the author"
              />
              <Image
                src={Img2}
                className='h-12 w-28 ml-4'
                alt="Picture of the author"
              />
            </div>
          </div>

        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4  pb-12 ml-12  py-14'>
        <div className="col ">
          <div className="card p-3 bg-white w-10/12 h-80  shadow-xl ">
            <figure className="pt-10">
              <Image src={cdi} alt="Shoes" className="rounded-xl h-32" />
            </figure>
            <div className="card-body items-center text-center mt-4">
              <p className='text-lg font-bold text-indigo-700'>Solve Any Question from Thousand of Questions.</p>
              <div className="mt-3">
                <Link href={'/dashboard/mock-exam'} className=" py-2 primaryBg text-white px-4 font-bold  mt-3 rounded-lg">Solve Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card w-10/12 h-80  bg-white shadow-xl ">
            <figure className="px-10 pt-10">
              <Image src={cdi3} alt="Shoes" className="rounded-xl h-32" />
            </figure>
            <div className="card-body items-center text-center mt-4">
              <p className='text-lg font-bold text-indigo-700'>Attend Live Mock test to Check Your Preparation.</p>
              <div className="mt-3">
                <Link href={'/dashboard/mock-exam'} className=" py-2 mt-9 primaryBg text-white px-4 font-bold   rounded-lg">Attend Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card w-10/12 h-80 bg-white  shadow-xl ">
            <figure className="px-10 pt-10">
              <Image src={cdi2} alt="Shoes" className="rounded-xl h-32" />
            </figure>
            <div className="card-body items-center text-center mt-4">

              <p className='text-lg font-bold text-indigo-700'>Read Blog Post And Enrich Your Knowledge.</p>
              <div className=" mt-3">
                <Link href={'/dashboard/mock-exam'} className=" py-2 mt-9 primaryBg text-white px-4 font-bold   rounded-lg">Read Now</Link>


              </div>
            </div>
          </div></div>
      </div>
    </div>
  );
};
export default BannerSwiper