"use client";
import Image from "next/image";
import React from "react";
import CommonTitle from "../CommonTitle/CommonTitle";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
      <div className="pt-12 pb-12">
        <CommonTitle title={"About Fractos"}> </CommonTitle>

        <div className="container mx-auto p-4 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-2">
          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 3 }}
          >
            <div className="flex">
              <Image
                width={200}
                height={200}
                src="/banner-img.jpg"
                alt="LOgo"
                className=" rounded-full"
              />
              <Image
                width={200}
                height={200}
                src="/live-exam-img.jpg"
                alt="LOgo"
                className="absolute left-40 top-32 rounded-full"
              />
              <Image
                width={200}
                height={200}
                src="/analysis-img.jpg"
                alt="LOgo"
                className="absolute left-80 rounded-full"
              />
            </div>
          </motion.div>

          <div className="lg:pt-10 md:pt-2 pt-10">
            <p className="lg:mb-6 md:mb-3 mb-2 text-center text-xl font-semibold">
              Welcome to Fractos, the platform dedicated to empowering students
              and teachers in their educational journey.
            </p>

            <p className="lg:mb-20 md:mb-3 mb-2 text-center">
              Students can take mock exams in various subjects like Admission,
              HSC, SSC, Math, English, General Knowledge, Science, and more.
              Teachers can conduct live classes, creating and managing classes in
              different subjects.
            </p>
          </div>
        </div>
        <div className="Team pt-12">
          <CommonTitle title={"Our Team"}> </CommonTitle>
          <div className="py-10 grid lg:grid-cols-3 grid-cols-1 lg:px-36 px-24 gap-12" >

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/shamiul.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Shamiul Haque</p>
            </div>

            <div className="rounded-lg w-full bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/shamim.png"
                alt="LOgo"
                className="h-96 rounded-t-lg"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Md Shamim Hossain</p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/mostafiz.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Mostafizur Rahman</p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/banner.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Ritupriya Chowdhury </p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/abdur.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Abdur Rahman </p>
            </div>

            <div className="rounded-lg bg-gray-200">
              <Image
                width={300}
                height={500}
                src="/ratri.jpg"
                alt="LOgo"
                className="h-96 rounded-t-lg"
              />
              <p className="text-gray-700 text-center text-xl font-semibold mr-2 py-5">Ratri Khan</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUs;