'use client'

import AcademicQuestion from '@/Components/AcademicQuestion/AcademicQuestion';
import ArchiveCollege from '@/Components/ArchiveDUCUnit/ArchiveCollege';
import { GlobalContext } from '@/GlobalState';

import React, { useContext, useState } from 'react';

const ArchivePage = () => {
     const { Open, setOpen } = useContext(GlobalContext)


     return (
          <div>
               {
                    Open ? <><ArchiveCollege ></ArchiveCollege>  </> : <>  <AcademicQuestion></AcademicQuestion>   </>
               }
          </div>
     );
};

export default ArchivePage;