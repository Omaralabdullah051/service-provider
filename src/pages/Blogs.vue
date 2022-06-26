<template>
     <div className='mt-8 md:mt-16 px-8 md:px-16 space-y-20'>
    <Question1/>
    <Question2/>
    <Question3/>
   </div>
</template>

<script>
import Question1 from "../components/Question1.vue";
import Question2 from "../components/Question2.vue";
import Question3 from "../components/Question2.vue";
    export default {
        name: "BlogsA",
        components: {
            Question1,
            Question2,
            Question3,
        }
    }
</script>

<style scoped>

</style>