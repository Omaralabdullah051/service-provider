<template>
    <footer className="bg-slate-800 mt-80">
            <div className='md:flex justify-around items-center text-center md:text-justify'>
                <div>
                    <img className='mx-auto w-3/6 md:mx-0 md:w-full' src="images/camera-2.png" alt="" />
                </div>
                <div className='text-white space-y-3'>
                    <h6>Contact Info</h6>
                    <p><font-awesome-icon class='mr-4' icon="fa-solid fa-phone" />+1 (212)-695-3818</p>
                    <p><font-awesome-icon class='mr-4' icon="fa-solid fa-envelope" />info@serviceup.com</p>
                    <p><font-awesome-icon class='mr-4' icon="fa-solid fa-location-dot" />463 7th Ave, NY 10018, BD</p>
                </div>
            </div>
            <p className='text-white text-center p-10'><small><FontAwesomeIcon className='mr-1' icon={faCopyright} />{{year}}. All Right Reserved</small></p>
        </footer>
</template>

<script>
    export default {
        name: "FooterA",
        setup(){
             const year = new Date().getFullYear();

             return{
                year
             }
        }
    }
</script>

<style scoped>

</style>