
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     name: String,
     amount: Number,
     email: String,
     status: Boolean,
     category: String,
}, { timestamps: true });

const OrdersPrice = mongoose.models.OrdersPrice || mongoose.model("OrdersPrice", UserSchema);

export default OrdersPrice;










