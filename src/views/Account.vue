<template>
<div>
<div class="account-image">
     <img src="../assets/vector_1.png" alt="vector image" class="v1">
            </div>
    <div class="account-wrapper">
        <div class="account-container">
            <div class="account-inner">
                <div class="account-header">
                   <!--<h3><span class="ti-bolt"></span> Foodie</h3>
                    <small>Awesome food and Beverages</small>
                    -->
                </div>

                <div class="account-tabs">
                    <button :class="isActive === 0? 'is-active': ''" @click="isActive = 0" id="login">Login</button>
                    <button :class="isActive === 1? 'is-active': ''" @click="isActive = 1" id="register">Register</button>
                </div>

                <div class="account-form-wrapper">
                    <component :is="compsArr[isActive]" :data="compsData[isActive]" @eventact="processEvent"></component>
                </div>
            </div>

             <div class="account-footer">
                    <p>By clicking the button below, you agree to our <a href="">terms of use</a> and <a href="">privacy policy</a></p>
                </div>
        </div>
    </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
var x, y

export default {
    name: 'Account',
    data() {
        return {
            compsArr: [
                Login,
                Register,
            ],
            isActive: 0,
            compsData: [
                {
                    email: '',
                    password: '',
                },
                {
                    name: '',
                    email: '',
                    password: '',
                    role: '',
                }
            ],
        }
    },
    methods: {
        login(){
           var x = document.getElementById("login")
           var y = document.getElementById("register")

            x.style.left= "-400px"
            y.style.left= "50px"
        },

        register(){
           var x = document.getElementById("login")
           var y = document.getElementById("register")

            x.style.left= "50px"
            y.style.left= "450px"
        }
    },
}
</script>
