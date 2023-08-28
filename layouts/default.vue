<!-- eslint-disable vue/no-reserved-component-names -->
<template>
    <div id="app">
        <Header />

        <Nuxt />

        <Footer />
    </div>
</template>

<script>
// Memanggil components
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Header,
        // eslint-disable-next-line vue/no-reserved-component-names
        Footer
    }
} 
</script>

<style></style>
