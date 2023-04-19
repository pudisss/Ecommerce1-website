// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
interface productInfo {
    
	_id: string,
	
	product_id: string;
	product_name: string;
	category: string;
	discounted_price: string;
	actual_price: string;
	discount_percentage: string;
	rating: number;
	rating_count: string;
	about_product: string;
	user_id:string;
	user_name: string;
	review_id: string;
	review_title: string;
	review_content: string;
	img_link: string;
	product_link: string;
  
}
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {productInfo};
