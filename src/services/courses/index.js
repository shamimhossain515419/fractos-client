export const PostCourses = async (formData) => {

     try {
          const response = await fetch("/api/courses/courses-post", {
               method: "POST",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(formData),
          });

          const finalData = await response.json();

          return finalData;
     } catch (e) {
          console.log("error", e);
     }
}


export const GetCourses = async () => {
     try {
          const res = await fetch("/api/courses/courses-get-all", {
               method: "GET",

          });

          const data = await res.json();

          return data?.data;

     } catch (e) {
          console.log(e);
     }

}