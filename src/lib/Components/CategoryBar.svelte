<script>

</script>

<div class="category-bar">
    <h1 class="header">Categories</h1>
    <div class="column-cat">
        <div class="sale">
            <a href="#">Electronics</a>
            <div class="line"></div>
        </div>
        <div class="sale">
            <a href="#">Clothings</a>
            <div class="line"></div>
        </div>
        <div class="sale">
            <a href="#">Foot wear</a>
            <div class="line"></div>
        </div>
        <div class="sale">
            <a href="#">Bakery</a>
            <div class="line"></div>
        </div>
    </div>

</div>

<style lang="scss">
    .category-bar {
        width: 20%;
        height: 100%;
        background-color: #0C7489;
        margin-left: 2rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        color: white;

        .header {
            margin-top: 2.5rem;
            font-size: 30px;
            font-weight: 500;
            color: white;
        }
        .column-cat {
            width: 160px;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            margin-top: 1.5rem;
            row-gap: 1rem;
            .sale {
                display: flex;
                flex-flow: column nowrap;
                

                a {
                    transition: 0.3s ease-in;
                    font-size: 20px;
                    font-weight: 500;
                    color: white;
                    text-decoration: none;

                    
                }
                .line {
                    width: 0px;
                    height: 2.5px;
                    background-color: transparent;
                    transition: 0.1s ease-in;
                    border: none;
                }

                &:hover .line {
                    width: 160px;
                    background-color: white;
                }

            }
        }


    }

</style>