<template>
    <div>
        <!-- Navigation component which be on every page in default layout  -->
        <Navigation />
        <!-- Dynamic content of page -->
        <Nuxt />
        <!-- Navigation component which be on every page in default layout  -->
        <FooterComponent />
    </div>
</template>
  
<script>
import Navigation from '~/components/Navigation.vue';
import FooterComponent from '~/components/Footer.vue';

export default {
    components: {
        Navigation,
        FooterComponent,
    }
};
</script>
  
<style>
* {
    margin: 0;
    padding: 0;
}
</style>