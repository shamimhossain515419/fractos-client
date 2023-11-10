
'use client'

import { BlogPost } from '@/services/blogs';
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
   thumbnail: "https://poralekha.info/wp-content/uploads/2022/04/ezgif.com-gif-maker-54-1536x865.webp",
    title: "There May Have Been a Dark Big BangHigher Studies After HSC? Know the Top 10 Tips and Tricks",
    date: "April 23, 2023",
    timeRequired: 2,
    view: "0",
    category: "Career Guideline",
    authorName: "poralekha.info",
    detail: "Are you confused about what to do for your higher studies after HSC? Maybe you are confused about what to do next, which stream you may follow next. Should you switch streams or keep going in the same direction? What course or degree will help you to get your dream job. If I’m being honest, these are common confusions among the students and you are not the only one.<br/><br/>See, in this post-HSC education stage, which is kind of the worst and most crucial time of every students’ life, here every single second matters. You may hear a lot of shouts out for medical and engineering universities, and not much for other sectors.<br/> <br/> This doesn’t mean other sectors are not good and only medical-engineering universities are good. In Bangladesh, most parents have a stereotype thinking that their child must pursue a study stream in between these two. And that’s the main reason why medical and engineering got this hype in the student society."
  }


  const hanleCloet = async () => {
    console.log(higherMathData);
    const result = await BlogPost(higherMathData)
    console.log(result);
  }



  return (
    <div className=' p-10 '>
      <button onClick={() => hanleCloet()} className=' primary text-4xl'> click</button>


    </div>
  );
};

export default Page;