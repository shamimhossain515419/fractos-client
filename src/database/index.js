import mongoose from "mongoose";



const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =`mongodb+srv://${process.env.VITE_USER}:${process.env.VITE_PASSWORD}@cluster0.dvvalm2.mongodb.net/`;
 
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Leading  database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
