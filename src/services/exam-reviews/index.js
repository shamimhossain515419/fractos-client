export const GetExam_reviews = async (email) => {
 
     try {
       const res = await fetch(`/api/exam-reviews/get-exam-reviews?email=${email}`, {
         method: "GET",
         cache: "no-store"
       });
       const data = await res.json();
       return data?.data;
     } catch (error) {
       console.log(error);
     }
   
   }


   export const GetExam_by_id = async (id) => {
 
    try {
      const res = await fetch(`/api/exam-reviews/get-by-id?id=${id}`, {
        method: "GET",
        cache: "no-store"
      });
      const data = await res.json();
      return data?.data;
    } catch (error) {
      console.log(error);
    }
  
  }




   
export const PostExamReviews = async (formData) => {
  try {
    const response = await fetch("/api/exam-reviews/post-exam-review", {
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
};