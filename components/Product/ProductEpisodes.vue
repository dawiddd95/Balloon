<template>
    <div class="wrapper">
        <h2 class="wrapper__title">
            Episodes
        </h2>
        <ul>
            <li v-for="(item, index) in episodes" :key="index" class="wrapper__list">
                <div v-if="index === 0" class="wrapper__item wrapper__item--first">{{ item }}</div>
                <div v-if="index > 0" class="wrapper__item wrapper__item">{{ item }}</div>
            </li>
        </ul>
        
    </div>    
</template>
  
<script>

export default {
    name: 'ProductEpisodes',
    data() {
        return {
            episodes: [
                'S01E01 - Episode name',
                'S01E02 - Episode name',
                'S01E03 - Episode name',
                'S01E04 - Episode name',
                'S01E05 - Episode name',
                'S01E06 - Episode name',
                'S01E07 - Episode name',
                'S01E08 - Episode name',
                'S01E09 - Episode name',
                'S01E10 - Episode name',
                'S01E01 - Episode name',
                'S01E02 - Episode name',
                'S01E03 - Episode name',
                'S01E04 - Episode name',
                'S01E05 - Episode name',
                'S01E06 - Episode name',
                'S01E07 - Episode name',
                'S01E08 - Episode name',
                'S01E09 - Episode name',
                'S01E010 - Episode name',
            ]
        }
        
    }
};
</script>
  
<style scoped lang="scss">
.wrapper {
    padding: 0 0 43px 0;
    max-width: 100%;

    @media screen and (min-width: 1116px) {
        max-width: none;
        width: 546px;
    }

    ul {
        @media screen and (min-width: 1116px) {
            width: 493px;
            height: 340px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding-top: 18px;
        }
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
    }

    &__list {
        list-style: none;
    }

    &__item {
        color: #36373B;
        font-family: Inter Tight;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        margin-top: 12px;

        &--first {
            margin-top: 18px;

            @media screen and (min-width: 1116px) {
                margin-top: 16px;
            }
        }
    }
}
</style>