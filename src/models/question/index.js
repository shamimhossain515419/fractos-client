import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  exam_name: String,
  questions: Array
  
});

const Question = mongoose.models.question || mongoose.model("question", UserSchema);

export default Question;
