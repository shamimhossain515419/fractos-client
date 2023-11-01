const CommonTitle = ({title}) => {
     return (
          <div className="flex justify-center items-center my-2">
               <div className=" inline-block text-center mx-auto">
<<<<<<< HEAD
                  <h1 className= {`text-lg md:text-2xl  uppercase  ${color}   font-semibold`} >{title}</h1> 
=======
                  <h1 className=" text-lg md:text-2xl capitalize   font-semibold ">{title}</h1> 
>>>>>>> 22b9ae36a400081132e451dcafb1de3ed514777f
                  <div className=" primaryBg  p-[2px] rounded-sm mb-2 w-full inline-block "></div>    
               </div>  
          </div>
     );
};

export default CommonTitle;