<!-- eslint-disable vue/no-reserved-component-names -->
<template>
    <div id="app">
        <HeaderPage />

        <Nuxt />

        <FooterPage />
    </div>
</template>

<script>
// Memanggil components
import Header from "@/components/HeaderPage.vue"
import Footer from "@/components/FooterPage.vue"

export default {
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names, vue/no-unused-components
        Header,
        // eslint-disable-next-line vue/no-reserved-component-names, vue/no-unused-components
        Footer
    }
} 
</script>

<style></style>
