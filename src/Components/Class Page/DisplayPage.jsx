"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';

const DisplayPage = () => {
    const [data, setData] = useState([]);

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
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-8 py-10 lg:px-8 px-10'>
        {
            data.map((item) => (  <div className="card w-80 bg-base-100 shadow-2xl">
            <figure>
              <img
                src={item.pic}
                alt="Shoes"
                className='h-48 w-full'
              />
            </figure>
            <div className="card-body">
              <h2 className="text-base font-semibold text-black">
                {item.des}
              </h2>
              <div className='text-black flex justify-between'>
                <p  className='text-3xl font-bold text-gray-500' >...</p>
                <p className='ml-20 mt-3'>STARTING AT <span className='font-semibold'>  ${item.price} </span> </p>
              </div>
            </div>
            
          </div> ))
        }
        <Link href="/class">
        <div className='w-80 pb-40 pt-40 rounded-2xl text-red text-gray-600 bg-white flex items-center justify-center flex-col'>
          <MdOutlineAddCircle className='text-6xl '> </MdOutlineAddCircle> 
         <p className='pt-5 text-xl'> Create a New Class </p>
        </div>
        </Link>
        
    </div>
  );
};

export default DisplayPage;
