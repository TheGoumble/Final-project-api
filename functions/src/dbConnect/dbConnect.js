import { MongoClient } from "mongodb"
import "dotenv/config"


const client = new MongoClient(process.env.MONGO_URI)
client.connect()
export const db = client.db("final-project-api")

