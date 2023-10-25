import React from 'react';

const SettingPage = () => {
     return (
          <div className=' px-3'>
               <div className=' my-2'>
                    <h1 className=' text-base md:text-xl font-normal'> Profile</h1>
                    <p className=' text-sm md:text-base font-normal'>  This information will be displayed publicly. </p>
               </div>

               <form>
                    <div className=' my-1'>
                         <label htmlFor="">Name</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="text" placeholder='your name' />
                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">School and Collage</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="text" placeholder='your name' />
                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">Level</label>
                         <select className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' >
                              <option value="SSC"> SSC</option>
                              <option value="HSC/admission"> HSC/admission</option>
                              <option value="BCS"> BSC</option>
                         </select>

                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">Batch</label>
                         <select className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' >
                              <option value="20-HSC"> 20-HSC</option>
                              <option value="21-HSC"> 21-HSC</option>
                              <option value="23-HSC"> 20-HSC</option>

                         </select>

                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">Phone</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="number" placeholder='your Phone number' />
                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">About</label>
                         <textarea rows={5} className='  py-2  shadow bg-transparent  block w-full  px-2  rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' ></textarea>

                    </div>

                    <div className=' flex justify-center items-center py-2'>
                         <button className=' primaryBg text-white px-4 py-2 rounded'> Save Change</button>
                    </div>
               </form>

               <div>

               </div>

          </div>
     );
};

export default SettingPage;