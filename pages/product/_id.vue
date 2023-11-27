<template>
    <div class="product">
        <div class="product__content-wrapper">
            <div class="product__wrapper">
                <div class="product__image-wrapper">
                    <img src="~/assets/product-details.png" class="product__image" />
                    <div class="product__controls">
                        <button 
                            class="product__controls--circle" 
                            :disabled="imageIndex === 0" 
                            @click="previousImage()"
                        >
                            <img src="~/assets/arrow-controls.svg" alt="show previous image"/>
                        </button>
                        <div class="product__controls--dots">
                            <button :style="imageIndex === 0 ? activeDotStyle : inactiveDotStyle" @click="chooseImage(0)"></button>
                            <button :style="imageIndex === 1 ? activeDotStyle : inactiveDotStyle" @click="chooseImage(1)"></button>
                            <button :style="imageIndex === 2 ? activeDotStyle : inactiveDotStyle" @click="chooseImage(2)"></button>
                        </div>
                        <button 
                            class="product__controls--circle product__controls--arrow-next" 
                            :disabled="imageIndex === 3" 
                            @click="nextImage()"
                        >
                            <img src="~/assets/arrow-controls.svg" alt="show next image"/>
                        </button>
                    </div>  
                </div>
                <ProductCard />
            </div>
            <div class="product__episodes-wrapper">
                <ProductCharacteristics />
                <ProductEpisodes />
            </div>
            
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductCard from '~/components/Product/ProductCard.vue'
import ProductCharacteristics from '~/components/Product/ProductCharacteristics.vue';
import ProductEpisodes from '~/components/Product/ProductEpisodes.vue';

export default Vue.extend({
    name: 'ProductPage',
    components: { 
        ProductCard,
        ProductCharacteristics,
        ProductEpisodes
    },
    data() {
        return {
            imageIndex: 0, 
        };
    },
    computed: {
        activeDotStyle() {
            return {
                width: '12px',
                height: '12px',
                background: '#201B21'
            };
        },
        inactiveDotStyle() {
            return {
                width: '8px',
                height: '8px',
                background: '#D2D1D3'
            };
        }
    },
    methods: {
        nextImage() {
            if(this.imageIndex < 2) {
                this.imageIndex++
            }
        },
        previousImage() {
            if(this.imageIndex > 0) {
                this.imageIndex--
            }
        },
        chooseImage(index: number) {
            this.imageIndex = index;
        }
    },
})
</script>

<style scoped lang="scss">
.product {
    max-width: 100%;
    padding: 19px;
    background-color: #f9f9f9;

    @media screen and (min-width: 1116px) {
        padding-top: 32px;
    }

    &__content-wrapper {
        @media screen and (min-width: 1116px) {
            max-width: 1116px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    &__wrapper {
        @media screen and (min-width: 650px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }

    &__image {
        width: 100%;
        height: 240px;
        border-radius: 20px;
        object-fit: cover;

        @media screen and (min-width: 400px) {
            height: 300px;
        }

        @media screen and (min-width: 1116px) {
            width: 546px;
            height: 375px;
        }
    }

    &__controls {
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: 1116px) {
            margin-top: 28px;
        }

        &--circle {
            width: 40px;
            height: 40px;
            fill: var(--white, #FFF);
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

    &__episodes-wrapper {
        @media screen and (min-width: 1116px) {
            width: 866px;
            display: flex;
            margin: 117px auto 31px 50px;
        }
    }
}


</style>
