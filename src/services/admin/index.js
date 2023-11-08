export const GetAllDetails = async () => {

     try {

          const res = await fetch('/api/admin/all-details', {
               method: "GET"

          })
          const result = await res.json();
         
          return result.data

     } catch (e) {
          console.log(e);
     }
}