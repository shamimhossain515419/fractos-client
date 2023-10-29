"use client"
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import Img1 from './Images/Untitled1.png'
import Img2 from './Images/Untitled3.png'
import Bn from './Images/banner2.jpg'
import Bn2 from './Images/Banner3.jpg'
import Bn3 from './Images/banner4.jpg'
import Banner from './Images/banner.png'
import Image from 'next/image';
import cdi from './Images/images (3).jpeg'
import cdi2 from './Images/images (4).jpeg'
import cdi3 from './Images/images (7).jpeg'


const BannerSwiper = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');
  return (
    // bg-gradient-to-r from-sky-300 to-sky-300
    <div className='   my-16 text-white rounded-lg'>
      <div >
        <div className="md:flex flex px-4 py-8 md:pt-20 md:pb-8 md:px-16 gap-3">

          <div className=" ">
           
          
            <div className='mt-1 px-3 md:pl-12'>
              <Image
                src={Banner}
                height={400}
                width={500}
                alt="Picture of the author" />
            </div>

          </div>
          <div className="md:w-8/12 h-10/12 md:mt-12 mt-8 md:ml-12">

            <div className='font-bold text-3xl md:text-5xl h-28 md:h-48 text-indigo-500 '>


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

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-8 pb-20'>
        <div className="col">
          <div className="card w-10/12 h-80 bg-base-100 shadow-xl hover:border-2 border-indigo-700">
            <figure className="px-10 pt-10">
              <Image src={cdi} alt="Shoes" className="rounded-xl h-32" />
            </figure>
            <div className="card-body items-center text-center">
              
              <p className='text-lg font-bold text-indigo-700'>Solve Any Question from Thousand of Questions.</p>
              <div className="card-actions">
                <p className=" font-bold text-blue-700 hover:text-indigo-700 hover:border-2 border-indigo-500 px-4 rounded-lg">Solve Now</p>
              </div> 
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card w-10/12 h-80 bg-base-100 shadow-xl hover:border-2 border-indigo-700">
            <figure className="px-10 pt-10">
            <Image src={cdi3} alt="Shoes" className="rounded-xl h-32" />
            </figure>
            <div className="card-body items-center text-center">
              
              <p className='text-lg font-bold text-indigo-700'>Attend Live Mock test to Check Your Preparation.</p>
              <div className="card-actions">
              <p className="font-bold text-blue-700 hover:text-indigo-700 hover:border-2 border-indigo-500 px-4  rounded-lg">Attend Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card w-10/12 h-80 bg-base-100 shadow-xl hover:border-2 border-indigo-700">
          <figure className="px-10 pt-10">
          <Image src={cdi2} alt="Shoes" className="rounded-xl h-32"  />
          </figure>
          <div className="card-body items-center text-center">
           
            <p  className='text-lg font-bold text-indigo-700'>Read Blog Post And Enrich Your Knowledge.</p>
            <div className="card-actions">
            <p className=" font-bold text-blue-700 hover:text-indigo-700 hover:border-2 border-indigo-500 px-4 rounded-lg">Read Now</p>
            </div>
          </div>
        </div></div>
      </div>
    </div>
  );
};
export default BannerSwiper
