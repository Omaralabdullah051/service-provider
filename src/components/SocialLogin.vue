<template>
    <div>
        <div className='flex justify-centers items-center pl-[23px] md:pl-[55px] mt-4'>
                <div className='w-28 md:w-44 h-1 bg-slate-700'></div>
                <div className='mx-1 md:mx-2'>Or</div>
                <div className='w-28 md:w-44 h-1 bg-slate-700'></div>
            </div>
            <p className='text-center text-red-700' v-if="errorMsg">{{errorMsg}}</p>
            <button @click="signInWithGoogle" className='p-3 bg-slate-700 text-white w-[250px] md:w-[400px] block mx-auto mt-4 mb-8 font-semibold'>Google Sign In</button>
    </div>
</template>

<script>
import {ref} from "vue";
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import auth from '@/firebase.init';
import {useRouter} from "vue-router";
    export default {
        name: "SocialLogin",
        setup(){
            const errorMsg = ref('');

            const router = useRouter();

            const signInWithGoogle = () => {
               const provider = new GoogleAuthProvider();
               signInWithPopup(auth, provider)
               .then((result) => {
                console.log(result.user);
                router.push("/");
               })
               .catch((error) => {
                 console.error(error.code);
                        switch(error.code){
                             case "auth/account-exists-with-different-credential":
                                errorMsg.value = "Doesn't allow to log in with same email that exists with different credential";
                                break;
                             case "auth/popup-closed-by-user":
                                errorMsg.value = "popup closed. Please don't close the popup";
                                break;
                             default:
                                errorMsg.value = error.message;
                        }
               })
            }

            return{
                errorMsg,
                signInWithGoogle
            }
        }
    }
</script>

<style scoped>

</style>