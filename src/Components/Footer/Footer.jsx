import React from "react";

import Image from "next/image";
import logo from '../../../public/logo.png'
import { FaFacebook, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";
import Container from "../Container/Container";
import Link from "next/link";


const Footer = () => {
  return (
    <div  className="w-full  py-10 rounded    primaryBg  primaryBgColor  ">

      <Container>

        <div className="footer-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-2 mt-10">
          <div className="footer-item w-full ">
            <Image className=" w-[200px] " src={logo} alt="footerLogo"></Image>

            <h4 className="text-1xl font-bold  mt-2">
              Making the world a better place through constructing elegant
              hierarchies.
            </h4>

            <div className="footer-icon mt-3 flex flex-row space-x-4">


              <Link target="_blank" href={'https://www.facebook.com/'} className="icon-box cursor-pointer w-[40px] h-[40px] bg-blue-500  rounded relative">
                <FaFacebook className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaFacebook>
              </Link>


              <Link target="_blank" href={'https://www.twitter.com/'} className="icon-box w-[40px] h-[40px] bg-blue-500 rounded relative">
                <FaTwitter className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaTwitter>
              </Link>
              <Link target="_blank" href={'https://www.linkdedin.com/'} className="icon-box w-[40px] h-[40px] bg-blue-500 rounded relative">
                <FaLinkedinIn className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaLinkedinIn>
              </Link>
              <Link target="_blank" href={'https://www.pinterestP.com/'} className="icon-box w-[40px] h-[40px] bg-blue-500 rounded relative">
                <FaPinterestP className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaPinterestP>
              </Link>
            </div>
          </div>
          <div className="footer-item w-full">
            <div className="footer-title lg:text-left sm:text-center md:text-center">
              <h2 className="text-3xl font-bold  primary">Information</h2>

              <p className="mt-3 text-1xl font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
                About
              </p>
              <Link href={'contact'} className="text-1xl font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
                Contact us
              </Link>
              <Link href={'/courses'} className="text-1xl font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
                All courses
              </Link>

              <a href="#Pricing" className="text-1xl block font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
              Pricing
              </a>
            </div>
          </div>
          <div className="footer-item w-full">
            <div className="footer-title lg:text-left md:text-center sm:text-center">
              <h2 className="text-3xl font-bold primary ">Popular Courses</h2>

              <Link href={'/courses'} className="mt-3 text-1xl block font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
                All Courses
              </Link>
              <Link href={'/blogs'} className="mt-3 text-1xl block font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
                Blogs
              </Link>
             
             <a href="#Premium " className="text-1xl block font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
              Premium
              </a>
            </div>
          </div>
          <div className="footer-item w-full">
            <div className="footer-title lg:text-left md:text-center sm:text-center">
              <h2 className="text-3xl font-bold primary">  Contact</h2>

              <p className="mt-3 text-1xl font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
                <a href="https://github.com/Mostafiz181">01617650797</a>
              </p>
              <p className="text-1xl font-bold  mb-1 cursor-pointer hover:duration-300 hover:text-[#0EE6B8] hover:ms-2">
                <a href="">farctos@gmai.com</a>
              </p>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
