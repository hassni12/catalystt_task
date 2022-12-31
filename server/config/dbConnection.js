import mongoose from "mongoose";
export const dbConnection = () => {
  try {
    mongoose.set("strictQuery", false);
     mongoose.connect(process.env.DATABASE,()=>{
        console.log("Connected to database..." );
        
    })
  } catch (error) {
    console.log(`${error.message}`);
  }
}
