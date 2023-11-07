"use client"
import { useForm } from "react-hook-form";


const CreateClass = () => {
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>  {
    const classDes=data.des;
    const classPrice=data.price;
    const classPic=data.pic;
     const ClassData = {classPic,classDes,classPrice};
     console.log(ClassData);

    

     }

    return (
          <> 
          <div className="">
          <p className="gFont2 text-5xl pt-32  py-5 px-10">Add a new class</p> 
          </div> 
            <div className="px-20 pb-20">
              
              <p className='ml-10' to="/" > <button className="mb-5 px-2 py-2 text-center font-bold text-white mt-5 bg-green-800 rounded-md hover:bg-green-900" >
               Back to Dashboard
             </button> </p>

      <form  onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2">

        <div className="mb-4 mx-10">
          <label
            htmlFor="pic"
            className="block mb-2 text-sm font-bold text-gray-200"
          >
           Class Picture:
          </label>
          <input
            type="text"
            name="pic"
            {...register("pic", { required: true })}
            className="w-full px-3 py-1 placeholder-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="des"
            className="block mb-2 text-sm font-bold text-gray-200"
          >
           Class Description:
          </label>
          <input
            type="text"
            name="des"
            {...register("des", { required: true })}
            className="w-full px-3 py-1 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <div className="mb-4 mx-10 mt-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-bold text-gray-200"
          >
            Price:
          </label>
          <input
            type="text"
            name="price"
            {...register("price", { required: true })}
            className="w-full px-3 py-1 placeholder-white border rounded-md focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <button
          type="submit"
          className="mx-10 my-8 px-4 py-2 text-center font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Class
        </button>
      </form>
             </div>   
             </>
       
    );
};

export default CreateClass;