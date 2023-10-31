import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  exam_name: String,
  questions: Array,
  
});

const Questions = mongoose.models.questions || mongoose.model("questions", UserSchema);

export default Questions;
