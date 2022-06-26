<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"

export default {
  name: 'HomeA',
  components: {
    Header,
    Footer,
  }
}
</script>

<style src="./assets/tailwind.css" />
