'use client'

import DUCUnit from '@/Components/ArchiveDUCUnit/DUCUnit';
import { GetAdmission } from '@/services/admission';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {

     const params=useParams();
     console.log(params);
     const category=params?.universuty;
     const [subjects, setSubjects] = useState([]);

     const GetAllQuestion = async () => {
          const result = await GetAdmission();
          const filter = result?.filter(item => item?.university == category)
          setSubjects(filter)
     }

     useEffect(() => {
          GetAllQuestion()
     }, [2000]);
  

     return (
          <div>
               <DUCUnit subjects={subjects} category={category}></DUCUnit>
          </div>
     );
};

export default page;