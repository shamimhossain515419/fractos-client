"use client"
import BatchDetails from '@/Components/course/BatchDetails';
import { Courses_By_id } from '@/services/courses';
import { useParams } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const page = () => {
 const params=useParams()
     const [details,setDetails]=useState({})
       useEffect(()=>{
            const  getId= async()=>{
                const data= await Courses_By_id(params?.id);
                setDetails(data)
            }
            getId()
       },[params?.id])

     
     return (
          <div>
               <BatchDetails details={details}></BatchDetails>
          </div>
     );
};

export default page;