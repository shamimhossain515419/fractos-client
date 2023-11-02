
'use client'
import AcademicQuestion from '@/Components/AcademicQuestion/AcademicQuestion';
// import Archive from '@/Components/Archive/Archive';
import ArchiveCollege from '@/Components/ArchiveDUCUnit/ArchiveCollege';


import React, { useState } from 'react';

const ArchivePage = () => {

     const [Open, setOpen] = useState(false)
     return (
          <div>

               <div>
                    <div className=''>
                         <button onClick={() => setOpen(true)} className='bg-purple-950 m-3 p-2 font-bold rounded text-white'>Academic</button>
                         <button onClick={() => setOpen(false)} className='bg-purple-950 m-3 p-2 font-bold rounded text-white'>Admission</button>
                    </div>
               </div>

               <div className=' mt-11'>
                    {
                         Open ? <> <AcademicQuestion></AcademicQuestion>  </> : <> <ArchiveCollege></ArchiveCollege>   </>
                    }
               </div>


               {/* <DUCUnit></DUCUnit> */}
              
          </div>
     );
};

export default ArchivePage;