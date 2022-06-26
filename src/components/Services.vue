<template>
    <div>
             <h4 className='font-bold text-slate-800 text-center mt-8 md:mt-20 md:text-4xl' data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000">Our Services</h4>
            <div className='lg:grid grid-cols-3 lg:gap-2 xl:gap-6 p-3 xl:p-8'>
                <div v-for="service in services" :key="service.id" data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
                    <Service :service="service"/>
                </div>
            </div>
    </div>
</template>

<script>
import {ref} from "vue";
import Service from "./Service.vue";
    export default {
        name: 'ServicesA',
        setup(){
                const services = ref([]);
                
                const getServices = () => {
                    fetch('services.json')
                     .then(res => res.json())
                     .then(data => {
                        services.value = data
                     })
                }
                getServices();

                return {
                    services
                }
        },
        components: {Service}
    }
</script>

<style scoped>

</style>