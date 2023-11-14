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



export const getAllUser = async (name) => {

  try {
    const res = await fetch(`/api/users/all-users?name=${name}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
    // console.log(data);
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
export const UpdateUser = async (formData) => {

  try {
    const res = await fetch(`/api/users/update-user`, {
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
export const DeleteUser = async (id) => {

  try {
    const res = await fetch(`/api/users/delete-user?id=${id}`, {
      method: "DELETE",

      Authorization: `Bearer ${Cookies.get("token")}`,
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }


} 
