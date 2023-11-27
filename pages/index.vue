<template>
    <div class="wrapper">
        <WinterSale />
        <LatestDrops :characters="characters" :prices="prices"/>
    </div> 
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex';
import WinterSale from '~/components/WinterSale.vue';
import LatestDrops from '~/components/LatestDrops.vue';

export default Vue.extend({
    name: 'IndexPage',
    components: { WinterSale, LatestDrops },
    // Here we can define different layout than default.vue if needed
    layout: 'default',
    async fetch({ store }) {
        // calling action fetchCharacters from module characters
        await store.dispatch('characters/fetchCharacters');
    },
    computed: {
        // Mapping 'characters' getter from module 'characters'
        ...mapGetters('characters', ['characters']),
        // Mapping 'prices'getter
        ...mapGetters('characters', ['prices']),
    }
})
</script>

<style scoped lang="scss">
.wrapper {
    background-color: #f9f9f9;
}
</style>
