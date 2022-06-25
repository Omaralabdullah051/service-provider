<template>
    <div>
            <h2 className='font-bold text-zinc-900 text-center mt-20'>Our Services</h2>
            <div className='grid grid-cols-3 gap-6 p-8'>
                <div v-for="service in services" :key="service.id">
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