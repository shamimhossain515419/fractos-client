

export const BlogPost = async (fromDate) => {
     console.log(fromDate);
     try {
          const res = await fetch("/api/blogs/blogs-post", {
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
export const GetSingleBlogs = async (id) => {
    try {
          const res = await fetch(`/api/blogs/blogs-by-id?id=${id}`, {
               method: "GET",

          });

          const data = await res.json();

          console.log(data);

          return data?.data;

     } catch (e) {
          console.log(e);
     }

}
export const BlogGet = async () => {
     try {
          const res = await fetch("/api/blogs/blogs-get", {
               method: "GET",
          });

          const data = await res.json();

          console.log(data);

          return data?.data;

     } catch (e) {
          console.log(e);
     }

}
