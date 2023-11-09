import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

     orders: Number,
     reviews: Number,
     questions: Number,
     student: Number,


},
     { timestamps: true }
);

const Counters = mongoose.models.Counters || mongoose.model("Counters", UserSchema);

export default Counters;
