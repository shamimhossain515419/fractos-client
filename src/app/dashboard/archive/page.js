'use client'

import AcademicQuestion from '@/Components/AcademicQuestion/AcademicQuestion';
import ArchiveCollege from '@/Components/ArchiveDUCUnit/ArchiveCollege';
import React, { useState } from 'react';

const ArchivePage = () => {

     const [Open, setOpen] = useState(false)
     return (
          <div>

               <div>
                    <div className=''>
                         <button onClick={() => setOpen(true)} className={`${Open ? " primaryBg text-white" : "border border-[#27895C]  text-black "}   m-3 p-2 font-bold rounded `}> Admission</button>
                         <button onClick={() => setOpen(false)} className={`${Open ? "border border-[#27895C] text-black " : "primaryBg text-white"}  m-3 p-2 font-bold rounded `}>Academic</button>
                    </div>
               </div>

               <div className=' mt-11'>
                    {
                         Open ? <><ArchiveCollege></ArchiveCollege>  </> : <>  <AcademicQuestion></AcademicQuestion>   </>
                    }
               </div>




          </div>
     );
};

export default ArchivePage;