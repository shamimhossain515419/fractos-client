export const GetAdmissionYear = async (name, university) => {

     try {
          const res = await fetch(`/api/admission/get-by-Id-question?subject=${name}&university=${university}`, {
               method: "GET",
               cache: "no-store"
          });
          const data = await res.json();
          return data?.data;
     } catch (error) {
          console.log(error);
     }

}



export const AdmissionQuestionPost = async (formData) => {
     try {
          const response = await fetch("/api/admission/post-questions", {
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


export const GetAdmission = async () => {
     try {
          const response = await fetch("/api/admission/all-admission", {
               method: "GET",
          });

          const finalData = await response.json();
          return finalData?.data;
     } catch (e) {
          console.log("error", e);
     }
};
export const admissionSingleData = async (university) => {

     try {
          const response = await fetch(`/api/admission/admissionBlogSingleData?university=${university}`, {
               method: "GET",
          });
          const finalData = await response.json();
          return finalData?.data;

     } catch (e) {
          console.log(e);
     }
}

export const GetAdmissionBlog = async (search) => {
     try {
          const response = await fetch(`/api/admission/admissionGet?subject=${search}`, {
               method: "GET",
          });

          const finalData = await response.json();
          return finalData?.data;
     } catch (e) {
          console.log("error", e);
     }
};