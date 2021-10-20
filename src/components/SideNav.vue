<template>
    <div class="front-sidebar">
            <div class="brand">
                <h1><span><img src="../assets/icons/menu2_32.png" alt=""></span></h1>
            </div>

            <div class="front-sidemenu">
                <ul>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/icons/home_32.png" alt="">
                            <!--<h3>Home</h3>-->
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                           <img src="../assets/icons/wallet_32.png" alt="">
                            <!--<h3>Wallet</h3>-->
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/icons/love_32.png" alt="">
                            <!--<h3>wishlist</h3>-->
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/icons/profile_32.png" alt="">
                            <!--<h3>Snacks</h3>-->
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/icons/trade_32.png" alt="">
                            <!--<h3>Kebab</h3>-->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name:'SideNav',
    props:{
        categories: Array 
    },
    data() {
        return {
            active: false,
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/side_navbar.scss';
</style>