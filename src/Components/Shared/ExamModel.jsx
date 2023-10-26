import React from "react";

const ExamModel = ({ exam, time, mark }) => {
  return (
    <div className="text-center py-9">
      <p className="text-xl md:text-xl  font-medium  py-1"> Test exam online {exam} </p>
      <div className=" flex justify-center gap-2">
        <p className="text-sm  md:text-base py-1">Time: {time} minutes</p>
        <p className="text-sm md:text-base py-1">Total mark: {mark} minutes</p>
      </div>
      <p className="text-sm  md:text-lg">
        For each wrong answer, 0.5 mark will be deducted
      </p>
    </div>
  );
};

export default ExamModel;
