
'use client'
import { QuestionPost } from '@/services/exam';
import React from 'react';

const Page = () => {



     const data ={
          exam_name: " english ",
          questions: [
            {
              "question": "The courier ……… three days ago, but why haven’t you received it yet?",
              "answer_a": "has been sent",
              "answer_b": "has sent",
              "answer_c": "was sent",
              "answer_d": "sent",
              "answer_right": "was sent"
            },
            {
              "question": "One who doesn’t make mistakes is called:",
              "answer_a": "Infallible",
              "answer_b": "Blasphemy",
              "answer_c": " Pantry",
              "answer_d": "Lapidist",
              "answer_right": "Infallible"
            },
            {
              "question": "Radhe Lal ……… working twelve hours a day for five days.",
              "answer_a": "was",
              "answer_b": "will be",
              "answer_c": "has been",
              "answer_d": "is",
              "answer_right": "has been"
            },
            {
              "question": "As soon as I pointed my gun towards the jackal, it jumped ……… the water.",
              "answer_a": "in",
              "answer_b": "into",
              "answer_c": "on",
              "answer_d": "at",
              "answer_right": "into"
            },
        {
              "question": "He brought ……… information about the secretary.",
              "answer_a": "a piece of",
              "answer_b": "and",
              "answer_c": "many",
              "answer_d": "the",
              "answer_right": "a piece of"
            },
        {
              "question": "Well, I eat one apple every day, but today I ……… two apples.",
              "answer_a": "was eaten",
              "answer_b": "eat",
              "answer_c": "eaten",
              "answer_d": "ate",
              "answer_right": "ate"
            },
        {
              "question": "Either of these two people is the CEO of this company.",
              "answer_a": "have",
              "answer_b": "has",
              "answer_c": "is",
              "answer_d": "has been",
              "answer_right": "is"
            },
        {
              "question": "What is meant by bold words in the given sentence? Sentence – Major Karan Singh broke the ice regarding the security of the soldiers.",
              "answer_a": "hid a matter",
              "answer_b": "forbade",
              "answer_c": "spoke",
              "answer_d": "created a scene",
              "answer_right": "spoke"
            },
        {
              "question": "  If necessary, improve the bold words in the given sentence. Sentence – The broker promised that he will sell the plot to Kailash only.",
              "answer_a": "shall sell the plot",
              "answer_b": "would have been sold the plot",
              "answer_c": "would sell the plot",
              "answer_d": "No improvement",
              "answer_right": "would sell the plot"
            },
        {
              "question": "She will not meet you ……… to her office.",
              "answer_a": "until you go",
              "answer_b": " until you don't go",
              "answer_c": " unless you don't go",
              "answer_d": "until you hardly go",
              "answer_right": "until you go"
            },
          ]
        } 
        

     const hanleCloet = async () => {
          const result = await QuestionPost(data)
          console.log(result);
     }



     return (
          <div className=' p-10 '>

               <button onClick={() => hanleCloet()} className=' primary text-4xl'> click</button>


          </div>
     );
};

export default Page;