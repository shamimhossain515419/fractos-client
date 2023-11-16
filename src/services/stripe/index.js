import Cookies from "js-cookie";

export const callStripeSession = async (formData) => {
     try {
          const res = await fetch("/api/stripe", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Cookies.get("token")}`,
               },
               body: JSON.stringify(formData),
          });

          const data = await res.json();

          return data;
     } catch (e) {
          console.log(e);
     }
};


export const callCourses = async (formData) => {
     try {
          const res = await fetch("/api/stripe2", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${Cookies.get("token")}`,
               },
               body: JSON.stringify(formData),
          });

          const data = await res.json();

          return data;
     } catch (e) {
          console.log(e);
     }
};


export const createFinalOrder = async (fromDate) => {
     try {
          const res = await fetch("/api/order/createOrder", {
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
export const createCoursesOrder = async (fromDate) => {
     try {
          const res = await fetch("/api/order-course", {
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
export const get_all_order_courses = async () => {
     try {
          const res = await fetch("/api/order/get-all-order-courses", {
               method: "GET",

          });
          const data = await res.json();

          return data?.data;
     } catch (e) {
          console.log(e);
     }
}
export const Single_order_courses = async (email) => {
     try {
          const res = await fetch(`/api/order/my-course?email${email}`, {
               method: "GET",

          });

          const data = await res.json();

          return data?.data;
     } catch (e) {
          console.log(e);
     }
}