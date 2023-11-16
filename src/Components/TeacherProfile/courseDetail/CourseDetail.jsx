import React from 'react';
import Image from 'next/image';
import Container from '@/Components/Container/Container';



const ClassDetails = () => {

  const details = {
    "_id": 1,
    "image": "data:image/jpeg;base64,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",
    "subject": "English",
    "name": "Taohid",
    "description": "I'm a english teacher",
    "time": "6 month",
    "limit": "35",

  }

  const getUserInfos =
  {
    "_id": 1,
    "name": "Taohid",
    "category": "Student",
    "collage": "Chattogram",
    "email": "to@gmail.com",
    "image": "data:image/jpeg;base64,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"

  }










  return (

    <div>
      <Container>
        <div className='py-8 secondBg px-3'>

          <div className="md:flex boxShodowClass border border-[#0EE6B8]    mx-4 my-6 rounded-lg ">
            <div className='md:w-1/2  p-4 '>
              <Image width={100} height={100} src={details.image} alt="download" border="0" className='w-full h-[400px] md:mt-4 p-4 rounded-lg   '></Image>
            </div>
            <div className='md:w-1/2 text-[#0EE6B8]   mt-4 md:mt-12 p-4  '>


              <h1 className='font-bold text-2xl '> Subject:  <span>  {details.subject}</span> </h1>


              <h1 className='font-bold text-2xl '> Teacher:  <span>  {details.name}</span> </h1>

              <h2 className='mt-4 text-white'><span className='text-xl font-bold'> </span>   {details.description
              }</h2>

            </div>
          </div>
          <div className='mx-8 justify-center my-12  text-xl p-4  rounded-lg text-[#0EE6B8] '>
            <div className='text-cneter mx-4'>

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
              <p>Price: {details.price
              }/=</p>

              <p className='mt-4 md:mt-0'> phone:  {details?.user?.phone}</p>




            </div>

          </div>

          <div className="text-center my-8 text-[#0EE6B8]">
            <p>Enrolled Student</p>
          </div>

          <div className="overflow-x-auto pt-12">
            <table className="table">
              <thead className=' primaryBg'>
                <tr className='text-white'>
                  <th className=' text-base  md:text-lg font-medium w-96'>Name</th>
                  <th className=' text-base  md:text-lg font-medium'>Category</th>
                  <th className=' text-base  md:text-lg font-medium'>Email</th>
                  <th className=' text-base  md:text-lg font-medium'>Action</th>
                </tr>
              </thead>

              <tbody key={getUserInfos._id}>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar w-14 h-14">
                        <Image width={100} height={100} src={details.image} alt="download" border="0" className='w-full h-[400px] md:mt-4 p-4 rounded-lg   '></Image>
                      </div>
                      <div>
                        <p className=' text-base md:text-lg capitalize font-medium  primary'>{getUserInfos.name}</p>
                        <p className=' c capitalize'>{getUserInfos.collage}</p>
                      </div>
                    </div>
                  </td>
                  <td className=' capitalize text-base  secondColor'><p>{getUserInfos.category}</p></td>
                  <td><p className='  text-base  '>{getUserInfos.email}</p></td>
                  <td className='' >  <button className=' buttonColor px-3 py-1 rounded-lg text-black'>Detail</button> </td>
                </tr>
              </tbody>

            </table>

          </div>
          <div className="text-center">
          <button
            className="  text-white   bg-red-500 font-bold uppercase px-6 py-2  border rounded-lg hover:border-red-500 hover:text-red-500 hover:bg-transparent mr-1 mb-1 mt-4 "
            type="button"

          >
            Delete Class
          </button>
          </div>


        </div>
      </Container>
    </div>

  );
};

export default ClassDetails;