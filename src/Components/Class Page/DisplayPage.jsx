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

  const handelDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  console.log(mycourse);
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-8 py-10 lg:px-8 px-2'>

      {
        mycourse?.length > 0 ? <> {
          mycourse?.map((item) => (<div className="card text-gray-100 shadow-2xl border boxClass">
            <figure>
              <Image width={200} height={200}
                src={item.image}
                alt="pic"
                className='h-48 w-full'
              />

            </figure>
            <div className="card-body">
              <h2 className="text-base font-base">
                {item?.subject}
              </h2>
              <div className='flex justify-between'>
                <p onClick={() => setOpen(!open)} className='cursor-pointer text-3xl font-bold text-gray-400' >...</p>

                <p className='ml-20 mt-3 font-base'>STARTING AT <span className='font-bold'>  ${item?.price} </span> </p>
              </div>
              {
                open &&
                <ul onClick={() => setOpen(false)} className='flex gap-1'>
                  <li className='bg-white text-black px-2 h-8 border rounded-lg cursor-pointer'>
                    <Link href="/editClass"> edit </Link>
                  </li>
                  <li onClick={handelDelete} className='bg-white text-black px-2 h-8 border rounded-lg cursor-pointer'> delete </li>
                </ul>
              }
            </div>

          </div>))
        }

          <Link href="/dashboard/my-course/add-batch">
            <div className='pb-40 pt-40 rounded-2xl text-red text-gray-600 bg-gray-200 flex items-center justify-center flex-col'>
              <MdOutlineAddCircle className='text-6xl '> </MdOutlineAddCircle>
              <p className='pt-5 text-xl'> Create a New Class </p>
            </div>
          </Link>
        </> : <NotFoundData title={"Your class not fount pleas Create account"} href={"/dashboard/my-course/add-batch"}></NotFoundData>
      }




    </div>
  );
};

export default DisplayPage;

