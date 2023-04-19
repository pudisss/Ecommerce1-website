import { electronic } from "$lib/db/products/electronics";
import { amazonProduct } from "$lib/db/products/amazon";




const getRecommendProduct = async () => {
  
    const productCategory = "Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones";    
    const electronicProduct = await electronic.find({
        'reviews.doRecommend': true,
        'reviews.rating': 5,
    
    }, {
        
    }).sort({
        'reviews.rating': 1
    }).limit(100).toArray();


    const amazonProductList = await amazonProduct.find({
        category: productCategory,
        rating: {$gt: 4}
    }).sort({rating: -1}).limit(10).toArray();


    const randomIndex = Math.floor(Math.random() * amazonProductList.length);

    return amazonProductList[randomIndex];



    
}

export default getRecommendProduct;