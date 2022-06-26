<template>
     <div className='auth-container'>
            <h4 className='text-center font-bold mt-4 text-slate-700'>Please Login</h4>
            <form @submit.prevent="handleSubmit" className='form-container mt-12'>
                <input type="email" name="email" id="email" placeholder='Your Email' v-model="email" required/>
                <p v-if="!email"></p>
                <p className='text-center text-red-700' v-else-if="!/\S+@\S+\.\S+/.test(email)">Please provide a valid email</p>
                <input type="password" name="password" id="password" placeholder='Password' v-model="password" required/>
                <p className='text-center mt-4'>New to this site? <router-link className='text-slate-700 font-bold' to="/register" >Please Register</router-link></p>
                <p className='text-center text-red-700' v-if="errorMsg">{{errorMsg}}</p>
                <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Login" />
            </form>
            <SocialLogin/>
        </div>
</template>

<script>
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword  } from "firebase/auth";
import auth from "../firebase.init";
import {reactive,toRefs,ref} from "vue";
import {useRouter} from "vue-router";
import SocialLogin from "../components/SocialLogin.vue";
    export default {
        name: "LoginA",
        setup(){
            const userInfo = reactive({
                email: '',
                password: '',
            })

            const router = useRouter();

            const errorMsg = ref('');


            const handleSubmit = () => {
                       signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
                       .then((userCredential) => {
                        console.log(userCredential.user);
                        router.push('/');
                       })
                       .catch(error => {
                        console.error(error.code);
                        switch(error.code){
                             case "auth/invalid-email": 
                                errorMsg.value =  "Invalid Email";
                                break;
                             case "auth/user-not-found":
                                errorMsg.value = "User not found";
                                break;
                             case "auth/wrong-password":
                                errorMsg.value = "Wrong password";
                                break;
                             default:
                                errorMsg.value = error.message;
                        }
                       })
               
            }

            return {
                ...toRefs(userInfo),
                errorMsg,
                handleSubmit,
            }
        },
        components: {SocialLogin}
    }
</script>

<style>
.auth-container {
    width: 500px;
    border: 2px solid gray;
    border-radius: 5px;
    margin: 40px auto;
}

.form-container input {
    width: 400px;
    height: 50px;
    border: 2px solid gray;
    border-radius: 2px;
    display: block;
    margin: 30px auto;
    padding-left: 10px;
    font-weight: 600;
} 
</style>