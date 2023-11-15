
export const SubscribePost = async (fromDate) => {
     try {
          const res = await fetch("/api/subscribe", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(fromDate),
          });

          const data = await res.json();

          return data;

     } catch (e) {
          console.log(e);
     }

}


export const SubscribeGet = async () => {
    
     try {
          const res = await fetch(`/api/subscribe-get`, {
               method: "GET",

          });

          const data = await res.json();

          console.log(data);

          return data?.data;

     } catch (e) {
          console.log(e);
     }
}