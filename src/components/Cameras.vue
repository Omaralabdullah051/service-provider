<template>
     <div className='mt-20'>
              <h4 className='font-bold text-center text-slate-800 md:text-4xl' data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000">Landscape photography</h4>
             <div className='lg:grid grid-cols-3 lg:gap-4 xl:gap-10 p-3 lg:p-4 xl:p-12'>
            <div v-for="camera in cameraInfo" :key="camera.id" data-aos="zoom-in-right"
            data-aos-easing="linear"
            data-aos-duration="1000">
                    <Camera :camera="camera"/>
            </div>
            </div>
        </div >
</template>

<script>
import {ref} from "vue";
import Camera from "./Camera.vue";
    export default {
        name:"CamerasA",
        setup(){
                const cameraInfo = ref([]);
                
                const getCameraInfo = () => {
                    fetch('camera.json')
                     .then(res => res.json())
                     .then(data => {
                        cameraInfo.value = data
                     })
                }
                getCameraInfo();

                return {
                    cameraInfo
                }
        },
        components: {Camera}
    }
</script>

<style scoped>

</style>