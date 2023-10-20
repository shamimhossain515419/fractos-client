'use client'

import { useRef } from "react";
import emailjs from '@emailjs/browser';

import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Notification from "../Notification/Notification";
import  {toast} from "react-toastify";
import Image from "next/image";
import Link from "next/link";

import image from '../../../public/2912020.webp'
const Contact = () => {
     const form = useRef();
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
                         <p className="text-color mb-3 text-lx md:text-xl xl:text-3xl font-semibold "> Contact</p>
                         <h1 className=" text-xl  uppercase   "> Contact With  Compony </h1>
                    </div>
               </div>




               <div className="  boxshadow  rounded-lg  mx-auto  px-6 py-3">

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
                                             <input required className="mt-2 w-full  hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] p-2 text-lg font-semibold " type="text" placeholder=" Your name " name="name" id="" />
                                        </div>
                                        <div className=" w-full my-2">
                                             <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Email:</label>
                                             <input required className="p-2    mt-2 w-full   hover:outline-1   focus:outline rounded-lg focus:outline-[#582ad8] " type="email" placeholder=" Your Email " name="email" id="email" />
                                        </div>
                                        <div className=" w-full my-2">
                                             <label className="  mt-4  text-xl font-semibold " htmlFor="Email" > Message:</label>
                                             <textarea required className="p-2    mt-2 w-full   hover:outline-1   focus:outline focus:outline-[#582ad8] " name="message" rows={8} ></textarea>
                                        </div>
                                        <div className=" w-full my-2">
                                             <button className="  hover:bg-[#27895C]  boxshadow outline-none border-none text-xl font-medium py-2 rounded-md text-center w-full " type="submit" >Send massage</button>
                                        </div>
                                   </form>
                              </div> </div>
                    </div>

               </div>



               <div className=" relative overflow-hidden w-full ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81925.7998703855!2d89.35380654982961!3d24.841878118908017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54968d3b5cdd%3A0xd5c89978703585d6!2sBogura%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1689577655751!5m2!1sen!2sbd" className=" w-screen md:p-10" height="450" allowfullscreen="" loading="lazy" ></iframe>



               </div>
               <Notification></Notification>
          </div>


     );
};

export default Contact;