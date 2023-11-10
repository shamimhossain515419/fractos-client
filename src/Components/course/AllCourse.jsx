import React from 'react';

import HscBatch from './HscBatch';
import Container from '../Container/Container';
import BatchDetails from './BatchDetails';
import { GetCourses } from '@/services/courses';
// import BatchDetails from './BatchDetails';

const AllCourse =async () => {
  const dataad = await GetCourses();
       console.log(dataad);

    return (
        <Container>

            <div className='text-center py-9'>
                <h1 className='font-bold text-2xl md:text-3xl text-[#3eeac5]'>All Online Batches</h1>
            <p className='my-4 text-[#9cf9e5]'>Join With Our Batch And Prepare You From Any Part of Our Country</p>
            </div>
            
            <div className='mx-4 my-4 flex justify-center items-center   min-h-[60vh]'>
                
                <HscBatch></HscBatch>
            </div>
          

            
        </Container>
    );
};

export default AllCourse;