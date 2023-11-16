"use client"
import Student from '@/Components/Student/Student';
import TitleBar from '@/Components/TitleBar';
import React, { useState } from 'react';

const page = () => {

     const [search, setSearch] = useState("")

     const handleChange = (e) => {
          e.preventDefault();
          setSearch(e.target.name.value)
     }

     return (
          <div>

               <TitleBar paragraph={"All user details of your project"} aline={"text-center"} title={"All  Student"}></TitleBar>

               <div className="flex items-center justify-center w-full py-5  ">
                    <form onSubmit={handleChange} className=' flex items-center gap-2' method="GET">
                         <div className="relative text-white primaryBg focus-within:text-gray-400">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                   <button className="p-1 focus:outline-none focus:shadow-outline">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                   </button>
                              </span>
                              <input type="search" name="name" className="py-2 text-sm text-white  secondBg rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off" />
                         </div>
                         <button className=' buttonColor text-black  rounded px-2 py-1  ' type='submit'>submit</button>
                    </form>

               </div>

               <Student search={search}></Student>
          </div>
     );
};

export default page;        