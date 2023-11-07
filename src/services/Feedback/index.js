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