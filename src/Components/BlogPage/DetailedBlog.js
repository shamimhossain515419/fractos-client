import Image from 'next/image';
import React from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import Link from 'next/link';


const DetailedBlog = ({ id,authorImg, detail, category, timeRequired, date, title, thumbnail, authorName }) => {
    return (
        <div className='w-full p-2 md:w-8/12 mx-auto lg:w-7/12'>
            <Link href={'/blogs'} className='flex items-center text-xl gap-2 mt-5 mb-3 md:mt-8 lg:mt-8 text-[#0EE6B8] hover:text-[#0ee6b7d3]'>
                <BsArrowLeftSquareFill />
                <span>Back</span>
            </Link>
            <h1 className={`mb-5 text-2xl lg:text-3xl font-semibold leading-[1.2] lg:leading-[1.4] text-[#E8EAED]`}>{title}</h1>
            <Image src={thumbnail} alt='img' width={1000} height={0} className='max-h-[463.5px] mx-auto rounded-md mb-2 w-full'></Image>
            {/* Author Information */}
            <div className='flex items-center gap-2 mb-10'>
                <Image src={authorImg} width={50} height={50} className='rounded-full min-h-[50px] border border-[#0EE6B8]'></Image>
                <p className='flex flex-col text-[#E8EAED]'>
                    <span>{authorName}</span>
                    <span>{date}</span>
                </p>
            </div>

            {/* FULL BLOG */}
            <p className='text-[#E8EAED] mb-[80px]'>
                {detail}
            </p>
        </div>
    );
};

export default DetailedBlog;