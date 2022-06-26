<template>
    <div className='mt-40'>
            <h3 className='text-center text-slate-800 font-bold'>Additional Services</h3>
            <div className='grid grid-cols-2 gap-20 mt-8 mb-5 px-2'>
                <div className="bg-red-500 text-white font-semibold p-6">
                    <div v-for="(service,index) in services1" :key="index">
                     <p><font-awesome-icon class='mr-4' icon="fa-solid fa-check" />{{service}}</p>
                    </div>
                </div>
                <div className='bg-slate-700 text-white font-semibold p-6'>
                    <div v-for="(service,index) in services2" :key="index">
                      <p><font-awesome-icon class='mr-4' icon="fa-solid fa-check" />{{service}}</p>
                    </div>
                </div>
            </div>
            <div className='mx-2 p-6 bg-teal-400 mb-20 font-semibold flex justify-around items-center'>
                <div>
                    <div v-for="(service,index) in services3" :key="index">
                     <p><font-awesome-icon class='mr-4' icon="fa-solid fa-check" />{{service}}</p>
                    </div>
                </div>
                <div>
                    <img src="images/camera-1.png" alt="" />
                </div>
            </div>
    </div>
</template>

<script>
import {ref} from "vue";
    export default {
        name: "AdditionalServices",
        setup(){
            const services1 = ref([]);
            const services2 = ref([]);
            const services3 = ref([]);

            const getServicesInfo = () => {
                fetch('additional-services.json')
                 .then(res => res.json())
                 .then(data => {
                    console.log(data);
                    services1.value = data[0];
                    services2.value = data[1];
                    services3.value = data[2];
                 })
            }
            getServicesInfo();

            return{
                services1,
                services2,
                services3
            }
        }
    }
</script>

<style scoped>

</style>