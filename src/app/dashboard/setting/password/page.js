


const PasswordChangePage = () => {

     return (
          <div>
               <div className=' my-2'>
                    <h1 className=' text-base md:text-2xl  primary font-normal '> Password</h1>
                    <p className=' text-sm md:text-lg font-normal secondColor'>  Set a new password </p>
               </div>

               <div>
                    <div className=' py-2 my-2'>
                         <label className=' secondColor'  htmlFor="pb-1">Old Password</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' type="password" placeholder='Old password' />
                    </div>
                    <div className=' py-2  my-2'>
                         <label  className=' secondColor'htmlFor="py-1">Old Password</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' type="password" placeholder='Old password' />
                    </div> 
                    <div className=' py-2  my-2'>
                         <label  className=' secondColor' htmlFor="">confirm new password</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#27895C] border  text-base  font-normal' type="password" placeholder='confirm new password' />
                    </div>
                    <div className=' flex  items-center py-2'>
                         <button className=' buttonColor text-black text-2xl font-medium capitalize px-4 py-2 rounded'> password Change</button>
                    </div>
               </div>
          </div>
     );
};

export default PasswordChangePage;