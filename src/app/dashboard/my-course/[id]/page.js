"use client"

import ClassDetails from '@/Components/courseDetail/CourseDetail';
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {

     const params = useParams();
 const paramsId= params?.id;
     return (
          <div>
               <ClassDetails paramsId={paramsId}></ClassDetails>
          </div>
     );
};

export default page;