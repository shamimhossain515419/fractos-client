import mongoose from "mongoose";

const allDetailSchema = new mongoose.Schema(
     {
      

     },
     { timestamps: true }
);

const AllDetails = mongoose.models.allDetails || mongoose.model("allDetails", allDetailSchema);
export default AllDetails;
