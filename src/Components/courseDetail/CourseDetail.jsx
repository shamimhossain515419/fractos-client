"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '@/Components/Container/Container';
import { Courses_By_id, Courses_Delete } from '@/services/courses';
import { RxAvatar } from 'react-icons/rx';
import StudentDetails from '../StudentDetails/StudentDetails';
import Swal from 'sweetalert2';



const ClassDetails = ({ paramsId }) => {

  const [couresDetails, setCouresDetails] = useState({})
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {

    const getData = async (paramsId) => {
      const data = await Courses_By_id(paramsId)
      setCouresDetails(data)
    }

    getData(paramsId);

  }, [paramsId])
  console.log(couresDetails);
  const handleDelete = async (id) => {
    console.log(id);
    const result = await Courses_Delete(id);

    if (result?.success) {
      Swal.fire(
        'successfull!',
        ` ${result?.message}`,
        'success'
      )
    }

  }


  return (

    <div>

      <div className='py-8 secondBg px-3'>

        <div className="md:flex boxShodowClass border border-[#0EE6B8]    mx-4 my-6 rounded-lg ">
          <div className='md:w-1/2  p-4 '>
            <Image width={100} height={100} src={couresDetails.image} alt="download" border="0" className='w-full h-[400px] md:mt-4 p-4 rounded-lg   '></Image>
          </div>
          <div className='md:w-1/2 text-[#0EE6B8]   mt-4 md:mt-12 p-4  '>


            <h1 className='font-bold text-2xl '> Subject:  <span>  {couresDetails.subject}</span> </h1>


            <h1 className='font-bold text-2xl '> Teacher:  <span>  {couresDetails?.user?.name}</span> </h1>

            <h2 className='mt-4 text-white'><span className='text-xl font-bold'> </span>   {couresDetails.description
            }</h2>

          </div>
        </div>
        <div className='mx-8 justify-center my-12  text-xl p-4  rounded-lg text-[#0EE6B8] '>
          <div className='text-cneter mx-4'>

            <p> Time:  {couresDetails?.time}</p>
          </div>

          <div className="md:flex justify-between mx-4 text-white">
          </div>
          <div className='mt-4 md:flex justify-between mx-4'>
            <p>Availabel Slot: {(couresDetails?.limit - couresDetails?.studentIdstudentIdstudentId?.length)}</p>
            <p className='mt-4 md:mt-0 md:ml-4'>Total Enrolled Students: {couresDetails?.studentIdstudentIdstudentId?.length
            }</p>


          </div>
          <div className='mt-4 md:flex  justify-between mx-4'>
            <p>Price: {couresDetails.price
            }/=</p>

            <p className='mt-4 md:mt-0'> phone:  {couresDetails?.user?.phone}</p>




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

            <tbody >
              {
                couresDetails?.studentIdstudentIdstudentId?.map((details, index) => <tr key={index}>
                  <td>

                    <div className=' flex justify-center  items-center gap-3'>
                      <div>
                        {
                          details?.photo ? <Image className=' w-[50px] h-[50px] rounded ' width={100} height={100} src={details?.photo ? details?.photo : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"} alt='' /> : <RxAvatar className="w-12 h-12 text-[#E8EAED]"></RxAvatar>
                        }
                      </div>
                      <div>
                        <h1 className=' capitalize text-base md:text-lg primary font-medium'> {details?.name} </h1>
                        <p className=' capitalize mt-1 '> {details?.collage ? details?.collage : "Collage"} </p>
                      </div>
                    </div>

                  </td>
                  <td className=' capitalize text-base  secondColor'><p>{details?.category}</p></td>
                  <td><p className='  text-base  '>{details?.email}</p></td>
                  <td className='' onClick={() => { setModalData(details), setShowModal(true) }}>  <button className=' buttonColor px-3 py-1 rounded-lg text-black'>Detail</button> </td>
                </tr>)

              }

            </tbody>

          </table>

        </div>
        <div className="text-center">
          <button onClick={() => handleDelete(couresDetails?._id)}
            className="  text-white   bg-red-500 font-bold uppercase px-6 py-2  border rounded-lg hover:border-red-500 hover:text-red-500 hover:bg-transparent mr-1 mb-1 mt-4 "
            type="button"

          >
            Delete Class
          </button>
        </div>


      </div>
      <StudentDetails showModal={showModal} setShowModal={setShowModal} userInfo={modalData}></StudentDetails>
    </div>

  );
};

export default ClassDetails;