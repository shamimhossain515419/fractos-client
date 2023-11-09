"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";


const CreateClass = () => {
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>  {
    const classDes=data.des;
    const classLimitStudent=data.limitStudent;
    const classCourseTime=data.courseTime;
    const classPrice=data.price;
    const classPic=data.pic;
     const ClassData = {classPic,classDes,classLimitStudent,classCourseTime,classPrice};
     console.log(ClassData);

    

     }

    return (
          <> 
          <div className="pt-20">
          <p className="gFont2 lg:text-5xl text-3xl  py-10  px-10">Add a new class</p> 
          </div> 
            <div className="px-20 pb-20">
              
              <Link href="/" className='lg:ml-10' to="/" > <button className="mb-5 px-2 py-2 text-center font-bold text-white mt-5 bg-green-800 rounded-md hover:bg-green-900" >
               Back to Dashboard
             </button> </Link>

      <form  onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2">

        <div className="mb-4 lg:mx-10">
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
            className="lg:px-2 py-3 placeholder-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <div className="mb-4 lg:mx-10">
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
            className="lg:px-2 py-3 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <div className="mb-4 lg:mx-10">
          <label
            htmlFor="limitStudent"
            className="block mb-2 text-sm font-bold text-gray-200"
          >
           Limit Student:
          </label>
          <input
            type="text"
            name="limitStudent"
            {...register("limitStudent", { required: true })}
            className="lg:px-2 py-3 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <div className="mb-4 lg:mx-10">
          <label
            htmlFor="courseTime"
            className="block mb-2 text-sm font-bold text-gray-200"
          >
           Course Time:
          </label>
          <input
            type="text"
            name="courseTime"
            {...register("courseTime", { required: true })}
            className="lg:px-2 py-3 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <div className="mb-4 lg:mx-10 mt-5">
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
            className="lg:px-2 py-3 placeholder-white border rounded-md focus:ring-2 focus:ring-blue-500 border-white text-black"
          />
        </div>

        <button
          type="submit"
          className="lg:ml-12 ml-9 mt-10 lg:mr-80 mr-20 my-7 py-4 text-center font-bold text-white bg-green-700 rounded-full hover:bg-green-800"
        >
          Add Class
        </button>
      </form>
             </div>   
             </>
       
    );
};

export default CreateClass;