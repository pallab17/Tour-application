import mongoose from "mongoose";

const URI = "mongodb+srv://pallab:pallab@cluster0.m9gae.mongodb.net/oyo";

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