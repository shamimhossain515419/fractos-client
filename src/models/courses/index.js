import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
     subject: String,
     email: String,
     status: Boolean,
     time: String,
     limit: Number,
     price: Number,
     description: String,
     image: String,

     user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Teachers",
          required: true,
        },

     studentIdstudentIdstudentId: [
          {
               type: mongoose.Schema.Types.ObjectId,
               ref: "allUsers",
          },
     ],

},
     { timestamps: true }
);

const TeacherCourse = mongoose.models.teacherCourse || mongoose.model("teacherCourse", UserSchema);

export default TeacherCourse;
