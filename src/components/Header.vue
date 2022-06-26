<template>
     <div className='h-12 bg-zinc-400 flex justify-center items-center'>
            <nav className='nav-bar'>
                <ul>
                    <router-link to="/">Home</router-link>
                    <router-link to="/checkout">Checkout</router-link>
                    <router-link to="/blogs">Blogs</router-link>
                    <router-link to="/About">About</router-link>
                    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
                    <button v-else-if="isLoggedIn" @click="handleSignOut">Sign out</button>
                </ul>
            </nav>
        </div>
</template>

<script>
import { onAuthStateChanged ,signOut} from "firebase/auth";
import auth from '@/firebase.init';
import {ref,onMounted} from "vue";
import {useRouter} from "vue-router";
    export default {
        name: "HeaderA",
        setup(){
            const isLoggedIn = ref(false);
            const router = useRouter();

            onMounted(()=> {
                onAuthStateChanged(auth,(user) => {
                    if(user){
                      isLoggedIn.value = true;            
                    } else{
                        isLoggedIn.value = false;
                    }
                })
            })

            const handleSignOut = () => {
                signOut(auth).then(() => {
                    router.push('/login');
                })
            }

            return {
                isLoggedIn,
                handleSignOut
            }
        }
        }

</script>

<style scoped>
.nav-bar a {
    margin-right: 30px;
} 
</style>