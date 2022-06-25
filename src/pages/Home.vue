<template>
  <Banner />
  <Cameras/>
  <Services/>
</template>

<script>
import Banner from "../components/Banner.vue"
import Cameras from "../components/Cameras.vue";
import Services from "../components/Services.vue";

export default {
  name: 'HomeA',
  components: {
    Banner,
    Cameras,
    Services,
  }
}
</script>


