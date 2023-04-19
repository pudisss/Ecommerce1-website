<script lang="ts">
    import { get } from "svelte/store";
    import { cart, carts } from "$lib/data/cart";
    export let category: string;
    export let product;

    const productInfo = JSON.parse(product);

    let productNames: string[] = [];

    if (category == "Electronics") {
        for (const product of productInfo) {
            productNames.push(product["product_name"].split("|")[0].split("(")[0]);
        }
    }

    // Function
    const addToCart = (productName: string, productPrice: number | string, productImage: string) => {
        if (typeof productPrice == "string") {
            let price = productPrice.replace(/\,/g, '');
            let numbers = price.split("");
            numbers.shift();
            let productPriceNumber = Number(numbers.join(""));
           
        
            let addCart = {
                productName: productName,
                productPrice: productPriceNumber,
                productImage: productImage,
                id: Math.floor(Math.random() * 10000)
            };
          
            cart.push(addCart);
            carts.update(data => [...data, addCart]);

            console.log($carts);

            

            
            

        } else  {
            let addCart = {
                productName: productName,
                productPrice: productPrice,
                productImage: productImage,
                id: Math.floor(Math.random() * 10000)
            };
            
            cart.push(addCart);
            carts.update(data => [...data, addCart]);
            console.log($carts);
            

            
        }
    }

    
    
    
</script>

<div class="product-slide">
    <div class="category-header">
        <h2 class="category">{category}</h2>
        <a href="#" class="show-more">See more >></a>

    </div>
    <div class="row">
        {#each productInfo as product, id}
            
            <div class="container">
                <div class="image-container">
                    <img src={product["img_link"] ?? product["image_url"]} alt="" class="image">
                    
                </div>
                <h2 class="product-name">{productNames[id] ?? product["name"] ?? product["product_name"]}</h2>
                <h5 class="product-price">{product["actual_price"] ?? product["current_price"]}</h5>
                <button class="add" on:click={() => addToCart(productNames[id] ?? product["name"] ?? product["product_name"], product["actual_price"] ?? product["current_price"], product["img_link"] ?? product["image_url"])}>Add to Cart</button>
            </div>
        {/each}
    </div>

    
</div>


<style lang="scss">

    .product-slide {
        
        width: 95vw;
        height: 70vh;

        .row {
            margin-bottom: 1rem;
            margin-top: 1rem;
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            column-gap: 1rem;
            .product-name {
                font-size: 20px;
                font-weight: 500;
                color: black;
                margin-top: 1rem;
                width: 80%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                text-align: left;
                
            }
            .product-price {
                font-size: 16px;
                font-weight: 500;
                color: black;
                text-align: left;
                width: 80%;
                margin-top: 1rem;
            }
            .add {
                width: 80%;
                height: 40px;
                background-color: #13505B;
                border: none;
                font-size: 20px;
                font-weight: 500;
                color: white;
                margin-top: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in;

                &:hover {
                    border: 2px solid #13505B;
                    background-color: transparent;
                    color: #13505B;
                }
            }
            .container {
                height: 100%;
                width: 20%;
                background-color: rgba(215, 217, 206, 0.17);
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                transition: 0.3s ease-in;
                cursor: pointer;
            
                

               

                .image-container {
                    width: 200px;
                    height: 150px;
                    background-color: white;
                    border: none;
                    border-radius: 8px;
                    margin-top: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .image {
                        margin: 1rem;
                        width: 150px;
                        height: 150px;
                    }
                }
            }
        }

        .category-header {
            
            width: 100%;
            height: 5vh;
            background-color: #D7D9CE;
            border: none;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;

            .category {
                font-size: 20px;
                font-weight: 600;
                color: black;
                margin-left: 2.5rem;
            }
            .show-more {
                font-size: 16px;
                font-weight: 600;
                color: #13505B;
                text-decoration: none;
                margin-right: 2rem;
            }
        }
        
               
    }

</style>