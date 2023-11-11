import mongoose from "mongoose";

// const URI = "";
const URI = process.env.MONGO_URI;

const connectDB = async () => {
  //let cachedDB = null;

//   if (cachedDB) {
//     return cachedDB;
//   }else{
     //const newDB =
      await mongoose.connect(URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     
    //  cachedDB = newDB;
    //  return newDB;
    console.log("db connected");
  };
 


export default connectDB;