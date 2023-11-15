import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     email: String,
});

const Subscribe = mongoose.models.Subscribe || mongoose.model("Subscribe", UserSchema);

export default Subscribe;
