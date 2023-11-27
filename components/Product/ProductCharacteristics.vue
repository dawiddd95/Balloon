<template>
    <div class="wrapper">
        <h2 class="wrapper__title">
            Characteristics
        </h2>
        <div class="wrapper__item wrapper__item--first">Status: Alive</div>
        <div class="wrapper__item">Origin: Earth</div>
        <div class="wrapper__item">Location: Earth</div>
        <div class="wrapper__item">Species: Human</div>
        <div class="wrapper__item">Gender: Male</div>
    </div>    
</template>
  
<script>

export default {
    name: 'ProductCharacteristics',
};
</script>
  
<style scoped lang="scss">
.wrapper {
    padding: 30px 0 43px 0;
    max-width: 100%;

    @media screen and (min-width: 1116px) {
        padding: 0 111px 0 0;
        max-width: none;
        width: 209px;
    }

    &__title {
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(32, 27, 33, 0.1);
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.5px;

        @media screen and (min-width: 1116px) {
            font-size: 24px;
            font-weight: 700;
            line-height: 24px;
        }
    }

    &__item {
        color: #36373B;
        font-family: Inter Tight;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        margin-top: 16px;

        &--first {
            margin-top: 20px;
        }

        @media screen and (min-width: 1116px) {
            font-size: 18px
        }
    }
}
</style>