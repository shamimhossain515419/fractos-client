import Link from 'next/link';
import React from 'react';

const NotFoundData = ({ title, href, paragraph }) => {
     return (
          <div className=' flex justify-center items-center min-h-[60vh]'>
               <div className=' text-center'>
                    <h1 className=' text-xl md:text-3xl  font-light mt-8'> {paragraph} </h1>
                    <div className=' mt-5 text-center '>
                         <Link href={href} className=' text-center  px-4 py-2 rounded-lg text-white  primaryBg text-base  md:text-3xl'> {title} </Link>
                    </div>
               </div>
          </div>
     );
};

export default NotFoundData;