
import Container from "../Container/Container";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import "./PopularTeachers.css";
import CommonTitle from "../CommonTitle/CommonTitle";
import { TeacherGet } from "@/services/teacher";

const PopularTeachers = async () => {

  const teachers = await TeacherGet();



  return (
    <div id="popularTeachers-part">
      <h1 className="text-3xl uppercase re  primary text-center font-bold mb-10">
        <CommonTitle title={" Popular Teachers"}></CommonTitle>
      </h1>

      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 md:gap-5">
          {teachers?.map((teacher) => (
            <PopularTeacher key={teacher._id} teacher={teacher}></PopularTeacher>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularTeachers;
