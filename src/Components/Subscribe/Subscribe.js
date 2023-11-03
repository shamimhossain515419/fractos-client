import React from 'react';
import './index.css'
const Subscribe = () => {
     return (
          <div className='background text-white flex justify-center h-full w-full items-center'>
               <div className='  '>
                    <div>
                         <h1 className=' text-white text-xl md:text-3xl font-semibold text-center'>Subscribe to Stay Informed </h1>
                         <div className=' flex justify-center items-center gap-2 mt-6'>
                              <div>
                                   <input className=' w-full md:w-[350px]  py-2 px-3  text-xl  font-normal  hover:outline-[#27895C]  border border-[#27895C]' type="text" placeholder='example@gmail.com' name="" id="" />
                              </div>
                              <button className=' text-2xl px-3 py-2 rounded primaryBg '> Subscribe</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Subscribe;