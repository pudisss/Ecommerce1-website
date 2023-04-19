<script lang="ts">
    // Import svelte component
    import { carts } from "$lib/data/cart";
  
    export let productInfo: any;

    // Function
    const removeProduct = (id: number) => {
        let removeProductId = $carts.filter(items => items.id != id);

        carts.set(removeProductId);

    }
</script>

<div class="cart-container">
    <div class="col1">
        <img src={productInfo?.productImage} alt="" class="product-image">
        <div class="info">
            <h3 class="product-name">{productInfo?.productName}</h3>
            <h3 class="product-price">{productInfo?.productPrice}$</h3>

        </div>
    </div>
   
    <div class="col2">
        <button class="remove-button" on:click={() => removeProduct(productInfo?.id)}>
            Remove
        </button>
    </div>

</div>

<style lang="scss">
    .cart-container {
        width: 100%;
        height: 302px;
        background-color: #F8F9F7;
        border: none;
        border-radius: 3px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        .col2 {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            height: 255px;
            justify-content: flex-end;
            margin-right: 3rem;
            .remove-button {
                width: 162px;
                height: 50px;
                background-color: #13505B;
                border: none;
                font-size: 20px;
                font-weight: 400;
                color: white;
                cursor: pointer;
                transition: 0.3s ease-in;

                &:hover {
                    border: 2px solid #13505B;
                    background-color: transparent;
                    color: #13505B;
                }
            }
        }

        .col1 {
            margin-left: 2rem;
            display: flex;
            align-items: center;
            column-gap: 3rem;
            .info {
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
                height: 255px;
                justify-content: space-between;

                .product-name {
                    width: 300px;
                    font-size: 30px;
                    font-weight: 600;
                    color: black;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    text-align: left;
                }
                .product-price {
                    font-size: 25px;
                    font-weight: 500;
                    color: black;

                }
            }
            .product-image {
                width: 255px;
                height: 255px;

            }
        }
    }

</style>