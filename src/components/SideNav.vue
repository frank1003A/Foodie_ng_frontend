<template>
    <div class="front-sidebar">
            <div class="brand">
                <h1><span class="ti-bolt">F</span></h1>
            </div>

            <div class="front-sidemenu">
                <ul>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/img/fast-food.svg" alt="">
                            <h3>Homee</h3>
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/img/coffee-cup.svg" alt="">
                            <h3>Wallet</h3>
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/img/dish.svg" alt="">
                            <h3>wishlist</h3>
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/img/hamburger.svg" alt="">
                            <h3>Snacks</h3>
                        </div>
                    </li>
                    <li @click="active = true" :class="active === true? 'active' : ''">
                        <div>
                            <img src="../assets/img/kebab.svg" alt="">
                            <h3>Kebab</h3>
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