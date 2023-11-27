<template>
    <div class="winter-sale">
        <div class="winter-sale__box">
            <div class="winter-sale__image"></div>
            <div class="winter-sale__content">
                <span class="winter-sale__header winter-sale__header--red">25% OFF</span>
                <span class="winter-sale__header winter-sale__header--black">Winter Sale</span>
                <span class="winter-sale__text">Discover our summer styles with discount</span>
                <button class="winter-sale__button">
                    <span>Shop Now</span>
                    <img src="~/assets/arrow.svg" alt="">
                </button> 
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'WinterSale'
};
</script>
  
<style scoped lang="scss">
.winter-sale {
    padding: 20px 20px 48px 20px;

    @media screen and (min-width: 1116px) {
        padding-bottom: 64px;
    }

    &__box {
        max-width: 100%;
        border-radius: 20px;
        background: #EAEEEF;
        height: 449px;
        overflow: hidden;

        @media screen and (min-width: 500px) {
            height: 520px;
        }

        @media screen and (min-width: 800px) {
            display: flex;
            flex-direction: row-reverse;
            height: 427px;
        }

        @media screen and (min-width: 1116px) {
            max-width: 1116px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    &__image {
        background-image: url('~/assets/winter-sale.png');
        width: 100%;
        height: 170px;
        background-position: center;
        background-size: cover;

        @media screen and (min-width: 500px) {
            height: 250px;
        }

        @media screen and (min-width: 800px) {
            width: 50%;
            height: 100%;
        }

        @media screen and (min-width: 1116px) {
            width: 510px;
            height: 100%;
        }
    }

    &__content {
        padding: 21px 24px 40px 21px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 800px) {
            align-items: flex-start;
        }

        @media screen and (min-width: 800px) {
            width: 542px;
            padding: 64px 0 64px 69px;
        }
    }

    &__header {
        font-family: DM Sans;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -1px;
    }

    &__header--red {
        color: #EC5E2A;
        font-size: 36px;
        line-height: 42px;

        @media screen and (min-width: 800px) {
            font-family: DM Sans;
            font-size: 48px;
            line-height: 56px;
            letter-spacing: -1px;
        }
    }

    &__header--black {
        color: var(--black, #201B21);
        font-size: 48px;
        line-height: 54.75px;

        @media screen and (min-width: 800px) {
            font-family: DM Sans;
            font-size: 64px;
            line-height: 73px;
            letter-spacing: -1px;
        }
    }

    &__text {
        color: var(--grey, #67696E);
        font-family: Inter Tight;
        font-size: 14px;
        font-style: normal;
        line-height: 20px;
        margin-top: 20px;

        @media screen and (min-width: 800px) {
            font-size: 20px;
            line-height: 30px;
        }
    }

    &__button {
        width: 302px;
        padding: 12px;
        border-radius: 10px;
        background: var(--black, #201B21);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 36px;
        border: 0;
        outline: 0;

        @media screen and (min-width: 800px) {
            padding: 20px 80px;
        }

        span {
            color: var(--01, var(--white, #FFF));
            font-family: Inter;
            font-size: 16px;
            line-height: 20px;

            @media screen and (min-width: 800px) {
                font-size: 18px;
            }
        }

        img {
            margin-left: 10px;
            width: 24px;
            height: 24px;
        }
    }
}
</style>