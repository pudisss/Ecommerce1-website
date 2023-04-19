<script>
    import { cart, carts } from "$lib/data/cart";
    import { get } from "svelte/store";
    import CartContainer from "./container/CartContainer.svelte";

    $: cartProducts = $carts;

    console.log(cartProducts);
    console.log(cart);


</script>

<div class="show-cart">
    {#each cartProducts as product}
        <CartContainer productInfo={product}></CartContainer>
    {/each}
</div>

<style lang="scss">

    .show-cart {
        width: 80%;
        margin-top: 3.5rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 1.25rem;
    }


</style>
