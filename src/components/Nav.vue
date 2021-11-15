<template>
    <div>
        <slide-nav v-show="isOpen" :Show="isOpen" @close="isOpen = !isOpen"></slide-nav>
        <div class="front-header">
            <nav>

                <div class="nav-logo">
                    
                    <h3>Foodie</h3>
                    <small>Food and beverages</small>
                    <!--
                    <img class="logo" src="@/assets/img/logocrop.png" alt="">-->
                </div>

                <!--
                <div class="front-search">
                    <span class="ti-search"></span>
                    <input type="search" placeholder="what would you like to eat?" />
                </div>
                -->
                <!--
                <div class="front-nav-links">
                    <div>
                        <router-link to="/account"><small class="btn outlined">Login</small></router-link>  <router-link to="/account"><small class="btn outlined">Sign Up</small></router-link>
                    </div>

                    <div v-if="isLogin === true" >
                        <button class="btn btn-main-gradient btn-link"><small ><span class="ti-user"></span>Profile</small></button> | <button class="btn btn-main-gradient btn-link"><small><span class="ti-power-off"></span> Logout</small></button>
                    </div>

                    <div v-if="isLogin === true" >
                        <router-link to="/restaurant/account"><small>Create Restaurant</small></router-link>
                    </div>
                    
                    <div>
                        
                        <router-link to="/cart" >
                        <button class="btn btn-main-gradient" id="cart">
                                <span class="ti-shopping-cart"></span>
                            <span><img src="../assets/icons/cartt_16.png" alt="cart"></span>
                        </button>
                        </router-link>
                        
                    </div>
                   
                </div>
                 -->
                <button class="togglebutton" @click="isOpen = !isOpen"><img src="@/assets/icons/menu2_32.png" alt="menu-icon"></button>
            </nav>
        </div>
    </div>
</template>

<script>
import slideNav from '../components/slideOutMenu.vue'
export default {
    name: 'Nav',
    props:{
        isOpen: Boolean,
    },
    components:{
        slideNav
    },
    data(){
        return {
            isLogin: false
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/top_navbar.scss';
</style>

