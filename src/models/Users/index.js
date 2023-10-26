import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  category: String,
  batch: String,
  phone: Number,
  photo: String,
  collage: String,
  about: String,
  rank: Number,
  mark: Number,
  exam: Number,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
