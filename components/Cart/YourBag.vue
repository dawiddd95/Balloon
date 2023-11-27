<template>
    <div class="bag">
        <h2 class="bag__title">
            Your Bag
        </h2>
        <BagElement 
            :img="winterSaleImg" 
            name="Summer Smith" 
            price="$98.23" 
            status="Alive" 
            :reverse="true" 
        />
        <BagElement 
            :img="productDetailsImg" 
            name="Morty Smith" 
            price="$98.23" 
            status="Alive" 
            :reverse="false"
        />
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import BagElement from '~/components/Cart/BagElement.vue';

export default Vue.extend({
    name: 'YourBag',
    components: {
        BagElement
    },
    data() {
        return {
            amount: 0, 
            winterSaleImg: require('~/assets/winter-sale.png'),
            productDetailsImg: require("~/assets/product-details.png")
        };
    },
    computed: {
        counterEnable() {
            return {
                opacity: 1
            };
        },
        counterDisable() {
            return {
                opacity: 0.4
            };
        }
    },
    methods: {
        addProduct() {
            this.amount++
        },
        removeProduct() {
            if(this.amount > 0) {
                this.amount--
            }
        }
    },
})
</script>

<style scoped lang="scss">
.bag {
    width: 350px;
    padding: 48px 0 64px 0;
    margin-left: 0;
    margin-right: 0;

    @media screen and (min-width: 400px) {
        width: 100%;
    }

    @media screen and (min-width: 1116px) {
        width: 460px;
        width: 582px;
        padding: 0;
    }

    &__title {
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 28px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -1px;

        @media screen and (min-width: 1116px) {
            font-size: 36px;
            line-height: 48px;
        }
    }

    &__element {
        width: 100%;
        height: 141px;
        padding-bottom: 24px;
        display: flex;
        border-bottom: 1px solid var(--line-grey, #E9EBEE);

        &--img {
            width: 140px;
            height: 141px;
            border-radius: 18.77px;
            transform: scaleX(-1);
        }
    }

    &__data {
        padding-right: 4px;
        margin-left: 20px;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 186px;
    }

    &__name {
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 16px;
        font-style: normal;
        font-weight: bold;
        line-height: 20px;
        letter-spacing: -0.5px;
        margin-bottom: 8px;
    }

    &__price {
        color: var(--black, #201B21);
        text-align: right;
        font-family: DM Sans;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.5px;
    }

    &__status {
        color: var(--grey, #67696E);
        font-family: Inter Tight;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
    }

    &__quantity-counter {
        display: flex;
        padding: 9px 12px;
        align-items: center;
        gap: 12px;
        border-radius: 7.5px;
        border: 0.75px solid var(--line-grey, #E9EBEE);
        box-shadow: 0px 3.33333px 50px 0px rgba(0, 0, 0, 0.08);
        margin: 22px 0 16px 0;
        width: fit-content;

        @media screen and (min-width: 1116px) {
            width: 96px;
            height: 48px;
            justify-content: space-between;
            padding: 0 20px;
            margin: 0 0 56px 36px;
        }

        span {
            color: var(--black, #201B21);
            text-align: center;
            font-family: Inter Tight;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 18px;
            cursor: pointer;
        }
    }

    &__quantity-counter--amount {
        font-size: 13.5px;

        @media screen and (min-width: 1116px) {
            font-size: 18px;
        }
    }

    &__button-remove {
        color: var(--grey, #67696E);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-decoration-line: underline;
        border: 0;
        outline: 0;
        background-color: transparent;
    }
}

</style>