import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
     name: String,
     email: String,
     title: String,
     status: Boolean,
     phone: String,
     cv: String,
     subject: String,
     about: String,
     image: String,
     userIdSet: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "allUsers",
     },

},
     { timestamps: true }
);

const Teachers = mongoose.models.Teachers || mongoose.model("Teachers", UserSchema);

export default Teachers;
