<template>
  <Banner />
  <Cameras/>
  <Services/>
  <AdditionalServices/>
</template>

<script>
import Banner from "../components/Banner.vue"
import Cameras from "../components/Cameras.vue";
import Services from "../components/Services.vue";
import AdditionalServices from "../components/AdditionalServices.vue";

export default {
  name: 'HomeA',
  components: {
    Banner,
    Cameras,
    Services,
    AdditionalServices,
  }
}
</script>


