import React from 'react';
import Container from '../Container/Container';
// import Container from '../Container/Container';

const Enroll = ({coursesData,handleClick}) => {
    return (
        <div>
         
                <div className='py-8 secondBg px-3  w-full'>

                    <div className="md:flex w-full boxShodowClass border border-[#0EE6B8]    mx-4 my-6 rounded-lg ">
                        <div className='  p-4 '>
                            {/* <Image width={100} height={100} src={details.image} alt="download" border="0" className='w-full h-[400px] md:mt-4 p-4 rounded-lg   '></Image> */}
                            <img src="https://i.ibb.co/GVs8N9g/user1.jpg" className='w-96 h-60' alt="" />
                        </div>
                        <div className='p-4 font-bold'>
                            <p>Subject : {coursesData?.subject}  </p>
                            <p>Teacher name : {coursesData?.subject}  </p>
                            
                            <p>Price : {coursesData?.price}  </p>
                            <p>Limit : {coursesData?.limit}  </p>
                            <p>Time :  {coursesData?.time} </p>
                            <p>Description : {coursesData?.description} </p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div>
                            <p className='py-2'>Name : </p>
                            <input type="text" placeholder='Enter Your Name'
                                className='border-[#0EE6B8] border-2 py-2 w-2/4 px-3 bg-[#192035]' />
                        </div>
                        <div>
                            <p className='py-2'>Email : </p>
                            <input type="email" placeholder='Enter Your Email' className='border-[#0EE6B8] border-2 px-3 py-2 w-2/4 bg-[#192035]' />
                        </div>
                        <div>
                            <p className='py-2'>Address : </p>
                            <input type="text" placeholder='Enter Your Address' className='border-[#0EE6B8] px-3 border-2 py-2 w-2/4 bg-[#192035]' />
                        </div>
                    </div>
                    <div className='flex justify-end mt-4'>
                        <button onClick={handleClick} className=' font-bold text-xl border border-[#0EE6B8]  rounded-lg  p-3 hover:bg-[#0EE6B8] hover:text-black  mt-4 md:mt-0'>Payment Now</button>
                    </div>

                </div>
           
        </div>
    );
};

export default Enroll;