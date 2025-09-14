import mongoose from "mongoose";


async function connectDb() {
  await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connect to db");
    
  });
}


export default connectDb