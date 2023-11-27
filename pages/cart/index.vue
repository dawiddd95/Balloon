<template>
    <div class="cart">
        <div class="cart__wrapper">
            <CartCard />
            <YourBag />
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import CartCard from '~/components/Cart/CartCard.vue';
import YourBag from '~/components/Cart/YourBag.vue';

export default Vue.extend({
    name: 'CartPage',
    components: { 
        CartCard,
        YourBag
    },
})
</script>

<style scoped lang="scss">
.cart {
    width: 100%;
    min-height: calc(100vh - 147px);
    background-color: #FCFCFC;

    &__wrapper {
        max-width: 350px;
        margin-left: auto;
        margin-right: auto;
        padding: 19px 0 64px 0;

        @media screen and (min-width: 400px) {
            max-width: 95%;
        }

        @media screen and (min-width: 1116px) {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            max-width: 1116px;
        }
    }
}


</style>