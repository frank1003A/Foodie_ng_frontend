<template>
    <div>
        <div class="front-header">
            <nav>
                <div>
                    <!--
                    <h3>Foodie</h3>
                    <small>Awesome Food and beverages</small>
                    -->
                    <img class="logo" src="@/assets/img/logocrop.png" alt="">
                </div>

                <div class="front-search">
                    <span class="ti-search"></span>
                    <input type="search" placeholder="Search or scan for items" />
                </div>

                <div class="front-nav-links">
                    <div>
                        <router-link to="/account"><small >Login</small></router-link> | <router-link to="/account"><small>Sign Up</small></router-link>
                    </div>

                    <div v-if="isLogin === true" >
                        <button class="btn-link"><small ><span class="ti-user"></span>Profile</small></button> | <button class="btn-link"><small><span class="ti-power-off"></span> Logout</small></button>
                    </div>

                    <div v-if="isLogin === true" >
                        <router-link to="/restaurant/account"><small>Create Restaurant</small></router-link>
                    </div>
                    
                    <div>
                        <router-link to="/cart" >
                        <button class="btn btn-main-gradient">
                            <span class="ti-shopping-cart"></span>
                            <span><img src="@/assets/img/cart.png" alt=""></span>
                        </button>
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return {
            isLogin: false
        }
    }
}
</script>