<template>
      <div className='camera-container text-justify h-[480px]'>
            <img :src="camera.img" alt="" />
            <h4>{{camera.title}}</h4>
            <p>{{camera.discription}}</p>
        </div>
</template>

<script>
    export default {
        name: 'CameraA',
        props: ['camera'],
    }
</script>

<style scoped>
.camera-container {
    border-radius: 55px;
    background: #e0e0e0;
    box-shadow: inset 19px 19px 38px #868686,
        inset -19px -19px 38px #ffffff;
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 50px;
}

.camera-container img {
    margin: 0 auto;
}

.camera-container h4 {
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
}

.camera-container p {
    font-weight: 500;
} 

@media only screen and (max-width:576px) {
    .camera-container {
        padding: 10px 20px;
        padding-bottom: 30px;
        margin: 30px auto;
    }
}

@media only screen and (min-width:1024px) and (max-width:1200px) {

    .camera-container p {
        font-size: 13px;
    }

    .camera-container {
        padding: 10px 20px;
        padding-bottom: 30px;
        margin: 30px auto;
    }
} 
</style>