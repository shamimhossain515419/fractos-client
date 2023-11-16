"use client"
import { GlobalContext } from '@/GlobalState';
import { GetCourses } from '@/services/courses';
import { GetSingleTeacher } from '@/services/teacher';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import Swal from "sweetalert2";
import Loading from '../Loading/Loading';
import NotFoundData from '../NotFoundData/NotFoundData';
import ClassDetails from '../courseDetail/CourseDetail';

const DisplayPage = () => {
  const { user } = useContext(GlobalContext);

  const [open, setOpen] = useState(false)
  const [teacher, setTeacher] = useState([])
  const [mycourse, setMycourse] = useState({})

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
  return (

    <div>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-8 py-10 lg:px-8 px-2'>

        {
          mycourse?.length > 0 ? <>
            {
              mycourse?.map(batch => <div key={batch?._id} className='col '>
                <div className='border border-blue-500 rounded-lg'>

                  <div className='  rounded-lg text-center relative'>
                    <div className=' h-[200px]'>
                      <Image width={100} height={100} className=' h-[200px] relative w-full ' src={batch?.image} alt='image'></Image>

                    </div>
                  

                  </div>

                  <div className='mx-4 mt-8 text-sm text-[#0EE6B8]'>
                  <h1 className='text-xl  w-full   h-full    primary font-bold'> Subject: {batch?.subject
                    }</h1>
                    <p>Total Enrolled Students : {batch?.studentIdstudentIdstudentId?.length}</p>
                    <p >Price: {batch?.price}</p>
                    <p>Class Time: {batch?.time}</p>
                    <p> Student Limit: {batch?.limit}</p>
                    <Link href={`/dashboard/my-course/${batch?._id}`} className=''>
                      <button className='font-bold  border border-indigo-500 rounded-lg  p-2 hover:bg-indigo-700 text-[#0EE6B8] my-4'>Details</button>
                    </Link>

                  </div>

                </div>
                <div></div>


              </div>)
            }
            <Link href="/dashboard/my-course/add-batch">
              <div className='  h-full rounded-2xl text-red text-gray-600 bg-gray-200 flex items-center justify-center flex-col'>
                <MdOutlineAddCircle className='text-6xl '> </MdOutlineAddCircle>
                <p className='pt-5 text-xl'> Create a New Class </p>
              </div>
            </Link>
          </> : <NotFoundData title={"Your class not fount pleas Create account"} href={"/dashboard/my-course/add-batch"}></NotFoundData>
        }




      </div>
      
    </div>
  );
};

export default DisplayPage;

