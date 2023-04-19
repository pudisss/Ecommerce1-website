import type { PageServerLoad, Actions } from "./$types";
import { redirect } from "@sveltejs/kit";
import { userData } from "$db/userData";
import getRecommendProduct  from "$lib/api/getRecommendProduct";
import getAmazonProduct from "$lib/api/getAmazon";
import getElectronicProduct from "$lib/api/getElectronic";
import getFashion from "$lib/api/getFashion";




export const load: PageServerLoad = async({ cookies }) => {
    const shortCookie = cookies.get("shortUserLogin");
    const longCookie = cookies.get("longUserLogin");

    console.log(getRecommendProduct());
  
    if (shortCookie == undefined) {
        throw redirect(303, "/login");

    } else if (longCookie != undefined) {

    }

    // Wraping data 
    const data = await getRecommendProduct();
    const electronicProducts = await getElectronicProduct();
    const fashionProducts = await getFashion();
    const amazonProducts = await getAmazonProduct();

    
   
  

    return {
        recommendProduct: {

            productName: data.product_name,
            category: data["category"],
            discountedPrice: data["discounted_price"],
            actualPrice: data["actual_price"],
            discountPercentage: data["discount_percentage"],
            rating: data["rating"],
            ratingCount: data["rating_count"],
            imageLink: data["img_link"],

        },
       productInfo: {
            electronicList: JSON.stringify(electronicProducts),
            fashionList: JSON.stringify(fashionProducts),
            amazonList: JSON.stringify(amazonProducts),
       }
        
        
        
    }
   

}

export const actions: Actions = {

}


