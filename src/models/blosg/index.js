import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

     thumbnail: String,
     title: String,
     date: String,
     timeRequired: Number,
     view: String,
     category: String,
     authorName: String,
     authorImg: String,
     detail: String,
   


},
     { timestamps: true }
);

const Blogs = mongoose.models.blogs || mongoose.model("blogs", UserSchema);

export default Blogs;
