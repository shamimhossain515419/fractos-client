export const PostCounter = async (formData) => {

     try {
          const response = await fetch("/api/admin/counter/counter-post", {
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


export const GetCounter = async () => {
     try {
          const res = await fetch("/api/admin/counter/get-counter", {
               method: "GET",

          });
          const data = await res.json();
          return data?.data;

     } catch (e) {
          console.log(e);
     }

}
export const UpdateCounter = async (formData) => {
     try {
          const res = await fetch(`/api/admin/counter/counter-update`, {
               method: "PUT",
               headers: {
                    "content-type": "application/json",
               },
               body: JSON.stringify(formData),
          });

          const data = await res.json();

          return data;

     } catch (e) {
          console.log(e);
     }

}