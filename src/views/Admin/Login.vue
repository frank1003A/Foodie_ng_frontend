<template>
<div class="admin-login-wrapper">

        <div class="admin-form-wrapper">
            <h3>Sign in to access dashboard</h3>

            <div class="form-group">
                <label for="">Email</label>
                <input type="text" v-model="creds.email" class="form-control" placeholder="example@gmail.com" />
            </div>

            <div class="form-group">
                <label for="">Password</label>
                <input type="password" v-model="creds.password" class="form-control" placeholder="**********" />
            </div>

            <div class="form-group">
                <button class="btn btn-main btn-block" @click="$router.push('/admin/dashboard')">Sign in</button>
            </div>
            
            <div class="form-group form-link">
                <router-link to="/">Back to home</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminLogin',
    data(){
        return {
            creds: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signin(){
            alert('Login Successfull')
        }
    },
}
</script>

<style>

</style>