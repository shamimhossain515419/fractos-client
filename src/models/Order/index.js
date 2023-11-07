import { number } from "joi";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
     name: String,
     amount: Number,
     email: String,
     status: Array,
     date: String


},
     { timestamps: true });

const Order = mongoose.models.Order || mongoose.model("Order", UserSchema);

export default Order;
