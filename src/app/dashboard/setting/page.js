"use client"

import CommonImage from '@/Components/CommonImage/CommonImage';
import Notification from '@/Components/Notification/Notification';
import { GlobalContext } from '@/GlobalState';
import { UpdateUser } from '@/services/users';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { GrEdit } from 'react-icons/gr'
import { toast } from 'react-toastify';

const SettingPage = () => {

     const { user, updateUserProfile, setPageLoader } = useContext(GlobalContext);


     const imageUpdate = async (image) => {
          const photoupdate= {photo: image , email:user?.email}
          const data = await UpdateUser(photoupdate)
          console.log(data);
     }

     const handleImage = (e) => {
          const file = e.target.files[0];
          console.log(file);
          const Imagebb_URL = `https://api.imgbb.com/1/upload?key=22ed14c930e2dd03f17b9e05c5eba1e6`
          const formData = new FormData();
          formData.append('image', file);
          fetch(Imagebb_URL, {
               method: "POST",
               body: formData
          }).then(res => res.json()).then(data => {
               if (data?.data?.display_url) {
                    const photo = data?.data?.display_url;
                    const name = user?.displayName;
                    console.log(photo, name);
                    imageUpdate(photo)
                    updateUserProfile(name, photo).then((result) => {
                         console.log(result);
                         setPageLoader(true)
                    }).catch((error) => {
                         console.log(error);
                    });

               }
          }).catch(error => {
               toast.error("File Upload Not Working")
          });

     };




     const handleSubmit = async (e) => {
          e.preventDefault();

          const from = e.target;

          const name = from?.name?.value;
          const collage = from?.collage?.value;
          const batch = from?.batch?.value;
          const level = from?.level?.value;
          const about = from?.about?.value;
          const phone = from?.phone?.value;
          const newUser = { email: user?.email, name, phone, about, batch, collage, level }

          const result = await UpdateUser(newUser);
           toast.success(" user successfully update");
         
     }


     return (
          <div className=' px-3'>
               <div className=' my-2'>
                    <h1 className=' text-base md:text-xl font-normal'> Profile</h1>
                    <p className=' text-sm md:text-base font-normal'>  This information will be displayed publicly. </p>
               </div>


               <div>

                    <div className=' flex justify-center items-center gap-2'>
                         <div className=' relative'>

                              <div className=' relative'>
                                   {
                                        user?.photoURL ? <div className="image">
                                             <Image className=" w-[100px] h-[100px]  rounded-full" src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/9YBcnQB/profile-pic.png"} alt="" height={50} width={50} />
                                        </div> : <div className=' primaryBg rounded-full p-10 text-black  text-2xl font-bold uppercase'> {user?.email.slice(0, 2)} </div>
                                   }
                              </div>
                              <label className=' bg-[#3b3a3ad2]  text-white cursor-pointer absolute bottom-0 p-2 rounded-full left-16' htmlFor="image">
                                   <input onChange={handleImage} className=' hidden' type="file" name="" id="image" />
                                   <GrEdit className=' text-white' size={20}></GrEdit>

                              </label>


                         </div>


                    </div>
               </div>
               <form onSubmit={handleSubmit}>
                    <div className=' my-1'>
                         <label htmlFor="">Name</label>
                         <input name='name' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="text" placeholder='your name' />
                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">School and Collage</label>
                         <input name='collage' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="text" placeholder='your name' />
                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">Level</label>
                         <select name='level' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' >
                              <option value="SSC"> SSC</option>
                              <option value="HSC/admission"> HSC/admission</option>
                              <option value="BCS"> BSC</option>
                         </select>

                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">Batch</label>
                         <select name='batch' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' >
                              <option value="20-HSC"> 20-HSC</option>
                              <option value="21-HSC"> 21-HSC</option>
                              <option value="23-HSC"> 20-HSC</option>

                         </select>

                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">Phone</label>
                         <input name='phone' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="number" placeholder='your Phone number' />
                    </div>
                    <div className=' my-2'>
                         <label htmlFor="">About</label>
                         <textarea name='about' rows={5} className='  py-2  shadow bg-transparent  block w-full  px-2  rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' ></textarea>

                    </div>



                    <div className=' flex justify-center items-center py-2'>
                         <button type='submit' className=' primaryBg text-white px-4 py-2 rounded'> Save Change</button>
                    </div>
               </form>

               <div>

               </div>
               <Notification></Notification>

          </div>
     );
};

export default SettingPage;