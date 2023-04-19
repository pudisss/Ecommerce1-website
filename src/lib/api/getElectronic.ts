import { amazonProduct } from "$lib/db/products/amazon";


const productCategory = "Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones";  
const getElectronicProduct = async() => {
    const amazonProductList = await amazonProduct.find({
        category: productCategory,
        rating: {$gt: 4}
    }).sort({rating: 1}).limit(5).toArray();
    return amazonProductList;
}


export default getElectronicProduct;