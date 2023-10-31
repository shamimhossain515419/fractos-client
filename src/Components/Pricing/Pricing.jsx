import React from 'react';
import "./Pricing.css"
import { FaCheckCircle } from 'react-icons/fa';
import CommonTitle from '../CommonTitle/CommonTitle';


const Pricing = () => {
    return (
        <div className='py-10  rounded'>
            <CommonTitle title={"Latest Price Of Our Classes"}>  </CommonTitle>
            <h3 className='text-base md:text-lg  font-medium text-center '>Buy packages as per your needs</h3>

            <div className="pricing-card-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 px-3 mt-5  ">
                <div className="card-item w-full py-10 bg-white rounded px-5 scale-90 hover:scale-100 duration-75">
                    <h2 className='text-2xl font-bold text-center textColor'> 1 Video</h2>
                    <h1 className='text-center font-bold text-5xl my-2 textColor'>$120</h1>
                    <p className='text-center font-bold text-1xl mb-4 textColor'>Per video</p>
                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Istagram stories</p>
                    </div>
                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>High Quality Video</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Up to 40 seconds</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Music Included</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Phone & Email Support</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Save up to 40% </p>
                    </div>

                    <button className='block  py-5 bg-blue-600 text-white rounded w-full font-bold hover:bg-blue-500 delay-100 mt-4'>Buy 1 video</button>
                </div>

                <div className="card-item w-full py-10 bg-white rounded px-5 scale-90 hover:scale-100 duration-75">
                    <h2 className='text-2xl font-bold text-center textColor'> 6 Videos</h2>
                    <h1 className='text-center font-bold text-5xl my-2 textColor'>$100</h1>
                    <p className='text-center font-bold text-1xl mb-4 textColor'>Per video</p>
                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Istagram stories</p>
                    </div>
                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>High Quality Video</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Up to 3 minutes</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Music Included and slider</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Phone & Email Support</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Save up to 60% </p>
                    </div>

                    <button className='block  py-5 bg-blue-600 text-white rounded w-full font-bold hover:bg-blue-500 delay-100 mt-4'>Buy 6 videos</button>
                </div>



                <div className="card-item w-full py-10 bg-white rounded px-5 scale-90 hover:scale-100 duration-75">
                    <h2 className='text-2xl font-bold text-center textColor'> 12 Videos</h2>
                    <h1 className='text-center font-bold text-5xl my-2 textColor'>$90</h1>
                    <p className='text-center font-bold text-1xl mb-4 textColor'>Per video</p>
                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Istagram stories</p>
                    </div>
                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>High Quality Video</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Up to 10 minutes</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Music Included</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Phone & Email Support</p>
                    </div>

                    <div className='flex flex-row space-x-2 mb-2 font-bold textColor'>
                    <FaCheckCircle className='mt-1 text-green-500'></FaCheckCircle> <p>Save up to 60% </p>
                    </div>

                    <button className='block  py-5 bg-blue-600 text-white rounded w-full font-bold hover:bg-blue-500 delay-100 mt-4'>Buy 12 videos</button>
                </div>

            </div>
            
        </div>
    );
};

export default Pricing;