<script>
    // Import svelte component
    import Nav from "$lib/Components/Nav.svelte";
    import ShowCart from "$lib/Components/ShowCart.svelte";
</script>

<section class="cart-page-section">
    <Nav></Nav>
    <ShowCart></ShowCart>

</section>

<style lang="scss">

    .cart-page-section {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

</style>