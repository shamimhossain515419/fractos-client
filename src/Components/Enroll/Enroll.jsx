import React from 'react';
import Container from '../Container/Container';
import Image from 'next/image';
// import Container from '../Container/Container';

const Enroll = ({ coursesData, handleClick }) => {
    console.log(coursesData);
    return (
        <div className=' mt-8'>
            <Container>
                <div className='py-8 secondBg md:px-3 w-full'>
                    <div className=" w-4/4 md:mx-4 my-6  py-3 rounded-lg gap-6 md:flex lg:flex">
                        <div className=' md:w-3/4  mx-auto'>
                            <div className="my-4 m-auto rounded-md w-full glass shadow-lg shadow-[#0EE6B8]">
                                <figure className='rounded-lg'>
                                    <Image width={100} height={100} src={coursesData?.image} alt="download" border="0" className=' h-[350px] md:w-full object-fill  w-72 p-2   m-auto'></Image>
                                </figure>
                                <div className="  px-2 md:px-4 pb-3">
                                    <p className='text-base md:text-xl   primary'>Subject : <small>{coursesData?.subject} </small> </p>
                                    <p className='text-base md:text-lg   primary'>Teacher Name : <small>{coursesData?.subject} </small> </p>
                                    <p>Price : ৳  <small>{coursesData?.price}  </small></p>
                                    <p>Limit : <small>{coursesData?.limit}</small> student  </p>
                                    <p>Time :  <small>{coursesData?.time}</small> </p>
                                    <p>Description : <small>{coursesData?.description}</small> </p>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-2/4 lg-2/4 p-4'>
                            <div>
                                <p className='py-2'>Name : </p>
                                <input type="text" placeholder='Enter Your Name'
                                    className='border-[#0EE6B8] w-full md:w-96 lg:w-96 rounded border py-2 px-3 bg-[#192035]' />
                            </div>
                            <div>
                                <p className='py-2'>Email : </p>
                                <input type="email" placeholder='Enter Your Email' className='border-[#0EE6B8] w-full md:w-96 lg:w-96 rounded border px-3 py-2  bg-[#192035]' />
                            </div>
                            <div>
                                <p className='py-2'>Address : </p>
                                <input type="text" placeholder='Enter Your Address' className='border-[#0EE6B8] w-full md:w-96 lg:w-96 rounded px-3 border py-2  bg-[#192035]' />
                            </div>
                            <div className='mt-4'>
                                <button onClick={handleClick} className=' font-bold  border border-[#0EE6B8]  rounded-lg  p-3 hover:bg-[#0EE6B8] hover:text-black  mt-4 md:mt-0'>Payment Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Enroll;