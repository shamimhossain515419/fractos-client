
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
     CollegeName: String,
     image: String,
     exam: Array,
     date: Date,
     path: Array,
     description: String,
     department: String,

});

const admissionBlog = mongoose.models.admissionBlog || mongoose.model("admissionBlog", UserSchema);

export default admissionBlog;
