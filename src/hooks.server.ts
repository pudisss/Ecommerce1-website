import { startMongo } from "$db/mongo";
import { start_products_mongo } from "$db/products";


await startMongo().then(() => {
    console.log("Mongo started");
}).catch(err => {
    console.log(err);
})



await start_products_mongo().then(() => {
    console.log("Product mongo started");

}).catch(err => {
    console.error(err);
})