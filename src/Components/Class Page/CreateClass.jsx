"use client"
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Notification from "../Notification/Notification";
import { PostCourses } from "@/services/courses";
import { GlobalContext } from "@/GlobalState";
import { useRouter } from "next/navigation";
import { GetSingleTeacher } from "@/services/teacher";







const CreateClass = () => {

  const router = useRouter();
  const [image, setImage] = useState("");
  const { user, userInfo } = useContext(GlobalContext)
  const [Teacher, setTeacher] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {

    const getuser = async () => {
      const data = await GetSingleTeacher(user?.email);
      console.log(data,"shamimadf");
      setTeacher(data)
    }
    getuser();

  }, [user])
 console.log(Teacher,"fgdfgadffgadfgdf");
  const onSubmit = async data => {
    console.log(data);
    const newData = { ...data, image, user: Teacher?._id, status: false };

    const result = await PostCourses(newData);

    if (result?.success == true) {
      toast.success(result?.message);
      router.push('/dashboard/my-course')
    }

  }


  const handleImage = (e) => {
    const file = e.target.files[0];

    const Imagebb_URL = `https://api.imgbb.com/1/upload?key=9203b0f26f76133e3002ac28554baf7a`
    const formData = new FormData();
    formData.append('image', file);
    fetch(Imagebb_URL, {
      method: "POST",
      body: formData
    }).then(res => res.json()).then(data => {
      console.log(data);
      if (data?.success == true) {
        console.log(data);
        const photo = data?.data?.display_url
        setImage(photo)
      }
    }).catch(error => {
      toast.error("File Upload Not Working")
    });

  };





  return (
    <div className=" secondBg p-10 rounded-md ">
      <div className="pt-20 ">
        <p className="gFont2 md:text-5xl text-2xl  primary text-center  py-10 md:px-10 px-4 lg:ml-10">Add a new class</p>
      </div>
      <div className="lg:px-20 px-5 pb-20">



        <form onSubmit={handleSubmit(onSubmit)} >

          <div className="grid grid-cols-1 lg:grid-cols-2">


            <div className="mb-4 lg:ml-10 mx-0">
              <label
                htmlFor="pic"
                className="block mb-2 text-sm font-bold text-gray-200"
              >
                Subject subject:
              </label>
              <input
                type="text"
                name="pic"
                {...register("subject", { required: true })}
                placeholder="Ex: Subject name"
                className="w-full lg:px-2 py-3 primaryBg text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white "
              />
            </div>


            <div className="mb-4 lg:ml-10 mx-0">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-bold text-gray-200"
              >
                Class time:
              </label>
              <input
                type="text"
                name="time"
                {...register("time", { required: true })}
                placeholder="Ex: Course time"
                className="w-full lg:px-2 py-3 primaryBg text-white  primaryBg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white "
              />
            </div>
            <div className="mb-4 lg:ml-10 mx-0">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-200"
              >
                Student    limit:
              </label>
              <input
                type="number"
                name="limit"
                placeholder="Ex: Student  limit"
                {...register("limit", { required: true })}
                className="w-full lg:px-2 py-3 primaryBg text-white  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white "
              />
            </div>
            <div className="mb-4 lg:ml-10 mx-0">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-bold text-gray-200"
              >
                price :
              </label>
              <input
                type="number"
                name="price"
                {...register("price", { required: true })}
                placeholder="Ex: Course  price"
                className="w-full lg:px-2 py-3 primaryBg text-white  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white "
              />
            </div>

            <div className="mb-4 lg:ml-10 mx-0">
              <label
                htmlFor="des"
                className="block mb-2 text-sm font-bold text-gray-200"
              >
                Class description:
              </label>
              <textarea rows={5}
                type="text"
                name="description"
                placeholder="Ex: Course  description"
                {...register("description", { required: true })}
                className="w-full lg:px-2 py-3 primaryBg text-white  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-white "
              />
            </div>

          </div>



          <div>
            {
              image ? <p className=" lg:ml-10">  {image} </p> : <>  <label className='   lg:ml-10 text-white cursor-pointer  rounded-full left-16' htmlFor="image">
                <input onChange={handleImage} type="file" name="" id="image" />
              </label></>
            }



          </div>

          <div className=" flex pt-5 justify-center items-center gap-2">
            <button
              type="submit"
              className="  text-black md:w-[350px] px-5 py-3 rounded-xl text-base md:text-xl font-semibold  buttonColor   "
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
      <Notification></Notification>
    </div>

  );
};

export default CreateClass;