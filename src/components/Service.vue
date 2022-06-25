<template>
        <div className='text-justify border-2 rounded-lg p-8 space-y-2 bg-slate-600 text-white'>
            <img className='mx-auto mb-8' :src="service.img" alt="" />
            <h6 className='font-semibold'>{{service.name}}</h6>
            <h5>{{service.price}}</h5>
            <p>{{service.discription.slice(0, 290)}}{{`.......................................`}}</p>
            <button className='p-2 bg-slate-800 mt-8 text-white rounded block mx-auto'>Checkout</button>
        </div>
</template>

<script>
    export default {
        name: "ServiceA",
        props: ['service']
    }
</script>

<style scoped>

</style>