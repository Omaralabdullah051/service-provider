<template>
     <div className='mt-20'>
            <h3 className='font-bold text-center text-slate-800'>Landscape photography</h3>
            <div className='grid grid-cols-3 gap-10 p-12'>
            <div v-for="camera in cameraInfo" :key="camera.id">
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