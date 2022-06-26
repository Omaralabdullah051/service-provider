<template>
      <div className='banner'>
            <div className='container'>
                <div className='title-container'>
                       <h4 className='font-bold text-slate-800 md:text-5xl'>Sports Photographer Services</h4>
                    <p className='text-justify pr-8'>High-quality photography is critical in capturing and engaging the attention of the players.So the pictures shade and landscapes are not efficiently applied at that momment. Professionally shotage and some helpful services is the solution. Here we are intruducing the most efficient way to chapture the high long range pictures and provides some eye catching services that might be helpful for you.</p>
                    <button @click="handleNavigate" className='p-2 text-sm md:text-base bg-slate-700 text-white rounded mt-2'>Explore Our Albums</button>
                </div>
                <div>
                 <img className='mx-auto' src="https://i.postimg.cc/sgYz2cF5/photographer.png" alt="" />
                </div>
            </div>
        </div>
</template>

<script>
import {useRouter} from "vue-router";
    export default {
        name: 'BannerA',
        setup(){
            const router = useRouter();
            const handleNavigate = () => {
                router.push('/info');
            }

            return{
                handleNavigate
            }
        }
    }
</script>

<style scoped>
.banner {
    height: 600px;
    background-image: url("https://i.postimg.cc/Zqzr8JD1/banner.png");
}

.container {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 20px;
    padding-left: 25vh;
    padding-top: 5vh;
}

.title-container {
    padding-top: 20vh;
}

.title-container p {
    margin-top: 20px;
    font-weight: 500;
} 

@media only screen and (max-width:576px) {
    .banner {
        height: 900px;
    }

    .container {
        grid-template-columns: 1fr;
        padding-left: 10px;
        padding-top: 10px;
    }

    .title-container {
        padding-top: 20px;
    }
}

 @media only screen and (min-width:577px) and (max-width:992px) {

    .banner {
        height: 840px;
    }

    .container {
        grid-template-columns: 1fr;
        padding-left: 10px;
        padding-top: 10px;
        width: 100%;
        margin: 0 auto;
    }

    .title-container {
        padding-top: 20px;
    }

}


@media only screen and (min-width:1024px) and (max-width:1280px) {

    .container {
        grid-template-columns: 3fr 2fr;
        width: 100%;
        margin: 0 auto;
    }
}
</style>