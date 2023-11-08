"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import Swal from "sweetalert2";

const DisplayPage = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      // Fetch data when the component mounts
      const fetchData = async () => {
        try {
          const response = await fetch('/fake.json');
          const jsonData = await response.json();
          setData(jsonData);
          console.log(data)
        } catch (error) {
          console.error('Error fetching the data', error);
        }
      };
  
      fetchData();
  
  
    }, []);
    
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

  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-8 py-10 lg:px-8 px-2'>
        {
            data.map((item) => (  <div className="card text-gray-100 shadow-2xl border boxClass">
            <figure>
              <img
                src={item.pic}
                alt="pic"
                className='h-48 w-full'
              />
              
            </figure>
            <div  className="card-body">
              <h2 className="text-base font-base">
                {item.des}
              </h2>
              <div className='flex justify-between'>
                <p onClick={()=> setOpen(!open)} className='cursor-pointer text-3xl font-bold text-gray-400' >...</p>
                
                <p className='ml-20 mt-3 font-base'>STARTING AT <span className='font-bold'>  ${item.price} </span> </p>
              </div>
              {
                open && 
                <ul onClick={()=> setOpen(false)} className='flex gap-1'>
                <li className='bg-white text-black px-2 h-8 border rounded-lg cursor-pointer'> 
                <Link href="/editClass"> edit </Link>
                 </li>
                <li onClick={handelDelete} className='bg-white text-black px-2 h-8 border rounded-lg cursor-pointer'> delete </li>
            </ul>
               }
            </div>
            
          </div> ))
        }
        <Link href="/class">
        <div className='pb-40 pt-40 rounded-2xl text-red text-gray-600 bg-gray-200 flex items-center justify-center flex-col'>
          <MdOutlineAddCircle className='text-6xl '> </MdOutlineAddCircle> 
         <p className='pt-5 text-xl'> Create a New Class </p>
        </div>
        </Link>
        
    </div>
  );
};

export default DisplayPage;

