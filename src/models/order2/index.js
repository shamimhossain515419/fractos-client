import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
     name: String,
     amount: Number,
     email: String,
     status: Boolean,
     address: String,
     course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "teacherCourse",

     },
     user: {
          type: mongoose.Schema.ObjectId,
          ref: 'allUsers'
     }
}, { timestamps: true });

const OrderCourse = mongoose.models.OrderCourse || mongoose.model("OrderCourse", OrderSchema);

export default OrderCourse;
