import Image from 'next/image';
import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';

const BatchDetails = ({ details }) => {

  // const details =

  // {


  //   "Batch": "1",
  //   "subject_name": "SSC English-1st",
  //   "no_of_class": "3",
  //   "no_of_mockTest": "1",
  //   "fees": "1000",
  //   "class_time": "8am-9am",

  //   "Image": "data:image/jpeg;base64,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",
  //   "detail": " sir create a online batch to help you in English. Join the batch and learn and prepare you english.He take 3 class in every week and take one live mock test. Which help you judge your preparation.",
  //   "class_time": "8am-9am",
  //   "day": "Sunday,Tuesday,Thursday",
  //   "enroll_student": "50",
  //   "available_slot": "100",

  //   "teacherName": "Taohidur Rahaman"



  // }


  return (

    <div>
      <Container>
        <div className='py-8 secondBg px-3'>

          <div className="md:flex boxShodowClass border border-[#0EE6B8]    mx-4 my-6 rounded-lg ">
            <div className='md:w-1/2  p-4 '>
              <Image width={100} height={100} src={details?.image} alt="download" border="0" className='w-full h-[400px] md:mt-4 p-4 rounded-lg   '></Image>
            </div>
            <div className='md:w-1/2 text-[#0EE6B8]   mt-4 md:mt-12 p-4  '>

              
                <h1 className='font-bold text-2xl '> Sbuject:  <span>  {details?.subject}</span> </h1>
           
     
                <h1 className='font-bold text-2xl '> Sbuject:  <span>  {details?.user?.name}</span> </h1>
             
              <h2 className='mt-4 text-white'><span className='text-xl font-bold'> </span>   {details?.description
              }</h2>

            </div>
          </div>
          <div className='mx-8 justify-center my-12  text-xl p-4  rounded-lg text-[#0EE6B8] '>
            <div className='md:flex justify-between mx-4'>

              <p> Time:  {details?.time}</p>
            </div>

            <div className="md:flex justify-between mx-4 text-white">
            </div>
            <div className='mt-4 md:flex justify-between mx-4'>
              <p>Availabel Slot: {(details?.limit - details?.studentIdstudentIdstudentId?.length)}</p>
              <p className='mt-4 md:mt-0 md:ml-4'>Total Enrolled Students: {details?.studentIdstudentIdstudentId?.length
              }</p>


            </div>
            <div className='mt-4 md:flex  justify-end mx-4'>
              <div>
                phone:  {details?.user?.phone}
              </div>

            </div>

            <div className='mx-4 mt-4 md:flex justify-between text-white'>
              <p>Price: {details?.price
              }/=</p>

              <Link href={`/checkout/${details?._id}`}  className='font-bold text-xl border border-[#0EE6B8]  rounded-lg  p-4 hover:bg-[#0EE6B8] hover:text-black  mt-4 md:mt-0'>Enroll Now</Link>
            </div>
          </div>

        </div>
      </Container>
    </div>

  );
};

export default BatchDetails;