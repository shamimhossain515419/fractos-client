'use client'
import Notification from '@/Components/Notification/Notification';
import { GlobalContext } from '@/GlobalState';
import { UpdateUser } from '@/services/users';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { GrEdit } from 'react-icons/gr'
import { toast } from 'react-toastify';
import app from '../../../../firebase/firebase.config';

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { firebaseStroageURL } from '@/utils/ClassName';
import { RxAvatar } from 'react-icons/rx';
const storage = getStorage(app, firebaseStroageURL);

const createUniqueFileName = (getFile) => {
     const timeStamp = Date.now();
     const randomStringValue = Math.random().toString(36).substring(2, 12);

     return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};

async function helperForUPloadingImageToFirebase(file) {
     const getFileName = createUniqueFileName(file);
     const storageReference = ref(storage, `fractos/${getFileName}`);
     const uploadImage = uploadBytesResumable(storageReference, file);

     return new Promise((resolve, reject) => {
          uploadImage.on(
               "state_changed",
               (snapshot) => { },
               (error) => {
                    console.log(error);
                    reject(error);
               },
               () => {
                    getDownloadURL(uploadImage.snapshot.ref)
                         .then((downloadUrl) => resolve(downloadUrl))
                         .catch((error) => reject(error));
               }
          );
     });
}


const SettingPage = () => {

     const { user, userinfo, updateUserProfile, setPageLoader } = useContext(GlobalContext);
     console.log(userinfo)

     const imageUpdate = async (image) => {
          const photoupdate = { photo: image, email: user?.email }
          const data = await UpdateUser(photoupdate);
          console.log(data);

     }



     const handleImage = async (event) => {
          const extractImageUrl = await helperForUPloadingImageToFirebase(
               event.target.files[0]
          );

          if (extractImageUrl) {
               imageUpdate(extractImageUrl)
               const name = user?.displayName;
               updateUserProfile(name, extractImageUrl).then((result) => {
                    console.log(result);

                    if (result) {
                         setPageLoader(true)
                    }

               }).catch((error) => {

               });
          }



     }

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
               <div className='mb-3'>
                    <h1 className=' text-base md:text-2xl font-normal  primary'> Profile</h1>
               </div>

               <div>
                    <div className=' flex justify-center items-center gap-2'>
                         <div className=' relative'>

                              <div className=' relative'>
                                   {
                                        user?.photoURL ?
                                             <div className="image">
                                                  <Image className=" w-[100px] h-[100px]  rounded-full" src={user?.photoURL} alt="" height={100} width={100} />
                                             </div> :
                                             <RxAvatar className='w-[100px] h-[100px] rounded-full'></RxAvatar>
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
               <div className=' my-3 py-2'>
                         <label className=' secondColor' htmlFor="">Name</label>
                         <input name='name' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' type="text" placeholder='Your Name' />
                    </div>
                    <div className=' my-3 py-2'>
                         <label className=' secondColor' htmlFor="">School/College</label>
                         <input name='collage' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' type="text" placeholder='Your School/College Name' />
                    </div>
                    <div className=' my-3 py-2'>
                         <label className=' secondColor' htmlFor="">Level</label>
                         <select name='level' className='  shadow bg-transparent primaryBg  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' >
                              <option value="SSC"> SSC</option>
                              <option value="HSC/admission"> HSC/admission</option>
                              <option value="BCS"> BSC</option>
                         </select>

                    </div>
                    <div className=' my-3 py-2'>
                         <label className=' secondColor' htmlFor="">Batch</label>
                         <select name='batch' className='  shadow bg-transparent primaryBg  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' >
                              <option value="20-HSC"> 20-HSC</option>
                              <option value="21-HSC"> 21-HSC</option>
                              <option value="23-HSC"> 20-HSC</option>

                         </select>

                    </div>
                    <div className=' my-3 py-2'>
                         <label className=' secondColor' htmlFor="">Phone</label>
                         <input name='phone' className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' type="number" placeholder='your Phone number' />
                    </div>
                    <div className=' my-3'>
                         <label className=' secondColor' htmlFor="">About</label>
                         <textarea name='about' rows={5} className='  py-2  shadow bg-transparent  block w-full  px-2  rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' ></textarea>

                    </div>



                    <div className=' flex justify-center items-center py-2'>
                         <button type='submit' className='  buttonColor text-black text-xl font-medium px-4 py-2 rounded'> Save Change</button>
                    </div>
               </form>

               <div>

               </div>
               <Notification></Notification>

          </div>
     );
};

export default SettingPage;