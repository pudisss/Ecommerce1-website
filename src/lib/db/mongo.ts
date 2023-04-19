import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { MONGO_URL } from "$env/static/private";


const client = new MongoClient(MONGO_URL);

export function startMongo(): Promise<MongoClient> {
    console.log("Starting Mongo...");
    return client.connect();
}

export default client.db();