<template>
    <div class="card">
        <h2>
            Summary
        </h2>
        <div class="card__summary">
            <div class="card__row card__row--first">
                <div class="card__row--item">
                    Subtotal
                </div>
                <div class="card__row--amount">
                    $90.00
                </div>
            </div>
            <div class="card__row">
                <div class="card__row--item">
                    Shipping and delivery
                </div>
                <div class="card__row--amount">
                    $20.00
                </div>
            </div>
            <div class="card__row">
                <div class="card__row--item">
                    Tax
                </div>
                <div class="card__row--amount">
                    $6.00
                </div>
            </div>
            <div class="card__row">
                <div class="card__row--item">
                    Discount
                </div>
                <div class="card__row--amount discount">
                    -$6.00
                </div>
            </div>
        </div>
        <div class="card__separator"></div>
        <div class="card__summary">
            <div class="card__row">
                <div class="card__row--item card__row--total">
                    Total
                </div>
                <div class="card__row--amount card__row--total-amount">
                    $164.46
                </div>
            </div>
        </div>
        <div class="card__button">
            Checkout
            <img class="card__arrow" src="~/assets/arrow.svg" alt="">
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CartCard',
})
</script>

<style scoped lang="scss">
.card {
    width: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: var(--white, #FFF);
    box-shadow: 0px 4.44444px 66.66666px 0px rgba(0, 0, 0, 0.08);
    padding: 32px 0;

    @media screen and (min-width: 1116px) {
        width: 460px;
        height: 406px;
        padding: 36px 0 36px 0;
    }

    h2 {
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -1px;
        margin-left: auto;
        margin-right: auto;
        max-width: 302px;

        @media screen and (min-width: 1116px) {
            margin-left: 36px;
        }
    }

    &__summary {
        width: 302px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 1116px) {
            width: 388px;
        }
    }

    &__row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 16px;

        @media screen and (min-width: 1116px) {
            margin-top: 20px;
            font-size: 20px;
        }

        &--first {
            margin-top: 24px;

            @media screen and (min-width: 1116px) {
                margin-top: 32px;
            }
        }

        &--item {
            color: var(--black, #201B21);
            font-family: DM Sans;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: -0.375px;

            @media screen and (min-width: 1116px) {
                font-size: 20px;
                line-height: 24px;
                letter-spacing: -0.5px;
            }
        }

        &--total {
            font-weight: bold;

            @media screen and (min-width: 1116px) {
                font-size: 24px;
                line-height: 32px;
                letter-spacing: -0.5px;
            }
        }

        &--amount {
            color: var(--black, #201B21);
            font-family: DM Sans;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: -0.375px;

            @media screen and (min-width: 1116px) {
                font-size: 20px;
                line-height: 24px;
                letter-spacing: -0.5px;
            }
        }

        &--total-amount {
            @media screen and (min-width: 1116px) {
                font-size: 18px;
                display: flex;
                align-items: center;
            }
        }

        .discount {
            color: #EC5E2A;
        }
    }

    &__separator {
        width: 100%;
        border-bottom: 1px solid var(--line-grey, #E9EBEE);
        margin-top: 20px;

        @media screen and (min-width: 1116px) {
            margin-top: 32px;
        }
    }

    &__button {
        width: 302px;
        height: 48px;
        margin: 32px 0 0 0;
        margin-right: auto;
        margin-left: auto;
        border-radius: 10px;
        background: var(--black, #201B21);
        color: var(--01, var(--white, #FFF));
        font-family: Inter;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 500px) {
            margin-left: auto;
            margin-right: auto;
        }

        @media screen and (min-width: 1116px) {
            margin-top: 32px;
            width: 388px;
            height: 64px;
        }
    }

    &__arrow {
        width: 24px;
        height: 24px;
        margin-left: 10px;
    }
}

</style>