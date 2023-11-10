"use client"
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import './TeacherProfile.css'
import { GetCourses } from '@/services/courses';
import { GlobalContext } from '@/GlobalState';
import { GetSingleTeacher } from '@/services/teacher';
import Loading from '../Loading/Loading';
import Link from 'next/link';

const TeacherProfile = () => {
  const { user } = useContext(GlobalContext);

  const [teacher, setTeacher] = useState([])
  const [mycourse, setMycourse] = useState({})

  const [users, setUsers] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 22 },
  ]);

  useEffect(() => {

    const getData = async () => {
      const result = await GetCourses();
      const data = await GetSingleTeacher(user?.email)
      setTeacher(data)

      if (result?.length > 0) {
        const filteredUsers = result.filter(item => item?.user?.email == user?.email);
        setMycourse(filteredUsers);
      }


      console.log(result);
    }
    getData()
  }, [user?.email]);




  console.log(mycourse);

  console.log(teacher);


  return (
    <div>
      <div className=' w-full flex flex-col items-center justify-center my-6'>
        < Image width={100} height={100} src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"} alt="download" border="0" className='h-32 w-32 rounded-full border-2  border-[#0EE6B8]' />
        <div className='primary mt-8 text-center'>
          <h3 className='font-bold  text-2xl capitalize '>{user?.displayName}</h3>
          <p className=' text-lg     md:font-medium '> {teacher?.subject} </p>
          <p className='max-w-[350px]  text-white text-base text-center mx-auto'> {teacher?.title} </p>

        </div>
      </div>

      <div className='md:flex lg:flex items-center my-4  justify-center text-2xl text-[#3eeac5]  mx-auto w-2/4 md:w-3/4 lg:w-3/4'>
        <div className='border-2 shadow-lg border-white border-x rounded-full p-4  md:mx-4 my-4  bg-indigo-500 shadow-indigo-500 text-center w-full'><p className='mb-2'>00</p>
          <p className='mb-2'>/=</p>
        </div>
        <div className='border-2 shadow-lg border-white border-x rounded-full p-4 mr-4 w-full text-center bg-indigo-500 shadow-indigo-500 my-4'>
          <p className='mb-2'>{mycourse?.length}</p>
          <p>Batches</p>
        </div>
        <div className='border-2 border-white  border-x rounded-full p-4 mr-4 w-full text-center bg-indigo-500 my-4 shadow-lg shadow-indigo-500 '><p className='mb-2'>00</p>
          <p>Students  </p></div>

      </div>
      <div className=' rounded-lg  p-8 mx-4 my-8'>

        <p className='font-bold text-3xl text-[#0EE6B8] text-center'>Batches</p>


        {
          mycourse?.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">

            {
              mycourse?.map(batch => <div key={batch?._id} className='col '>
                <div className='border border-blue-500 rounded-lg'>

                  <div className='  rounded-lg text-center relative'>
                    <div className=' h-[200px]'>
                      <Image width={100} height={100} className=' h-[200px] relative w-full ' src={batch?.image} alt='image'></Image>

                    </div>
                    <h1 className='text-2xl absolute top-0 w-full flex justify-center items-center gap-1  h-full  bg-[#ff42d36a] font-bold'>{batch?.subject
                    }</h1>

                  </div>

                  <div className='mx-4 mt-8 text-sm text-[#0EE6B8]'>
                    <p>Total Enrolled Students : {batch?.studentIdstudentIdstudentId?.length}</p>
                    <p >Price: {batch?.price}</p>
                    <p>Class Time: {batch?.time}</p>
                    <p> Student Limit: {batch?.limit}</p>
                    <div className=''>
                      <button className='font-bold  border border-indigo-500 rounded-lg  p-2 hover:bg-indigo-700 text-[#0EE6B8] my-4'>Details</button>
                    </div>

                  </div>

                </div>
                <div></div>


              </div>)
            }

          </div> : <Loading></Loading>
        }




        <Link href={"/dashboard/my-course/add-batch"} className='text-center flex justify-center  items-center w-full'>
          <button className='font-bold text-xl border-2 border-[#27deb7] rounded-lg  p-4 hover:bg-blue-700 text-[#0EE6B8]'>Create Batch</button>
        </Link>
      </div>


    </div>
  );
};

export default TeacherProfile;