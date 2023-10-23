import React from "react";

import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import {  FaFacebook, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full  py-10 rounded">


      <div className="footer-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-2 mt-10">
        <div className="footer-item w-full ">
          <Image src={logo} width={50} height={50} alt="footerLogo"></Image>

          <h4 className="text-1xl font-bold textColor mt-2">
            Making the world a better place through constructing elegant
            hierarchies.
          </h4>

          <div className="footer-icon mt-3 flex flex-row space-x-4">

        
            <div className="icon-box w-[40px] h-[40px] bg-blue-500  rounded relative">
              <FaFacebook className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaFacebook>
            </div>
     

            <div className="icon-box w-[40px] h-[40px] bg-blue-500 rounded relative">
              <FaTwitter className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaTwitter>
            </div>
            <div className="icon-box w-[40px] h-[40px] bg-blue-500 rounded relative">
              <FaLinkedinIn className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaLinkedinIn>
            </div>
            <div className="icon-box w-[40px] h-[40px] bg-blue-500 rounded relative">
              <FaPinterestP className="absolute top-[10%] left-[10%] translate-x-2/4 translate-y-2/4 text-white"></FaPinterestP>
            </div>
          </div>
        </div>
        <div className="footer-item w-full">
          <div className="footer-title lg:text-left sm:text-center md:text-center">
            <h2 className="text-3xl font-bold textColor">Information</h2>

            <p className="mt-3 text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              About this project
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              Contact us
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              All courses
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              {" "}
              From the blog
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              Media Library
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              FAQ
            </p>
          </div>
        </div>
        <div className="footer-item w-full">
          <div className="footer-title lg:text-left md:text-center sm:text-center">
            <h2 className="text-3xl font-bold textColor">Popular Courses</h2>

            <p className="mt-3 text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              Pricing
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              Documentation
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              Guids
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              Api status
            </p>
          </div>
        </div>
        <div className="footer-item w-full">
          <div className="footer-title lg:text-left md:text-center sm:text-center">
            <h2 className="text-3xl font-bold textColor">  Contact</h2>

            <p className="mt-3 text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              <a href="https://github.com/Mostafiz181">Facebook</a> 
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              <a href="">Twitter</a>
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
             <a href="">Linkdin</a>
            </p>
            <p className="text-1xl font-bold textColor mb-1 cursor-pointer hover:duration-300 hover:text-red-500 hover:ms-2">
              <a href="">Pinterest</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;