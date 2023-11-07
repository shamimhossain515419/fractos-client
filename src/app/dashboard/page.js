'use client'
import Dashboard from "@/Components/Dashboard/Dashboard";
import TeacherProfile from "@/Components/TeacherProfile/TeacherProfile";
import { GlobalContext } from "@/GlobalState";
import { useContext } from "react";



const page = () => {


     const { user, openModal, userinfo } = useContext(GlobalContext)
     const Admin = userinfo?.role == 'admin'
     const UserRole = userinfo?.role == 'user'
     const Teachers = userinfo?.role == 'teacher'


     return (
          <div>

               {
                    Admin ? <> <h1 className=" text-4xl flex  justify-center items-center gap-2"> admin dashboard </h1>  </> : Teachers ? <> <TeacherProfile></TeacherProfile> </> : <Dashboard></Dashboard>
               }

          </div>
     );
};

export default page;