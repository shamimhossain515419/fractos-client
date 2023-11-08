import { number } from "joi";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     name: String,
     email: String,
     comment: String,
     photo: String,
     title: String,
     rating: Number,


},
     { timestamps: true });

const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", UserSchema);

export default Feedback;
