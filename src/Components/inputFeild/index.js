import React from 'react';

const InputFiled = ({ name, type, placeholder, require, title }) => {
     return (
          <div>
               <div className=' w-full   my-2'>
                    <label className='  pl-2 text-base md:text-lg  capitalize font-bold pb-2   text-white'>{title} </label>
                    <input  required={require} className=' focus:border-[#0EE6B8] border-2 secondBg py-2 px-2 w-full' name={name}
                         type={type} placeholder={placeholder}></input>
               </div>
          </div>
     );
};

export default InputFiled;