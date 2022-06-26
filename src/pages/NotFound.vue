<template>
    <div className='mt-16 text-center space-y-4'>
            <img className='mx-auto' src="../assets/404.png" alt="" />
            <h4 className='font-bold'>Page Not Found</h4>
            <p className='font-semibold'>This page you are looking for might have been removed or name changed or temporarily unavailable</p>
            <button @click="handleNavigate" className='p-3 bg-slate-700 rounded text-white'>Go to Home</button>
    </div>
</template>

<script>
import {useRouter} from "vue-router";
    export default {
        name: "NotFound",
        setup(){
            const router = useRouter();
            const handleNavigate = () => {
                router.push('/');
            }

            return{
                handleNavigate
            }
        }
    }
</script>

<style scoped>

</style>