"use client";
import Image from "next/image";
import React from "react";
import CommonTitle from "../CommonTitle/CommonTitle";
import Container from "../Container/Container";

const AboutUs = () => {
  return (
    <div className="pt-12 pb-12">
      <Container>
        <CommonTitle title={"About Fractos"}> </CommonTitle>

        <div className=" p-4 grid lg:grid-cols-2 grid-cols-1 items-center md:grid-cols-2 gap-2">
          <div className=" px-3">
            <Image className=" w-full h-[500px]" width={500} height={350} src="https://i.ibb.co/4YPBVqB/aboutpage.webp" alt="iamge"></Image>

          </div>

          <div className="">
            <p className="lg:mb-6 md:mb-3 mb-2 text-center text-2xl primary font-semibold">
              Welcome to Fractos, the platform dedicated to empowering students
              and teachers in their educational journey.
            </p>

            <p className="lg:mb-20 md:mb-3 mb-2   text-lg  text-center">
              Students can take mock exams in various subjects like Admission,
              HSC, SSC, Math, English, General Knowledge, Science, and more.
              Teachers can conduct live classes, creating and managing classes in
              different subjects.
            </p>
          </div>
        </div>
        <div className="Team pt-12">
          <CommonTitle title={"Our Team"}> </CommonTitle>
          <div className="py-10 grid lg:grid-cols-3 grid-cols-1 xl:px-32 lg:px-20 md:grid-cols-2 px-10 gap-12" >

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/shamiul.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg w-full"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5   ">Shamiul Haque</p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="https://i.ibb.co/xLYyfvG/Progra-Hero-3200.jpg"
                alt="LOgo"
                className="h-96   object-fill rounded-t-lg w-full"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Md Shamim Hossain</p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/mostafiz.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg w-full"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Mostafizur Rahman</p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/ritupriya.JPG"
                alt="LOgo"
                className="h-96 rounded-t-lg w-full"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Ritupriya Chowdhury </p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/abdur.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg w-full"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Abdur Rahman </p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/ratri khan.jpg"
                alt="LOgo"
                className="h-96   object-fill rounded-t-lg w-full"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Ratri Khan</p>
            </div>



          </div>
        </div>
      </Container>
    </div>


  );
};

export default AboutUs;