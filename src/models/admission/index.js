import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
     exam_name: String,
     title: String,
     university: String,
     questions: Array,

});

const Admission = mongoose.models.Admission || mongoose.model("Admission", UserSchema);

export default Admission;
