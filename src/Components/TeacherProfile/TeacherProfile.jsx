import React from 'react';
import img from './Images/teacherImage.png'
import Image from 'next/image';

const TeacherProfile = () => {

  const data =
  {
    "id": 1,
    "name": "Taohidur Rahman",
    "qualification1": "MSc (English), University of Oxford (UK);",
    "qualification2": " BA, MA (English), University of Dhaka;",
    "achievement": "IELTS: 8.5",
    "earning": "50,000",
    "batch": "14",
    "enrolled_student": "445169"
  }

  return (
    <div>
      <div className=' w-full flex flex-col items-center justify-center my-6'>
        < Image width={100} height={100} src={img} alt="download" border="0" className='h-32 w-32 rounded-full border-2  border-[#0EE6B8]' />
       <div className='primary mt-8 text-center'>
       <h3 className='font-bold  text-xl '>{data.name}</h3>
        <p className=''> {data.qualification1} </p>
        <p className=''> {data.qualification2} </p>
        <p className=''> {data.achievement} </p>
       </div>
      </div>

      <div className='md:flex lg:flex items-center my-4  justify-center text-2xl text-[#3eeac5]  mx-auto w-2/4 md:w-3/4 lg:w-3/4'>
        <div className='border-2 shadow-lg border-white border-x rounded-full p-4  md:mx-4 my-4  bg-indigo-500 shadow-indigo-500 text-center w-full'><p className='mb-2'>{data.earning}</p>
       <p className='mb-2'>/=</p>
         </div>
        <div className='border-2 shadow-lg border-white border-x rounded-full p-4 mr-4 w-full text-center bg-indigo-500 shadow-indigo-500 my-4'>
          <p className='mb-2'>{data.batch}</p>
          <p>Batches</p>
        </div>
        <div className='border-2 border-white  border-x rounded-full p-4 mr-4 w-full text-center bg-indigo-500 my-4 shadow-lg shadow-indigo-500 '><p className='mb-2'>{data.enrolled_student}</p>
          <p>Students</p></div>
           
      </div>
    </div>
  );
};

export default TeacherProfile;