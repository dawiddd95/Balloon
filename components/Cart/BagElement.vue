<template>
    <div class="element">
        <img class="element__img" :src="img" :style="reverseImg"/>
        <div class="element__data">
            <div class="element__header">
                <span class="element__name">{{ name }}</span>
                <span class="element__price">{{ price }}</span>
            </div>
            <span class="element__status">
                Status: {{ status }}
            </span>
            <div class="element__quantity-counter">
                <span 
                    class="element__quantity-counter--remove"
                    :style="amount <= 0 ? counterDisable : counterEnable"
                    :disabled="amount <= 0"
                    @click="removeProduct()"
                >
                    -
                </span>
                <span class="element__quantity-counter--amount">{{ amount }}</span>
                <span class="element__quantity-counter--add" @click="addProduct()">+</span>
            </div>
            <button class="element__button-remove">
                Remove
            </button>
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'BagElement',
    props: {
        img: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        price: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            default: ''
        },
        reverse: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            amount: 0, 
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
        },
        reverseImg() {
            if(this.reverse) {
                return {
                    transform: 'scaleX(-1)'
                }
            } else {
                return {
                    transform: 'scaleX(1)'
                }
                
            }
        },

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
.element {
    width: 100%;
    height: 141px;
    padding-bottom: 24px;
    display: flex;
    border-bottom: 1px solid var(--line-grey, #E9EBEE);
    margin-top: 24px;

    @media screen and (min-width: 1116px) {
        margin-top: 28px;
        height: auto;
    }

    &__img {
        width: 140px;
        height: 141px;
        border-radius: 18.77px;

        @media screen and (min-width: 1116px) {
            width: 165px;
            height: 169px;
        }
    }

    &__data {
        padding-right: 4px;
        margin-left: 20px;

        @media screen and (min-width: 1116px) {
            margin-left: 32.33px;
            display: grid;
            position: relative;
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 186px;

        @media screen and (min-width: 1116px) {
            width: 410px;
        }
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

        @media screen and (min-width: 1116px) {
            font-size: 20px;
            line-height: 24px; 
        }
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

        @media screen and (min-width: 1116px) {
            font-size: 18px;
            line-height: 24px;
        }
    }

    &__status {
        color: var(--grey, #67696E);
        font-family: Inter Tight;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;

        @media screen and (min-width: 1116px) {
            font-size: 18px;
            line-height: 24px;
        }
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
        background-color: transparent;

        @media screen and (min-width: 1116px) {
            padding: 12px 16px;
            margin: 64px 30px 0 0;
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

        @media screen and (min-width: 1116px) {
            position: absolute;
            bottom: 10px;
            font-size: 16px;
            line-height: 24px; 
            left: 116px;
        }
    }
}


</style>