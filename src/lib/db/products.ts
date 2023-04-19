import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import { MONGO_URL_PRODUCTS } from "$env/static/private";


const client = new MongoClient(MONGO_URL_PRODUCTS);

export function start_products_mongo(): Promise<MongoClient> {
    console.log("Starting Mongo...");
    return client.connect();

}

export default client.db();