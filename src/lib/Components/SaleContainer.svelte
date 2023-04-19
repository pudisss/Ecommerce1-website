<script lang="ts">

    export let getRecommendProduct: any;

    let getCategory = getRecommendProduct.category.split("|");
</script>

<div class="sale-container">
    <div class="col1">
        <div class="row1">
            <h1 class="header">BIG SALE    {getRecommendProduct?.discountPercentage}</h1>
            <h3 class="product-name">{getRecommendProduct.productName}</h3>
            <h5 class="category">{getCategory[getCategory.length - 1]}</h5>
        </div>
        <div class="row2">
            <h1 class="price">Price {getRecommendProduct.discountedPrice}</h1>
            <button class="add-to-cart">Add to Cart</button>
        </div>
        
    </div>
    <div class="col2">
        <div class="container">
            <img src={getRecommendProduct.imageLink} alt="">
        </div>
    </div>

</div>

<style lang="scss">

    .sale-container {
        height: 100%;
        width: 80%;
        margin-right: 2rem;
        background-color: #D7D9CE;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        .col1 {
            height: 100%;
            width: 50%;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: space-between;
            margin-left: 2.5rem;

            .row1 {
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-start;
                .header {
                margin-top: 3.5rem;
                
                font-size: 50px;
                font-weight: 700;
                color: black;
                }

                .product-name {
                    font-size: 18px;
                    font-weight: 600;
                    color: black;
                    margin-top: 3.5rem;
                }
                .category {
                    margin-top: 1rem;
                    font-size: 16px;
                    font-weight: 400;
                    color: black;
                }
            }
            .row2 {
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                margin-bottom: 3.5rem;

                .price {
                    font-size: 50px;
                    font-weight: 500;
                    color: black;
                    margin-bottom: 2.5rem;
                }

                .add-to-cart {
                    width: 100%;
                    height: 50px;
                    border: none;
                    font-size: 20px;
                    font-weight: 500;
                    color: white;
                    cursor: pointer;
                    background-color: #13505B;
                }
            }
        }
        .col2 {
            height: 100%;
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .container {
                width: 300px;
                height: 300px;
                border: none;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: center; 
                background-color: white;

                img {
                    width: 200px;
                    height: 200px;
                }
            }
        }

       
    }

</style>