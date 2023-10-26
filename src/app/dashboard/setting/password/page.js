


const PasswordChangePage = () => {

     return (
          <div>
               <div className=' my-2'>
                    <h1 className=' text-base md:text-xl font-normal'> Password</h1>
                    <p className=' text-sm md:text-base font-normal'>  Set a new password </p>
               </div>

               <div>
                    <div className=' py-2'>
                         <label className='' htmlFor="pb-1">Old Password</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="password" placeholder='Old password' />
                    </div>
                    <div className=' py-2'>
                         <label className='' htmlFor="py-1">Old Password</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="password" placeholder='Old password' />
                    </div>
                    <div className=' py-2'>
                         <label className=' py-1' htmlFor="">confirm new password</label>
                         <input className='  shadow bg-transparent  block w-full  px-2 py-2 rounded-md outline-1 outline-[#27895C] border-[#00000072] border  text-base  font-normal' type="password" placeholder='confirm new password' />
                    </div>
                    <div className=' flex  items-center py-2'>
                         <button className=' primaryBg text-white px-4 py-2 rounded'> password Change</button>
                    </div>
               </div>
          </div>
     );
};

export default PasswordChangePage;