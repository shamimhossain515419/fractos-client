import Cookies from "js-cookie";

export const FeedbackPost = async (fromDate) => {

     try {
          const res = await fetch("/api/feedback", {
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
export const FeedbackGet = async () => {

     try {
          const res = await fetch("/api/getFeedback", {
               method: "GET",

          });

          const data = await res.json();

          return data?.data;
     } catch (e) {
          console.log(e);
     }


}