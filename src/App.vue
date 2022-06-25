<template>
  <Header/>
  <router-view/>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'HomeA',
  components: {
    Header,
  }
}
</script>

<style src="./assets/tailwind.css" />
