import { useParams } from 'next/navigation';
import React from 'react';

const Online_exam = ({ params }) => {

     const data = useParams();
     console.log(data);
     return (
          <div>
              <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, soluta.</h1>
          </div>
     );
};

export default Online_exam; { params }

const data = useParams();
console.log(data);