
import ArchiveCollege from '@/Components/ArchiveDUCUnit/ArchiveCollege';
import DUCUnit from '@/Components/ArchiveDUCUnit/DUCUnit';
import React from 'react';

const ArchivePage = () => {
     return (
          <div>
               <ArchiveCollege></ArchiveCollege>

               <DUCUnit></DUCUnit>
               <ArchiveCollege></ArchiveCollege>
          </div>
     );
};

export default ArchivePage;