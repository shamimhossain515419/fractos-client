import mongoose from "mongoose";



const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = `mongodb+srv://FRACTOS123456:EyPk3F6vGG9DA3Ia@fractos.6n07rkt.mongodb.net/ `  
 
  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Leading  database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;
