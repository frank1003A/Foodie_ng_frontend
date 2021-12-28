<template>
  <div class="bottom-navbar">
      <!--:class="active === true? 'btn btn-main-gradient' : ''" -->
            <div class="bottom-menu">
                <ul>
                    <li>
                        <div>
                            <router-link to="/">
                            <button id="homebtn" class="btn-nav">
                                <img src="../assets/icons/home_32.png"  alt="">
                            </button>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <router-link to="/wallet" >
                            <button id="walletbtn"  class="btn-nav">
                                <img src="../assets/icons/wallet_32.png" alt="">
                            </button>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <router-link to="/cart" >
                            <button id="cartbtn"  class="btn-nav">
                                <img src="../assets/icons/cartt_16.png" alt="">
                                <span class="shop-badge">{{cart.length}}</span>
                            </button>
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <router-link to="/profile" >
                            <button id="profbtn"  class="btn-nav">
                                <img src="../assets/icons/notification_32.png" alt="">
                                <span class="shop-badge">2</span>
                            </button>
                            </router-link>
                        </div>
                    </li>
                    <li>
                         <div>
                            <router-link to="/cravelist" >
                            <button id="cravebtn" class="btn-nav">
                                <img src="../assets/icons/love_32.png" alt="">
                            </button>
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import Home from '../views/Home.vue'
export default {
    name: 'Bottom_Navbar',
    props:{
        categories: Array,
        user: String, 
        cart: Array,
        active: String,
    },
    data() {
        return {
            isActive: false,
        }
    },
    methods: {   
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.bottom-navbar{
       /* height: 10%; */
    width: 100%;
    bottom: 0;
    position: fixed;
    padding: 5px;
    max-height: 70px;
    left: 0;
    right: 0;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    background: white;
    z-index: 100;

        .bottom-menu{
            margin-top: 0;

            li{
                text-align: center;
                display: flex;
                justify-content: center;
                flex-direction: column;
                /* margin-bottom: 1.3rem; */
                //margin-right: 55px;
                cursor: pointer;
            }

            ul{
            display: inline-flex;
            padding: 10px;
            width: 100%;
            justify-content: space-between;
        }


/*
        img {
                width: 40px !important;
                filter: invert(31%) sepia(9%) saturate(9%) hue-rotate(12deg) brightness(98%) contrast(87%);

                &:hover{
                    filter:none;
                }
                
            }
            */
    }

}
.active{
        background: var(--main-gradient);
        border: white;
        border-radius: 8px;
        width: 50px;
        height: 40px;
    }

.btn-nav{
     background: white;
        border: white;
        border-radius: 8px;
        width: 50px;
        height: 40px;
        box-shadow: none;
}

@media only screen and (min-width: 900px){
    .bottom-navbar{
        visibility: hidden;
        display: none;
    }
}
</style>