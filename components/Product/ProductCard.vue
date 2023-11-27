<template>
    <div class="card">
        <div class="card__wrapper--top">
            <div class="card__name">
                Morty Smith
            </div>
            <div class="card__status">
                Status: Alive; Origin: Earth;
            </div>
            <div class="card__price">
                $98.99
            </div>
        </div>
        <div class="card__separator"></div>
        <div class="card__wrapper--bottom">
            <div class="card__quantity">
                Quanity
            </div>
            <div class="card__quantity-counter">
                <span 
                    class="card__quantity-counter--remove"
                    :style="amount <= 0 ? counterDisable : counterEnable"
                    :disabled="amount <= 0"
                    @click="removeProduct()"
                >
                    -
                </span>
                <span class="card__quantity-counter--amount">{{ amount }}</span>
                <span class="card__quantity-counter--add" @click="addProduct()">+</span>
            </div>
            <button class="card__add-to-cart">
                Add to Cart
            </button>
        </div>
    </div>    
</template>
  
<script>

export default {
    name: 'ProductCard',
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
};
</script>
  
<style scoped lang="scss">
.card {
    max-width: 100%;
    height: 301px;
    border-radius: 15px;
    margin-top: 24px;
    background: var(--white, #FFF);
    box-shadow: 0px 3.33333px 50px 0px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 650px) {
        max-width: 90%;
        margin-top: 0;
        margin-left: 20px;
    }

    @media screen and (min-width: 1116px) {
        width: 528px;
        height: 443px;
        margin-left: 42px;
    }

    &__wrapper--top {
        padding: 24px 24px 18.5px 27px;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 1116px) {
            padding: 36px 36px 32px 36px;
        }
    }

    &__wrapper--bottom {
        padding: 18px 0 25px 0;
        display: flex;
        flex-direction: column;
    }

    &__name {
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: -0.375px;

        @media screen and (min-width: 1116px) {
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            letter-spacing: -0.5px;
        }
    }

    &__status {
        color: var(--grey, #67696E);
        font-family: Inter Tight;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        margin-top: 6px;

        @media screen and (min-width: 1116px) {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            margin-top: 8px;
        }
    }

    &__price {
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: -0.375px;
        margin-top: 13.5px;

        @media screen and (min-width: 1116px) {
            font-size: 24px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: -0.5px;
        }
    }

    &__separator {
        width: 100%;
        border-bottom: 1px solid var(--line-grey, #E9EBEE);
    }

    &__quantity {
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 13.5px;
        font-style: normal;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: -0.375px;
        padding: 0 16px 0 27px;

        @media screen and (min-width: 1116px) {
            font-size: 18px;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: -0.5px;
            padding: 14px 0px 16px 36px;
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
        margin: 12px 16px 28px 27px;
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

    &__add-to-cart {
        display: flex;
        width: 302px;
        padding: 12px 80px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: var(--black, #201B21);
        border: 0;
        outline: 0;
        margin: 0 auto;
        color: var(--01, var(--white, #FFF));
        font-family: Inter Tight;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;

        @media screen and (min-width: 500px) {
            max-width: 90%;
            padding: 12px 0;
        }

        @media screen and (min-width: 1116px) {
            width: 456px;
            max-width: none;
            height: 60px;
            padding: 0;
            font-size: 18px;
            margin: 0 0 0 36px;
        }
    }
}
</style>