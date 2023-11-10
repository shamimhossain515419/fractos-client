import Student from '@/Components/Student/Student';
import TitleBar from '@/Components/TitleBar';
import React from 'react';

const page = () => {
     return (
          <div>

               <TitleBar paragraph={"All user details of your project"} aline={"text-center"} title={"All  Student"}></TitleBar>

               <Student></Student>
          </div>
     );
};

export default page;        