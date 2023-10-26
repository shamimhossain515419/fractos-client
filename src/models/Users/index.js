import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  category: String,
  batch: String,
  phone: Number,
  collage: String,
  about: String,
  rank: Number,
  mark: Number,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
