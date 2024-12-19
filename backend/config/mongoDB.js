import mongoose from 'mongoose'

const connectDB=async()=>{
   try {
      const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
      console.log(`\nMongoDb connected ! DB HOST: ${connectionInstance.connection.host}`)
   } catch (error) {
      console.log("Error in connection",error)
      throw error;
   }
}

export default connectDB