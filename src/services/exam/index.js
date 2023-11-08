export const GetSubjectByData = async (name,category) => {

  try {
    const res = await fetch(`/api/exam/get-by-subject?subject=${name}&category=${category}`, {
      method: "GET",
      cache: "no-store"
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }

}



export const QuestionPost = async (formData) => {
  try {
    const response = await fetch("/api/exam/post-questions", {
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
export const GetQuestion = async (subject) => {
  try {
    const response = await fetch(`/api/exam/get-questions?subject=${subject}`, {
      method: "GET",
    });

    const finalData = await response.json();
   return finalData?.data;
  } catch (e) {
    console.log("error", e);
  }
};