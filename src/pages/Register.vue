<template>
     <div className='auth-container' data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <h4 className='text-center font-bold mt-4 text-slate-700'>Please Register</h4>
            <form @submit.prevent="handleSubmit" className='form-container mt-12'>
                <input type="text" name="name" id="name" placeholder='Your name' v-model="name" required/>
                <input type="email" name="email" id="email" placeholder='Your Email' v-model="email" required/>
                <p v-if="!email"></p>
                <p className='text-center text-red-700' v-else-if="!/\S+@\S+\.\S+/.test(email)">Please provide a valid email</p>
                <input type="password" name="password" id="password" placeholder='Password' v-model="password" required/>
                <p v-if="!password"></p>
                <p className='text-center text-red-700 text-sm px-8' v-else-if="!/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(password)">Your password must contain at least one digit, lowercase, special character and min 8 characters</p>
                <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm password' v-model="confirmPassword" required/>
                <p v-if="!confirmPassword"></p>
                <p className='text-center text-red-700' v-else-if="password !== confirmPassword">Your two password doesn't matched</p>
                <p className='text-center mt-4'>Already have an account? <router-link className='text-slate-700 font-bold' to="/login" >Please Login</router-link></p>
                <p className='text-center text-red-700' v-if="errorMsg">{{errorMsg}}</p>
                <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Register" />
            </form>
            <SocialLogin/>
        </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import {reactive,toRefs,ref} from "vue";
import {useRouter} from "vue-router";
import SocialLogin from "../components/SocialLogin.vue";
import Swal from 'sweetalert2';

    export default {
        name: "RegisterA",
        setup(){
            const router = useRouter();
            const userInfo = reactive({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

            const errorMsg = ref('');


            const handleSubmit = () => {
                
                if(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(userInfo.password)){
                   if(userInfo.password === userInfo.confirmPassword){
                       createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
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
                             case "auth/email-already-in-use":
                                errorMsg.value = "This email is already in used";
                                Swal.fire({
                                   title: 'Error!',
                                   text: "This email is already in used",
                                   icon: 'error',
                                   confirmButtonText: 'Ok',
                                   confirmButtonColor: "#1e293b"
                                });            
                                break;
                             case "auth/email-already-exists":
                                errorMsg.value = "Email already exists";
                                Swal.fire({
                                   title: 'Error!',
                                   text: "Email already exists",
                                   icon: 'error',
                                   confirmButtonText: 'Ok',
                                   confirmButtonColor: "#1e293b"
                                });            
                                break;
                             case "auth/invalid-credential":
                                errorMsg.value = "Doesn't allow creation of multiple account with the same email";
                                Swal.fire({
                                   title: 'Error!',
                                   text: "Doesn't allow creation of multiple account with the same email",
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
                   } else{
                    Swal.fire({
                        title: 'Error!',
                        text: "Your two password doesn't matched",
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: "#1e293b"
                    });
                   }
                } else{
                        Swal.fire({
                        title: 'Error!',
                        text: "Your password must contain at least one digit, lowercase, special character and min 8 characters",
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: "#1e293b"
                    })
                }
               
            }

            return {
                ...toRefs(userInfo),
                errorMsg,
                handleSubmit
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

@media only screen and (max-width:576px) {
    .auth-container {
        width: 320px;
        margin: 40px auto;
        border: 0px;
    }

    .form-container input {
        width: 300px;
        height: 50px;
        margin: 25px auto;
        margin-bottom: 0px;
        padding-left: 10px;
        font-weight: 600;
    }

} 
</style>