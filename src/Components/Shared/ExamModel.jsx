import React from "react";

const ExamModel = ({ exam }) => {
  return (
    <div className="text-center">
      <p className="text-xl py-1"> {exam} </p>
      <p className="text-sm py-1">Time: 25 minutes</p>
      <p className="text-sm ">
        For each wrong answer, 0.5 mark will be deducted
      </p>
    </div>
  );
};

export default ExamModel;
