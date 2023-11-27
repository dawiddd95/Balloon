<template>
    <div class="latest-drops">
        <h2 class="latest-drops__header">
            Explore our latest drops
        </h2>
        <div class="latest-drops__characters">
            <button 
                v-for="(character, index) in characters" 
                :key="character.id" 
                class="latest-drops__character" 
                @click="() => redirectToProduct(character.id)"
            >
                <img class="latest-drops__character--img" :src="character.image" alt="" />
                <span class="latest-drops__character--name">{{ character.name }}</span>
                <span class="latest-drops__character--text">Status: {{ character.status }}</span>
                <span class="latest-drops__character--text">Origin: {{ character.origin.name }}</span>
                <span class="latest-drops__character--text">Species: {{ character.species }}</span>
                <span class="latest-drops__character--price">
                    {{ prices[index] }}
                </span>
            </button>
        </div>
        <div class="latest-drops__controls">
            <button class="latest-drops__controls--circle">
                <img src="~/assets/arrow-controls.svg" alt="show previous image"/>
            </button>
            <button class="latest-drops__controls--circle latest-drops__controls--arrow-next" >
                <img src="~/assets/arrow-controls.svg" alt="show next image"/>
            </button> 
        </div>
        
    </div>
</template>


<script>
export default {
    name: 'LatestDrops',
    props: {
        characters: {
            type: Array,
            required: true
        },
        prices: {
            type: Array,
            required: true,
        }
    },
    methods: {
        redirectToProduct(id) {
            this.$router.push(`/product/${id}`);
        }
    }
};
</script>
  
<style scoped lang="scss">
.latest-drops {
    padding: 0 20px 14px 20px;
    overflow: hidden;    

    @media screen and (min-width: 1160px) {
        width: 1116px;
        margin-left: auto;
        margin-right: auto;
    }

    &__header {
        color: var(--black, #201B21);
        font-family: DM Sans;
        font-size: 28px;
        font-weight: 700;
        line-height: 36px; 
        letter-spacing: -1px;

        @media screen and (min-width: 1116px) {
            font-size: 36px;
            font-weight: 700;
            line-height: 48px;
        }
    }

    &__characters {
        display: flex;
        gap: 16px;
        min-width: 831px; 
        overflow: hidden;

        @media screen and (min-width: 1116px) {
            padding: 0 0 64px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    &__character {
        background-color: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        min-width: 195.7px;
        display: flex;
        flex-direction: column;
        margin-top: 24px;

        @media screen and (min-width: 1116px) {
            width: 261px;
            display: flex;
            flex-direction: column;
            margin-top: 32px;
        }

        &--img {
            width: 195.7px;
            height: 213px;
            border-radius: 18.77px;

            @media screen and (min-width: 1116px) {
                width: 261px;
                height: 284px;
            }
        }

        &--name {
            color: var(--black, #201B21);
            font-family: DM Sans;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; 
            letter-spacing: -0.5px;
            margin-top: 18px;
            font-size: 20px;
        }

        &--text {
            color: var(--grey, #67696E);
            font-family: Inter Tight;
            text-align: left;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; 
            margin-top: 6px;
        }

        &--price {
            color: var(--black, #201B21);
            font-family: DM Sans;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            margin-top: 14px;
            letter-spacing: -0.5px;

            @media screen and (min-width: 1116px) {
                font-size: 18px;
                line-height: 24px;
            }
        }
    }

    &__controls {
        margin-top: 14px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        @media screen and (min-width: 1116px) {
            margin-top: 28px;
        }

        &--circle {
            width: 40px;
            height: 40px;
            filter: drop-shadow(0px 4.444px 66.667px rgba(0, 0, 0, 0.08)) 
            drop-shadow(0px 4.444px 66.667px rgba(0, 0, 0, 0.08));
            border-radius: 50%;
            background-color: #FFF;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            outline: 0;
            cursor: pointer;

            @media screen and (min-width: 1116px) {
                display: none;
            }

            &:last-child {
                margin-left: 14px;
            }
        }

        &--arrow-next {
            transform: rotate(180deg);
        }

        &--dots {
            display: flex;
            align-items: center;

            button {
                outline: none;
                border: 0;
                border-radius: 50%;
                margin-left: 4px;
                margin-right: 4px;
            }
        }
    }
}
</style>