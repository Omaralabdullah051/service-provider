<template>
     <div className='h-12 bg-zinc-400 flex justify-center items-center'>
            <nav className='nav-bar'>
                <ul>
                    <router-link to="/">Home</router-link>
                    <router-link to="/checkout">Checkout</router-link>
                    <router-link to="/blogs">Blogs</router-link>
                    <router-link to="/About">About</router-link>
                    <router-link to="/login">Login</router-link>
                </ul>
            </nav>
        </div>
</template>

<script>
    export default {
        name: "HeaderA"
    }
</script>

<style scoped>
.nav-bar a {
    margin-right: 30px;
} 
</style>