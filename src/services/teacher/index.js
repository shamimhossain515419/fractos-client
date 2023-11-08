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
export const TeacherGet = async () => {
     try {
          const res = await fetch("/api/teacher/teacher-get", {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Cookies.get("token")}`,
               },
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