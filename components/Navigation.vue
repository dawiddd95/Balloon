<template>
    <nav class="navigation">
        <div class="navigation__container">
            <NuxtLink to="/">
                <img 
                    class="navigation__logo" 
                    src="~/assets/logo.svg" alt="logo"
                >
            </NuxtLink>
            <NuxtLink class="navigation__cart-button" to="/cart">
                <img class="navigation__cart-icon" src="~/assets/cart.svg" alt="cart icon">
                View Cart
                <!-- Showing product amount in cart if we are in cart page (according to designs) -->
                <div v-if="isCartPage" class="navigation__cart-amount">
                    2
                </div>
            </NuxtLink>
        </div>
    </nav>
</template>
  
<script>

export default {
    name: 'NavigationBar',
    computed: {
        // Check if we are on cart page
        isCartPage() {
            return this.$route.path === '/cart'; // Zakładając, że ścieżka do strony koszyka to '/cart'
        }
    },
};
</script>
  
<style scoped lang="scss">
.navigation {
    width: 100%;
    border-bottom: 1px solid #E9EBEE;

    &__container {
        width: calc(100% - 40px);
        padding: 14px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: 1160px) {
            width: 1116px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    &__logo {
        cursor: pointer;
    }

    &__cart-button {
        padding: 10px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #201B21;
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        line-height: 16px;
        border-radius: 8px;
        background-color: white;
        border: 1px solid #201B21;
        cursor: pointer;
        text-decoration: none;

        @media screen and (min-width: 1116px) {
            font-size: 14px;
        }
    }

    &__cart-icon {
        width: 13px;
        height: 16px;
        margin-right: 10px;

        @media screen and (min-width: 1116px) {
            width: 16px;
            height: 24px;
        }
    }

    &__cart-amount {
        width: 16px;
        height: 16px;
        border-radius: 80px;
        background: var(--orange, #EC5E2A);
        color: var(--white, #FFF);
        font-family: Inter Tight;
        font-size: 11px;
        font-weight: 400;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
    }
}
</style>