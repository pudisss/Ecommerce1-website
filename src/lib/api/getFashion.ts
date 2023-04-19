import { fashion } from "$db/products/fashion";

const getFashion = async() => {
    const getFashionProduct = fashion.find({
        likes_count: {$gt: 1000},
        
    }, {}).limit(5).toArray();

    return getFashionProduct;

}

export default getFashion;