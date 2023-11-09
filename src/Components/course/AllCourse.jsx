import React from 'react';
import SscBatch from './SscBatch';
import HscBatch from './HscBatch';
import Admission from './Addmission';
import Container from '../Container/Container';
import BatchDetails from './BatchDetails';
// import BatchDetails from './BatchDetails';

const AllCourse = () => {
    return (
        <Container>

            <div className='text-center py-9'>
                <h1 className='font-bold text-2xl md:text-3xl text-[#3eeac5]'>All Online Batches</h1>
            <p className='my-4 text-[#9cf9e5]'>Join With Our Batch And Prepare You From Any Part of Our Country</p>
            </div>
            <div className='mx-4 my-4'>
                <h1 className=' text-3xl ml-4 font-bold text-sky-400 mb-8'>SSC Online Batches</h1>
                <SscBatch></SscBatch>
            </div>
            <div className='mx-4 my-4'>
                <h1 className=' text-3xl ml-4 font-bold text-[#3eeac5] mb-8'>HSC Online Batches</h1>
                <HscBatch></HscBatch>
            </div>
            <div className='mx-4 my-4'>
                <h1 className=' text-3xl ml-4 font-bold text-purple-300 mb-8'>Admission Online Course</h1>
               <Admission></Admission>
            </div>

            <BatchDetails></BatchDetails>
        </Container>
    );
};

export default AllCourse;