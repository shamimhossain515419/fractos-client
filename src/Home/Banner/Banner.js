'use client'

import Image from 'next/image';
import React from 'react';
 import banner from '../../../public/bannerImage.png'
const Banner = () => {

  return (
    <div className='pt-[80px] pb-[80px]'>
      <div className='grid lg:grid-cols-12 gap-10 px-2 lg:px-10'>
        <div className=' lg:col-span-6 mx-auto'>
          <Image src={banner} height={600} width={500}></Image>
        </div>
        <div className=' lg:col-span-6'>
          <h1 className='text-2xl primary md:text-3xl font-extrabold mb-10 mt-10 mx-auto text-center'>
            Now Prepare For Your Exams With <span>Fractos</span>
          </h1>
          <h2 className='text-lg mb-5 text-center'>
            Say Good Bye To Test-Papers And Come To Fractos. Here You Can Give Live Exams, Topic And Subject Wise Exams, Review Your Exams Many More Thing.
          </h2>
          <div className='lg:flex text-center items-center justify-center gap-10'>
            <Image className='cursor-pointer my-2 lg:w-[200px] w-full h-[66px]' width={200} height={66} src={'/googlePlay.png'}></Image>
            <Image className='cursor-pointer my-2  lg:w-[200px] w-full h-[66px]' width={200} height={66} src={'/appleStore.png'}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;