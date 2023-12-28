import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

let mongodbClient: MongoClient;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export async function connectToDatabase() {
  try {
    if (mongodbClient) {
      return mongodbClient;
    }
    mongodbClient = await MongoClient.connect(MONGODB_URI!);
    console.log("Successfully connected to database");
    return mongodbClient;
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}