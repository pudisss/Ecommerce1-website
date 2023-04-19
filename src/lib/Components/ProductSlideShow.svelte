<script lang="ts">
    // Import product container
    import ProductSlide from "./ProductSlide.svelte";

    
    export let productInfo: any;

    
    
</script>

<section class="product-slide-show-section">
    <ProductSlide category={"Electronics"} product={productInfo.electronicList}></ProductSlide>
    <ProductSlide category={"Fashion"} product={productInfo.fashionList}></ProductSlide>
    <ProductSlide category={"Casual things"} product={productInfo.amazonList}></ProductSlide>

</section>

<style lang="scss">
    .product-slide-show-section {
        overflow-y: hidden;
        width: 100vw;
        height: 150vh;
        background-color: white;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 2rem;
        margin-top: 3.5rem;
        overflow-x: hidden;
        margin-bottom: 3.5rem;
        border: 0px solid black;

        
    }

</style>