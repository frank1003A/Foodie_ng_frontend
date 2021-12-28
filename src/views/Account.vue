<template>
    <div class="account-wrapper">

        <!--vector image-->
        <div class="account-image">
     <img src="../assets/vector_1.png" alt="vector image" class="v1">
            </div>


            <!--form section-->
        <div class="form-container">
            <div class="account">
                <div class="account-header">
                   <img id="acc-logo" src="@/assets/f-logo-2.png" alt="" />
                </div>

                <div class="account-tabs">
                    <button :class="isActive === 0? 'is-active': ''" @click="isActive = 0" id="login">Login</button>
                    <button :class="isActive === 1? 'is-active': ''" @click="isActive = 1" id="register">Register</button>
                </div>

                <div class="account-form-wrapper">
                    <component :is="compsArr[isActive]" :data="compsData[isActive]" @eventact="processEvent"></component>
                </div>

                 
            </div>
        </div>
    </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

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
           var x = document.getElementById("#login")
           var y = document.getElementById("#register")

            x.style.left= "-400px"
            y.style.left= "50px"
        },

        register(){
           var x = document.getElementById("#login")
           var y = document.getElementById("#register")

            x.style.left= "50px"
            y.style.left= "450px"
        }
    },
}
</script>
