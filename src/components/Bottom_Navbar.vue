<template>
  <div class="bottom-navbar">
      <!--:class="active === true? 'btn btn-main-gradient' : ''" -->
            <div class="bottom-menu">
                <ul>
                    <li @click="active = true" class="" >
                        <div>
                            <router-link to="/" >
                            <img src="../assets/icons/home_32.png" alt="">
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true" >
                        <div>
                            <router-link to="/wallet" >
                            <img src="../assets/icons/wallet_32.png" alt="">
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true" >
                        <div>
                            <router-link to="/cravelist" >
                            <img src="../assets/icons/love_32.png" alt="">
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true" >
                        <div>
                            <router-link to="/profile" >
                            <img src="../assets/icons/profile_32.png" alt="">
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true" >
                        <div>
                            <img src="../assets/icons/trade_32.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Bottom_Navbar',
    props:{
        categories: Array,
        user: String, 
    },
    data() {
        return {
            active: false,
        }
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.bottom-navbar{
        height: 10%;
        width: 100%;
        bottom: 0;
        position: fixed;
        padding: 10px;
        left: 0;
        right: 0;
        //box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
        background: $white;
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
            padding: 15px;
            width: 100%;
            justify-content: space-between;
        }

        img {
                //width: 40px !important;
                filter: invert(31%) sepia(9%) saturate(9%) hue-rotate(12deg) brightness(98%) contrast(87%);
            }
    }
}

@media only screen and (min-width: 900px){
    .bottom-navbar{
        visibility: hidden;
        display: none;
    }
}
</style>