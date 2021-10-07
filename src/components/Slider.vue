<template>
    <div>
        <transition-group name="fade" tag="div">
            <div v-for="photo in [currentIndex]" :key="photo" >
                <img :src="currentImg"/>
            </div>
        </transition-group>    
            <a class="prev" @click="prev" href="#" ><img src="" alt="<"></a>
            <a class="next" @click="next" href="#" ><img src="" alt=">"></a>
    </div>
</template>

<script>
import img1 from '../assets/simg/img1.jpg';
import img2 from '../assets/simg/img2.jpg';
import img3 from '../assets/simg/img3.jpg';
import logo from '../assets/img/logocrop.png';

export default {
    name: 'Slider',
    data(){
        return {
            images: [
                logo,
                img1,
                img2,
                img3
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