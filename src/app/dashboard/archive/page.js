"use client"

import AcademicQuestion from '@/Components/AcademicQuestion/AcademicQuestion';
import ArchiveCollege from '@/Components/ArchiveDUCUnit/ArchiveCollege';
import React, { useState } from 'react';

const ArchivePage = () => {

     const [Open, setOpen] = useState(false)
     return (
          <div>

               <div>
                    <div className=''>
                         <button onClick={() => setOpen(true)} className={` m-3 p-2 font-bold rounded text-white`}>Academic</button>
                         <button onClick={() => setOpen(false)} className={`${Open  ? "bg-purple-950 ":" primaryBg"} m-3 p-2 font-bold rounded text-white`}>Admission</button>
                    </div>
               </div>

               <div className=' mt-11'>
                    {
                         Open ? <> <ArchiveCollege></ArchiveCollege>      </> : <><AcademicQuestion></AcademicQuestion>  </>
                    }
               </div>



          </div>
     );
};

export default ArchivePage;