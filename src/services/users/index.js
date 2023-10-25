
import Cookies from "js-cookie";

export const registerNewUser = async (formData) => {
  try {
    const response = await fetch("/api/users/post-user", {
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



export const getAllUser = async () => {

  try {
    const res = await fetch("http://localhost:3000/api/users/all-users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }

}

export const GetSingleUser = async (email) => {
  try {
    const res = await fetch(`/api/users/single-user?email=${email}`, {
      method: "GET",
      cache: "no-store"
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }

}


export const jwtSingUp = async (formData) => {
  try {
    const res = await fetch(`/api/users/jwt`, {
      method: "POST",
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