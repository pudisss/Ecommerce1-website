import { amazonProduct } from "$db/products/amazon";

const getAmazonProduct = async() => {
    const amazon = amazonProduct.find({}, {}).limit(5).toArray();

    return amazon;

}


export default getAmazonProduct;