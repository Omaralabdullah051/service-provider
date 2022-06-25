<template>
      <div className='camera-container text-justify'>
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
</style>