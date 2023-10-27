
'use client'
import { QuestionPost } from '@/services/exam';
import React from 'react';

const Page = () => {



     const data ={
          exam_name: "mathematics ",
          questions: [
            {
              "question": "The hormone Erythropoietin is produced in______",
              "answer_a": "Liver",
              "answer_b": "Spleen",
              "answer_c": "Kidney",
              "answer_d": "Thyroid gland",
              "answer_right": "Kidney"
            },
            {
              "question": "For some integer n, the odd integer is represented in the form of:",
              "answer_a": "n",
              "answer_b": "n + 1",
              "answer_c": "2n + 1",
              "answer_d": "2n",
              "answer_right": "2n + 1"
            },
            {
              "question": "Which of the following is not irrational?",
              "answer_a": "(3 + √7)",
              "answer_b": "(3 – √7)",
              "answer_c": "(3 + √7) (3 – √7)",
              "answer_d": "3√7",
              "answer_right": "(3 + √7) (3 – √7)"
            },
            {
              "question": "The addition of a rational number and an irrational number is equal to:",
              "answer_a": "rational number",
              "answer_b": "Irrational numbe",
              "answer_c": "Both",
              "answer_d": "None of the above",
              "answer_right": "Irrational numbe"
            },
        {
              "question": "If set A = {1, 2, 3, 4, 5,…} is given, then it represents:",
              "answer_a": "Whole numbers",
              "answer_b": "Rational Numbers",
              "answer_c": "Natural numbers",
              "answer_d": " Complex numbers",
              "answer_right": "Natural numbers"
            },
        {
              "question": "If p and q are integers and is represented in the form of p/q, then it is a:",
              "answer_a": "Whole number",
              "answer_b": "Rational number",
              "answer_c": "Natural number",
              "answer_d": "Even number",
              "answer_right": "Rational number"
            },
        {
              "question": "The largest number that divides 70 and 125, which leaves the remainders 5 and 8, is:",
              "answer_a": "65",
              "answer_b": "15",
              "answer_c": "13",
              "answer_d": "25",
              "answer_right": "13"
            },
        {
              "question": "The decimal expansion of the rational number 23/(22 . 5) will terminate after",
              "answer_a": "one decimal place",
              "answer_b": "two decimal places",
              "answer_c": "three decimal places",
              "answer_d": "more than 3 decimal places",
              "answer_right": "two decimal places"
            },
        {
              "question": " Euclid’s division lemma states that for two positive integers a and b, there exist unique integers q and r such that a = bq + r, where r must satisfy",
              "answer_a": "1 < r < b ",
              "answer_b": "0 < r ≤ b",
              "answer_c": "0 ≤ r < b ",
              "answer_d": "0 < r < b",
              "answer_right": "0 ≤ r < b "
            },
        {
              "question": "The prime factorisation of 96 is",
              "answer_a": "2^5 × 3",
              "answer_b": "2^6",
              "answer_c": "2^4 × 3",
              "answer_d": "2^4 × 32",
              "answer_right": "2^5 × 3"
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