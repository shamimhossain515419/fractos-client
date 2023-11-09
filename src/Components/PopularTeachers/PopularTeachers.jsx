import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import "./PopularTeachers.css";

const PopularTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  // const {id,name,image,description}=teachers;

  useEffect(() => {
    fetch("teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div id="popularTeachers-part">
      <h1 className="text-3xl uppercase re  primary text-center font-bold mb-10">
        Popular Teachers
      </h1>

      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {teachers.map((teacher) => (
            <PopularTeacher key={teacher.id} teacher={teacher}></PopularTeacher>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularTeachers;
