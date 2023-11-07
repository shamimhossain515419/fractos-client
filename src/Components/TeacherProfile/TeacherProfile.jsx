import React from 'react';
import img from './Images/teacherImage.png'
import Image from 'next/image';
import './TeacherProfile.css'
import TeachersProfile from '@/app/teachers-profile/page';
const TeacherProfile = () => {

  const data =
  {
    "id": 1,
    "name": "Taohidur Rahman",
    "qualification1": "MSc (English), University of Oxford (UK);",
    "qualification2": " BA, MA (English), University of Dhaka;",
    "achievement": "IELTS: 8.5",
    "earning": "50,000",
    "batch": "6",
    "enrolled_student": "445169",
    "batches": [
      {
        "id": 1,
        "subject_name": "HSC English-1st",
        "batch_no": "1",
        "enrolled_student": "200",
        "fees": "1500",
        "class_time":"7am-8am",
        "day":"Saturday,Monday,Wednesday"
      },
      {
        "id": 2,
        "subject_name": "HSC English-1st",
        "batch_no": "2",
        "enrolled_student": "200",
        "fees": "1500",
        "class_time":"8am-9am",
        "day":"Saturday,Monday,Wednesday"
      },
      {
        "id": 3,
        "subject_name": "HSC English-2nd",
        "batch_no": "1",
        "enrolled_student": "200",
        "fees": "1500",
        "class_time":"7am-8am",
        "day":"Sunday,Tuesday,Thursday"
      },
      {
        "id": 4,
        "subject_name": "SSC English-1st",
        "batch_no": "1",
        "enrolled_student": "200",
        "fees": "1000",
        "class_time":"8am-9am",
        "day":"Sunday,Tuesday,Thursday"
      },
      {
        "id": 5,
        "subject_name": "SSC English-2nd",
        "batch_no": "1",
        "enrolled_student": "200",
        "fees": "1000",
        "class_time":"4.30pm-5.30pm",
        "day":"Sunday,Tuesday,Thursday"
      },
      {
        "id": 6,
        "subject_name": "SSC English-2nd",
        "batch_no": "2",
        "enrolled_student": "200",
        "fees": "1000",
        "class_time":"4.30pm-5.30pm",
        "day":"Saturday,Monday,Wednesday"
      },
    ]
  }

  return (
    <div>
      <div className=' w-full flex flex-col items-center justify-center my-6'>
        < Image width={100} height={100} src={img} alt="download" border="0" className='h-32 w-32 rounded-full border-2  border-[#0EE6B8]' />
        <div className='primary mt-8 text-center'>
          <h3 className='font-bold  text-2xl '>{data.name}</h3>
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
      <div className='border rounded-lg border-[#0EE6B8] p-8 mx-4 my-8'>

      <p className='font-bold text-3xl text-[#0EE6B8] text-center'>Batches</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">

          {
            data.batches.map(batch => <div key={batch.id} className='col '>
              <div className='border border-blue-500 rounded-lg'>

                <div className='backgroundImage p-8 rounded-lg text-center'>

                <h1 className='text-2xl font-bold'>{batch.subject_name}</h1>
                <h1 className='text-2xl font-bold'>Batch: {batch.batch_no}</h1>
                </div>

                <div className='mx-4 mt-8  text-[#0EE6B8]'>
                  <p>Total Enrolled Students : {batch.enrolled_student}</p>
                  <p >Payment: {batch.fees}</p>
                  <p>Class Time: {batch.class_time}</p>
                  <p>{batch.day}</p>
                 <div className=''>
                 <button className='font-bold  border border-indigo-500 rounded-lg  p-2 hover:bg-indigo-700 text-[#0EE6B8] my-4'>Details</button>
                 </div>

                </div>

              </div>
              <div></div>


            </div>)
          }

        </div>
       

              <div className='text-center'>
              <button className='font-bold text-xl border-2 border-[#27deb7] rounded-lg  p-4 hover:bg-blue-700 text-[#0EE6B8]'>Create Batch</button>
              </div>
      </div>


    </div>
  );
};

export default TeacherProfile;