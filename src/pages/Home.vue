<template>
  <Banner />
  <Cameras/>
</template>

<script>
import Banner from "../components/Banner.vue"
import Cameras from "../components/Cameras.vue";

export default {
  name: 'HomeA',
  components: {
    Banner,
    Cameras,
  }
}
</script>


