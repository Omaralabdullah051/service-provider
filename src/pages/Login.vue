<template>
     <div className='auth-container' data-aos="zoom-out-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
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
import { signInWithEmailAndPassword  } from "firebase/auth";
import auth from "../firebase.init";
import {reactive,toRefs,ref} from "vue";
import {useRouter} from "vue-router";
import SocialLogin from "../components/SocialLogin.vue";
import Swal from 'sweetalert2';
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
                                Swal.fire({
                                   title: 'Error!',
                                   text: "Invalid Email",
                                   icon: 'error',
                                   confirmButtonText: 'Ok',
                                   confirmButtonColor: "#1e293b"
                                });
                                break;
                             case "auth/user-not-found":
                                errorMsg.value = "User not found";
                                Swal.fire({
                                   title: 'Error!',
                                   text: "User not found",
                                   icon: 'error',
                                   confirmButtonText: 'Ok',
                                   confirmButtonColor: "#1e293b"
                                });
                                break;
                             case "auth/wrong-password":
                                errorMsg.value = "Wrong password";
                                Swal.fire({
                                   title: 'Error!',
                                   text: "Wrong password",
                                   icon: 'error',
                                   confirmButtonText: 'Ok',
                                   confirmButtonColor: "#1e293b"
                                });
                                break;
                             default:
                                errorMsg.value = error.message;
                                Swal.fire({
                                   title: 'Error!',
                                   text: error.message,
                                   icon: 'error',
                                   confirmButtonText: 'Ok',
                                   confirmButtonColor: "#1e293b"
                                });
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
