<template>
<div class="card-container" v-for="(item, index) in item" :key="index">
    <div class="image-container">
        <img :src="`${item.image}`" alt="image" class="imageself">
    </div>
    <div class="card-footer" id="glass">

            <h4 class="">{{item.name}}</h4>
            <p>{{item.restaurant}}</p>
            <label for="availaibility" class="badge">Festac Town</label>
            <h3 class="">&#8358; {{item.price}}</h3>
                    <div>
                        <button class="btn btn-main-gradient" id="addtoCart">
                            <!--<span class="ti-shopping-cart"></span>-->
                            <span><img src="../assets/icons/cartt_16.png" alt=""></span>
                            <span class="add-badge">+</span>
                        </button>
                    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Menucard',
    props:{
        item: Array
    },
    methods: {
        glassmorph(){
            const glass = document.getElementById('glass')

            const tl = gasp.timeline({default : { ease: "power2.inOut", duration: 1.5}})

            tl.from('img',{x: '-10%', opacity: 0})
        }
    },
    mounted() {
        //this.glassmorph()
    },

}
</script>

<style lang="scss" scoped>

.flex-cl{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.card-container{
    height: 200px;
    //width: 200px;
    border-radius: 8px;
    ///margin: 10px 20px 30px 60px;
    padding: 0.3rem;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.2),
                    -2px -2px 10px rgba(255,255,255,0.8);

    //background: radial-gradient(at 50% 0%, rgba(0,0,0,0), rgba(255,255,255, 0.03));
    position: relative;
    //backdrop-filter: blur(5px);
    border: solid 2px transparent;
    overflow-y: hidden;
    background-clip: padding-box;
    z-index: 1;

    &:hover{
        transform: scale(1.05);
        //backdrop-filter: blur(10px);
        transition: 0.1s ease-in-out;
    }
    .image-container {
    height: 100px;
    border-radius: 8px;
    }

    img.imageself {
    height: 100px;
    border-radius: 8px;
    width: 100%;
    }

    .card-footer{
    bottom: 100%;
    //background: rgb(51, 49, 49);
    display: block;
    margin-top: 5px;
    color: grey;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;

        h4{
            font-size: .85rem;
            font-weight: 700;
            color: black;
            margin-bottom: 1px;
        }

        p{
             font-size: .75rem;
             font-weight: 700;
        }

        h3{
            color: var(--main-color);
            margin-top: 6px;
            font-size: .85rem;
            font-weight: 700;
        }

        label{
            font-size: .8rem;
            display: content;
        }

        button{
            padding: 7px;
            float: right;
            margin-top: -50px;
        }

        .add-badge {
    background: #1D2231;
    border-radius: 50%;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 2px 5px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}
    }

}

</style>