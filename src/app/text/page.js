
'use client'
import { QuestionPost } from '@/services/exam';
import React from 'react';

const Page = () => {



     const higherMathData = {
          exam_name: "higherMath",
          questions: [
            {
              question: "What is the derivative of y = x^2 with respect to x?",
              answer_a: "2x",
              answer_b: "x",
              answer_c: "3x^2",
              answer_d: "2",
              answer_right: "2x"
            },
            {
              question: "What is the integral of ∫(3x^2 + 2x) dx?",
              answer_a: "3x^3 + 2x^2 + C",
              answer_b: "2x^3 + 3x^2 + C",
              answer_c: "3x^3 + 2x + C",
              answer_d: "x^3 + 2x^2 + C",
              answer_right: "3x^3 + 2x^2 + C"
            },
            {
              question: "In a right triangle, what is the ratio of the length of the side opposite the angle θ to the length of the hypotenuse?",
              answer_a: "Sine",
              answer_b: "Cosine",
              answer_c: "Tangent",
              answer_d: "Cosecant",
              answer_right: "Sine"
            },
            {
              question: "What is the limit of (sin x) / x as x approaches 0?",
              answer_a: "1",
              answer_b: "0",
              answer_c: "π",
              answer_d: "∞",
              answer_right: "1"
            },
            {
              question: "What is the derivative of e^x with respect to x?",
              answer_a: "e^x",
              answer_b: "1",
              answer_c: "0",
              answer_d: "ln(x)",
              answer_right: "e^x"
            },
            {
              question: "What is the area of a circle with radius 'r'?",
              answer_a: "πr",
              answer_b: "2πr",
              answer_c: "πr^2",
              answer_d: "2πr^2",
              answer_right: "πr^2"
            },
            {
              question: "What is the value of sin(π/2)?",
              answer_a: "0",
              answer_b: "1",
              answer_c: "-1",
              answer_d: "π/2",
              answer_right: "1"
            },
            {
              question: "What is the square root of -1?",
              answer_a: "0",
              answer_b: "1",
              answer_c: "i",
              answer_d: "-i",
              answer_right: "i"
            },
          ]
        };
        
        
        
        

        

     const hanleCloet = async () => {
          const result = await QuestionPost(higherMathData)
          console.log(result);
     }



     return (
          <div className=' p-10 '>

               <button onClick={() => hanleCloet()} className=' primary text-4xl'> click</button>


          </div>
     );
};

export default Page;