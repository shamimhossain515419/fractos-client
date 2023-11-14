import Cookies from "js-cookie";

export const TeacherApply = async (fromDate) => {
     try {
          const res = await fetch("/api/teacher/teacher-post", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Cookies.get("token")}`,
               },
               body: JSON.stringify(fromDate),
          });

          const data = await res.json();

          return data;

     } catch (e) {
          console.log(e);
     }

}
export const GetSingleTeacher = async (email) => {
     console.log(email);
     try {
          const res = await fetch(`/api/teacher/get-single-teacher?email=${email}`, {
               method: "GET",

          });

          const data = await res.json();

          console.log(data);

          return data?.data;

     } catch (e) {
          console.log(e);
     }

}
export const TeacherGet = async () => {
     try {
          const res = await fetch("/api/teacher/teacher-get", {
               method: "GET",
          });

          const data = await res.json();

          console.log(data);

          return data?.data;

     } catch (e) {
          console.log(e);
     }

}
export const Teacherupdate = async (fromDate) => {
     try {
          const res = await fetch("/api/teacher/teacher-update", {
               method: "PUT",
               body: JSON.stringify(fromDate),
          });

          const data = await res.json();

          return data;

     } catch (e) {
          console.log(e);
     }

}

export const DeleteUser = async (email) => {

     try {
          const res = await fetch(`/api/teacher/delete-teacher?email=${email}`, {
               method: "DELETE",

               Authorization: `Bearer ${Cookies.get("token")}`,
          });

          const data = await res.json();

          return data;
     } catch (e) {
          console.log(e);
     }

}   