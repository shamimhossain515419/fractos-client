import React from 'react';

const Container = ({children}) => {
     return (

          <div className='   max-w-[2400] 2xl:px-20 xl:px-16 md:px-10 px-3'>
               <div className=" md:mx-20">
                    {children}
               </div>
          </div>
     );
};

export default Container;