<template>
    <div class="account-wrapper">
        <div>
            <div>
                <div class="account-header">
                   <h3><span class="ti-bolt"></span> Foodie</h3>
                    <small>Awesome food and Beverages</small>
                </div>

                <div class="account-tabs">
                    <button :class="isActive === 0? 'is-active': ''" @click="isActive = 0">Login</button>
                    <button :class="isActive === 1? 'is-active': ''" @click="isActive = 1">Register</button>
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
            ]
        }
    },
}
</script>
