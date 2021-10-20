<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-for="photo in [currentIndex]" :key="photo" >
                <img :src="currentImg"/>
            </div>
        </transition-group>
        <!--
          <a class="prev" @click="prev" href="#" ><img src="" alt="<"></a>
        <a class="next" @click="next" href="#" ><img src="" alt=">"></a> 
        -->
    </div>
</template>

<script>
import ad1 from '../assets/ad/ad1.jpg';
import ad2 from '../assets/ad/ad2.jpg';
import ad3 from '../assets/ad/ad3.jpg';
import ad4 from '../assets/ad/ad4.jpg';
import ad5 from '../assets/ad/ad5.jpg';
import ad6 from '../assets/ad/ad6.jpg';
import ad7 from '../assets/ad/ad7.png';


export default {
    name: 'Slider',
    data(){
        return {
            images: [
                ad1,
                ad2,
                ad3,
                ad4,
                ad5,
                ad6,
                ad7
            ],
            timer: null,
            currentIndex: 0
        }
    },
    mounted() {
        this.startSlide();
    },
    methods: {
        startSlide(){
            this.timer = setInterval(this.next, 4000)
        },
        next(){
            this.currentIndex += 1
        },
        prev(){
            this.currentIndex -= 1
        }
    },
    computed:{
        currentImg() {
            return this.images[Math.abs(this.currentIndex) % this.images.length]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/slider.scss'
</style>