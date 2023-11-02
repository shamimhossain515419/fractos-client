"use client"

import DUCUnit from '@/Components/ArchiveDUCUnit/DUCUnit';
import { GetAdmission } from '@/services/admission';
import React, { useEffect, useState } from 'react';

const page = () => {

     const [subjects, setSubjects] = useState([]);

     const GetAllQuestion = async () => {
          const result = await GetAdmission();
          const filter = result?.filter(item => item?.university == "DUET")
          setSubjects(filter)
     }

     useEffect(() => {
          GetAllQuestion()
     }, [2000]);
     console.log(subjects);

     return (
          <div>
               <DUCUnit subjects={subjects}></DUCUnit>
          </div>
     );
};

export default page;