
'use client'

import { GetCourses, PostCourses } from '@/services/courses';
import React, { useEffect } from 'react';

const Page = () => {


  useEffect(() => {
    async function Gate() {
      const result = await GetCourses();

      console.log(result);
    }

    Gate()
  })

  const higherMathData = {
    subject: "Dhaka University",
    image: "https://i.ibb.co/V9JskBD/dhaka-Collage.jpg",
    email: "adfdf@gmail.com",
    status: false,
    price: 44254524,
    limit: 2342,
    time: " 6 weel",
    description: "Dhaka University এ সবচেয়ে ভালো প্রস্তুতির জন্য অনুশীলন এর কোনো বিকল্প নাই, ঢাকা বিশ্ববিদ্যালয়ের ব্যবসায় বিভাগের ভর্তি পরিক্ষায়  DUET ক  বিষয়সমূহের MCQ অনুশীলন প্রয়োজন,।",
    department: "science",
    user: "654bb03489a159b43ab2adc1",
    studentIdstudentIdstudentId: "654b0dce5b79dbc6b388b036",
  }


  const hanleCloet = async () => {
    console.log(higherMathData);
    const result = await PostCourses(higherMathData)
    console.log(result);
  }



  return (
    <div className=' p-10 '>
      <button onClick={() => hanleCloet()} className=' primary text-4xl'> click</button>


    </div>
  );
};

export default Page;