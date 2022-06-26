<template>
     <div className='auth-container'>
            <h4 className='text-center font-bold mt-4 text-slate-700'>Please Register</h4>
            <form @submit.prevent="handleSubmit" className='form-container mt-12'>
                <input type="text" name="name" id="name" placeholder='Your name' v-model="name" required/>
                <input type="email" name="email" id="email" placeholder='Your Email' v-model="email" required/>
                <p v-if="!email"></p>
                <p className='text-center text-red-700' v-else-if="!/\S+@\S+\.\S+/.test(email)">Please provide a valid email</p>
                <input type="password" name="password" id="password" placeholder='Password' v-model="password" required/>
                <p v-if="!password"></p>
                <p className='text-center text-red-700' v-else-if="!/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(password)">Your password must contain at least one digit, lowercase, special character and min 8 characters</p>
                <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm password' v-model="confirmPassword" required/>
                <p v-if="!confirmPassword"></p>
                <p className='text-center text-red-700' v-else-if="password !== confirmPassword">Your two password doesn't matched</p>
                <p className='text-center text-red-700' v-if="errorMsg">{{errorMsg}}</p>
                <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Register" />
            </form>
            <div className='flex justify-centers items-center pl-[55px]'>
                <div className='w-44 h-1 bg-slate-700'></div>
                <div className='mx-2'>Or</div>
                <div className='w-44 h-1 bg-slate-700'></div>
            </div>
            <button className='p-2 bg-slate-700 text-white w-[400px] block mx-auto mt-4 mb-8 font-semibold'>Google Sign In</button>
        </div>
</template>

<script>
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import {reactive,toRefs,ref} from "vue";
import {useRouter} from "vue-router";
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
                                break;
                             case "auth/email-already-in-use":
                                errorMsg.value = "This email is already in used";
                                break;
                             case "auth/email-already-exists":
                                errorMsg.value = "Email already exists";
                                break;
                             case "auth/invalid-credential":
                                errorMsg.value = "Doesn't allow creation of multiple account with the same email"
                                break;
                             default:
                                errorMsg.value = error.message;
                        }
                       })
                   } else{
                    alert("Your two password doesn't matched");
                   }
                } else{
                    alert("Your password must contain at least one digit, lowercase, special character and min 8 characters")
                }
               
            }

            return {
                ...toRefs(userInfo),
                errorMsg,
                handleSubmit
            }
        }
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