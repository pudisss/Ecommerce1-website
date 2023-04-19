import { writable, type Writable } from "svelte/store";


interface Cart {
    productName: string;
    productPrice: number;
    productImage: string;
    id: number
}

let cart: Cart[] = [];
let carts: Writable<Cart[]> = writable([]);

export { cart ,carts, type Cart}