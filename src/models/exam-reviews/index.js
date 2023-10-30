import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
      email: String,
      exam_name: String,
      right: Array,
      wrong: Array,
      date: String,
      time: String

});

const Exam_review = mongoose.models.exam_review || mongoose.model("exam_review", UserSchema);

export default Exam_review;
