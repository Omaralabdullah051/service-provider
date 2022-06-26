<template>
      <div className='mt-20 md:mt-40'>
            <h4 className='text-center text-slate-800 font-bold md:text-4xl'>Additional Services</h4>
               <div className='md:grid grid-cols-2 gap-20 mt-8 mb-5 px-4'>
                <div className="bg-red-500 text-white font-semibold p-6">
                    <div v-for="(service,index) in services1" :key="index">
                     <p><font-awesome-icon class='mr-4' icon="fa-solid fa-check" />{{service}}</p>
                    </div>
                </div>
                    <div className='bg-slate-700 text-white font-semibold p-4'>
                    <div v-for="(service,index) in services2" :key="index">
                      <p><font-awesome-icon class='mr-4' icon="fa-solid fa-check" />{{service}}</p>
                    </div>
                </div>
            </div>
              <div className='mx-4 p-3 bg-teal-400 mb-20 font-semibold md:flex justify-around items-center'>
                <div className='mt-4 md:mt-0'>
                    <div v-for="(service,index) in services3" :key="index">
                     <p className='text-sm md:text-base' ><font-awesome-icon class='mr-4' icon="fa-solid fa-check" />{{service}}</p>
                    </div>
                </div>
                <div>
                    <img className='w-9/12 mx-auto md:w-full' src="images/camera-1.png" alt="" />
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