"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReactStars from "react-stars";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import CommonTitle from "../CommonTitle/CommonTitle";

import Container from "../Container/Container";
import { FeedbackGet } from "@/services/Feedback";
export default function Feedback() {
  const [Feedback, setFeedback] = useState([]);
  const Get = async () => {
    const result = await FeedbackGet();
    console.log("Feedback Result:", Feedback);
    setFeedback(result);
  };

  useEffect(() => {
    Get();
  }, [1000]);

  return (
    
      <div className=" w-full">
        <div className=" mt-8">
          <h1 className="  text-xl  md:text-3xl primary  font-medium my-2 text-center  ">
            {" "}
            Feedback from our Student{" "}
          </h1>

          <CommonTitle title={"TESTIMONIALS"}></CommonTitle>
        </div>

        <div className="   py-8">
          <Container>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper   md:px-10"
            >
              {Feedback?.map((item) => (
                <SwiperSlide
                  key={item?._id}
                  className=" secondBg shadow-xl px-2"
                >
                  <div className=" flex justify-center items-center flex-col gap-2">
                    <div>
                      <ReactStars
                        value={item?.rating}
                        count={5}
                        size={24}
                        color2={"#FACA51"}
                      />
                    </div>

                    <h1 className=" text-xl  max-w-[600px] text-center  mx-auto font-normal my-2">
                      {" "}
                      “{item?.comment?.slice(0, 100)}...{" "}
                    </h1>
                    <p className=" my-2 secondColor"> {item?.title} </p>
                    <div className=" bg-white h-[1px] w-[200px]"></div>
                    <div className=" flex items-center my-4  gap-4">
                      <Image
                        width={67}
                        height={64}
                        className=" w-16 h-16 rounded-full  border border-blue-400   object-fill "
                        src={
                          item?.photo
                            ? item?.photo
                            : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"
                        }
                        alt=""
                      />
                      <h1 className=" text-xl  font-normal  capitalize  primary">
                        {" "}
                        {item?.name}{" "}
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <SwiperSlide className=" secondBg  shadow-xl px-2">
                <div className=" flex justify-center items-center flex-col gap-2">
                  <div>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      color2={"#FACA51"}
                    />
                  </div>

                  <h1 className=" text-xl  max-w-[600px] text-center   mx-auto font-normal my-2">
                    {" "}
                    “Very cute dress and fun color. I am also very impressed by
                    the quality of the linen. Excited to wear this dress in the
                    summer!”{" "}
                  </h1>
                  <p className=" my-2 secondColor"> Best learning website</p>
                  <div className=" bg-white h-[1px] w-[200px]"></div>
                  <div className=" flex items-center my-4  gap-4">
                    <Image
                      width={67}
                      height={64}
                      className=" w-16 h-16 rounded-full  border border-blue-400   object-fill "
                      src="https://img.freepik.com/free-photo/portrait-beautiful-young-happy-woman-with-thumbs-up-sign-white-background_186202-5425.jpg?size=626&ext=jpg&ga=GA1.1.1266374889.1691075921&semt=ais"
                      alt=""
                    />
                    <h1 className=" text-xl  font-normal   primary">
                      {" "}
                      Archie Sunderland{" "}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" secondBg shadow-xl  px-2">
                <div className=" flex justify-center items-center flex-col gap-2">
                  <div>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      color2={"#FACA51"}
                    />
                  </div>

                  <h1 className=" text-xl  max-w-[600px] text-center  mx-auto font-normal my-2">
                    {" "}
                    “Very cute dress and fun color. I am also very impressed by
                    the quality of the linen. Excited to wear this dress in the
                    summer!”{" "}
                  </h1>
                  <p className=" my-2 secondColor"> Best learning website</p>
                  <div className=" bg-white h-[1px] w-[200px]"></div>
                  <div className=" flex items-center my-4  gap-4">
                    <Image
                      width={67}
                      height={64}
                      className=" w-16 h-16 rounded-full  border border-blue-400   object-fill "
                      src="https://img.freepik.com/premium-photo/pretty-businesswoman-smiling-camera_13339-78104.jpg?size=626&ext=jpg&ga=GA1.1.1266374889.1691075921&semt=ais"
                      alt=""
                    />
                    <h1 className=" text-xl  font-normal  primary">
                      {" "}
                      Timothy Winston{" "}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" secondBg shadow-xl px-2">
                <div className=" flex justify-center items-center flex-col gap-2">
                  <div>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      color2={"#FACA51"}
                    />
                  </div>

                  <h1 className=" text-xl  max-w-[600px] text-center  mx-auto font-normal my-2">
                    {" "}
                    “Very cute dress and fun color. I am also very impressed by
                    the quality of the linen. Excited to wear this dress in the
                    summer!”{" "}
                  </h1>
                  <p className=" my-2 secondColor"> Best learning website </p>
                  <div className=" bg-white h-[1px] w-[200px]"></div>
                  <div className=" flex items-center my-4  gap-4">
                    <Image
                      width={67}
                      height={64}
                      className=" w-16 h-16 rounded-full  border border-blue-400   object-fill "
                      src="https://img.freepik.com/free-photo/smart-looking-teacher_53876-23045.jpg?size=626&ext=jpg&ga=GA1.2.1266374889.1691075921&semt=ais"
                      alt=""
                    />
                    <h1 className=" text-xl  font-normal   primary">
                      {" "}
                      Jack Hoad
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" secondBg  shadow-xl px-2">
                <div className=" flex justify-center items-center flex-col gap-2">
                  <div>
                    <ReactStars
                      value={5}
                      count={5}
                      size={24}
                      color2={"#FACA51"}
                    />
                  </div>

                  <h1 className=" text-xl  max-w-[600px] text-center  mx-auto font-normal my-2">
                    {" "}
                    “Very cute dress and fun color. I am also very impressed by
                    the quality of the linen. Excited to wear this dress in the
                    summer!”{" "}
                  </h1>
                  <p className=" my-2 secondColor"> Best learning website</p>
                  <div className=" bg-white h-[1px] w-[200px]"></div>
                  <div className=" flex items-center my-4  gap-4">
                    <Image
                      width={67}
                      height={64}
                      className=" w-16 h-16 rounded-full  border border-blue-400   object-fill "
                      src="https://img.freepik.com/free-photo/portrait-beautiful-young-happy-woman-with-thumbs-up-sign-white-background_186202-5425.jpg?size=626&ext=jpg&ga=GA1.1.1266374889.1691075921&semt=ais"
                      alt=""
                    />
                    <h1 className=" text-xl  font-normal  primary ">
                      {" "}
                      Archie Sunderland{" "}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </div>
      </div>
    
  );
}
