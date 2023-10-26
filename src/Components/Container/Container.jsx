import React from 'react';

const Container = ({children}) => {
     return (

          <div className='max-w-[2400]  2xl:px-32 xl:px-24 md:px-14 px-3'>
               <div className=" md:mx-8">
                    {children}
               </div>
          </div>
     );
};

export default Container;