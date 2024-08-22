import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env",
  );
}

async function dbConnect() {
  mongoose.connect(MONGODB_URI).then((mongoose) => {
    console.log("Db connected");
    return mongoose;
  });
}

export default dbConnect;
