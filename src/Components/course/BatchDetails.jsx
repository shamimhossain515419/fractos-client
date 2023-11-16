import Image from 'next/image';
import React from 'react';
import Container from '../Container/Container';
import Link from 'next/link';

const BatchDetails = ({ details }) => {

  


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
           
     
                <h1 className='font-bold text-2xl '> Teacher:  <span>  {details?.user?.name}</span> </h1>
             
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
            <div className='mt-4 md:flex  justify-between mx-4'>
            <div>
              <p>Price: {details.price
              }/=</p>
              <div>
                phone:  {details?.user?.phone}

              </div>
              

              </div>

            </div>

            <div className='mx-4 mt-4 text-center text-white'>
              
              <Link href={`/checkout/${details?._id}`}  className='font-bold text-xl border border-[#0EE6B8]  rounded-lg  p-4 hover:bg-[#0EE6B8] hover:text-black  mt-4 md:mt-0'>Enroll Now</Link>
            </div>
          </div>

        </div>
      </Container>
    </div>

  );
};

export default BatchDetails;