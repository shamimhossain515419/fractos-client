
'use client'
import { AdmissionQuestionPost, admissionPost } from '@/services/admission';

import React from 'react';

const Page = () => {



  const higherMathData = {

    CollegeName: "Dhaka University",
    image: "https://i.ibb.co/V9JskBD/dhaka-Collage.jpg",
    exam: "20",
    date: "15 ongoing",
    path: "DUET",
    description: "Dhaka University এ সবচেয়ে ভালো প্রস্তুতির জন্য অনুশীলন এর কোনো বিকল্প নাই, ঢাকা বিশ্ববিদ্যালয়ের ব্যবসায় বিভাগের ভর্তি পরিক্ষায়  DUET ক  বিষয়সমূহের MCQ অনুশীলন প্রয়োজন,।",
    department: "science"
  }







  const hanleCloet = async () => {
    const result = await admissionPost(higherMathData)
    console.log(result);
  }



  return (
    <div className=' p-10 '>

      <button onClick={() => hanleCloet()} className=' primary text-4xl'> click</button>


    </div>
  );
};

export default Page;