'use client'

import { useRef } from "react";
import emailjs from '@emailjs/browser';

import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Notification from "../Notification/Notification";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

import image from '../../../public/banner.webp'
import { usePathname } from "next/navigation";
import CommonTitle from "../CommonTitle/CommonTitle";
const ContactSection = () => {
     const form = useRef();

     const pathName = usePathname();

     const sendEmail = (e) => {
          e.preventDefault();
          const from = e.target;
          emailjs.sendForm('service_bvjenph', 'template_sobq5nx', form.current, 'E3IxF18fQaZgMT0_Z')
               .then((result) => {
                    if (result.text) {
                         toast.success("massage successfully send")
                         from.reset();
                    }

               }, (error) => {
                    toast(`${error.message}`)
               });
     };


     return (
          <div className=" relative py-10">
               <div>
                    <div className=" my-8  text-center">

                         <CommonTitle title={"Contact"}></CommonTitle>

                         <h1 className=" text-xl  uppercase   "> Contact With  Compony </h1>
                    </div>
               </div>




               <div className="    rounded-lg  mx-auto  px-6 py-3">

                    <div className="  md:grid md:grid-cols-2 md:gap-20">
                         <div className="   p-1 md:p-4 ">

                              <div className="">
                                   <Image className=" object-fill  max-h-[400px]" src={image} alt=""></Image>
                              </div>

                              <h1 className=" text-lg  md:text-xl  font-semibold"> Fractos Compony </h1>
                              <h3 className=" text-lg font-semibold my-2 "> Dhaka Bangladesh: 1100</h3>
                              <p className=" mt-4 text-lg ">Let the journey of organizing your own learning begin</p>
                              <h1 className=" text-base font-semibold">Phone:  <span className=" text-lg">+88 01617650797 </span> (whatsApp) </h1>
                              <h1 className=" text-base font-semibold">Email:  <span className=" text-lg"> fractors@gamil.com </span></h1>
                              <div className="buttonBox  m-2  boxshadow p-2 inline-block">
                                   <div>  <Link href={'https://github.com/'} target='_blank'><FaGithub className=' text-2xl '></FaGithub></Link></div>
                              </div>
                              <div className="buttonBox  m-2  boxshadow p-2 inline-block">
                                   <Link href={'https://www.facebook.com/'} target='_blank'><FaFacebook className=' text-2xl  '></FaFacebook></Link>
                              </div>
                              <div className="buttonBox  m-2  boxshadow p-2 inline-block">
                                   <Link href={'https://www.linkedin.com'} target='_blank'><FaLinkedinIn className=' text-2xl  '></FaLinkedinIn></Link>
                              </div>
                         </div>
                         <div>
                              <div className=" mt-10  md:max-w-[1000px] mx-auto">

                                   <form ref={form} onSubmit={sendEmail}>
                                        <div className=" w-full my-2">
                                             <label htmlFor="Name" className=" text-xl font-semibold  mt-3" > Name:</label>
                                             <input required className="mt-2 bg-white w-full  hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" Your name " name="name" id="" />
                                        </div>
                                        <div className=" w-full my-2">
                                             <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Email:</label>
                                             <input required className="p-2   bg-white    mt-2 w-full   hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] " type="email" placeholder=" Your Email " name="email" id="email" />
                                        </div>
                                        <div className=" w-full my-2">
                                             <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Message:</label>
                                             <textarea required className="p-2   bg-white    mt-2 w-full   hover:outline-1   focus:outline focus:outline-[#582ad8] " name="message" rows={8} ></textarea>
                                        </div>
                                        <div className=" w-full my-2">
                                             <button className="  hover:bg-[#27895C]  boxshadow outline-none border-none text-xl font-medium py-2 rounded-md text-center w-full " type="submit" >Send massage</button>
                                        </div>
                                   </form>
                              </div> </div>
                    </div>

               </div>




               <Notification></Notification>
          </div>


     );
};

export default ContactSection;