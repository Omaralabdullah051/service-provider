<template>
        <div className='border-2 rounded-lg p-4 md:px-8 space-y-1 md:space-y-2 bg-slate-600 text-white mb-8 md:mb-8'>
            <img className='mx-auto mb-3 md:mb-8 h-60 lg:h-80 xl:h-3/6' :src="service.img" alt="" />
            <p className='font-semibold md:text-xl'>{{service.name}}</p>
            <p className='md:text-xl'>{{service.price}}</p>
            <p className='text-xs md:text-sm xl:text-base text-justify'>{{service.discription.slice(0, 280)}}{{`.......................................`}}</p>
            <button @click="handleNavigate" className='p-2 bg-slate-800 mt-8 text-white rounded block mx-auto'>Checkout</button>
        </div>
</template>

<script>
import { useRouter } from 'vue-router';
    export default {
        name: "ServiceA",
        setup(){
          const router = useRouter()  ;
          const handleNavigate = () => {
               router.push('/checkout');
          }

          return {
            handleNavigate
          }
        },
        props: ['service']
    }
</script>

<style scoped>

</style>