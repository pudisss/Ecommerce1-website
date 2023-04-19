<script lang="ts">
    import type { PageServerData, ActionData } from "./$types";
    // Import svelte components
    import Nav from "$lib/Components/Nav.svelte";
    import CategoryBar from "$lib/Components/CategoryBar.svelte";
    import SaleContainer from "$lib/Components/SaleContainer.svelte";
    import ProductSlideShow from "$lib/Components/ProductSlideShow.svelte";
    


    export let data: PageServerData;

   
    const recommendProduct = data?.recommendProduct;
    

    
    
</script>

<section class="main-section">
    <Nav></Nav>
    <div class="header-row">
        <CategoryBar></CategoryBar>
        <SaleContainer getRecommendProduct={recommendProduct}></SaleContainer>

    </div>

    <ProductSlideShow productInfo={data.productInfo}></ProductSlideShow>

    <footer class="footer">
        <div class="row1">
            <h1 class="shop-name">ImaDev Shop</h1>
            <h5 class="location">Thailand, Bangkok</h5>
            <h5 class="phone-number">066-653-2343</h5>
        </div>
        <div class="row2">
            <h1 class="header">Follow Us:</h1>
            <div class="contact-row">
                <img src="./twitter.svg" alt="" class="twitter">
                <img src="./instagram.svg" alt="" class="instagram">
                <img src="./Facebook.svg" alt="" class="facebook">
                <img src="./Whatsapp.svg" alt="" class="whatapp">
            </div>
        </div>
    </footer>


</section>

<style lang="scss">
    .main-section {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;

        .footer {
            width: 100%;
            height: 40vh;
            background-color: #323232;
            border: none;
            margin-top: 4.5rem;
            display: flex; 
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: space-between;
            color: white;
            .row1 {
                margin-top: 2rem;
                margin-left: 2rem;

                .shop-name {
                    font-size: 30px;
                    font-weight: 500;
                    color: white;
                }
                .location {
                    margin-top: 0.5rem;
                    font-size: 20px;
                    font-weight: 400;
                    color: white;
                }
                .phone-number {
                    margin-top: 1rem;
                    font-size: 18px;
                    font-weight: 400;
                    color: white;
                }

            }
            .row2 {
                margin-top: 2rem;
                margin-left: 2rem;
                margin-bottom: 2rem;
                .header {
                    font-size: 25px;
                    font-weight: 600;
                    color: white;
                    position: relative;
                    bottom: 1rem;
                }
                .contact-row {
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    column-gap: 2rem;
                }
            }
        }

        .header-row {
            column-gap: 2rem;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            width: 100vw;
            height: 85vh;
            margin-top: 1rem;
            
        }
    }

</style>