<template>
    <div class="account-form">
        <h3>Sign into your account</h3>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" placeholder="example@gmail.com" />
        </div>

        <br/>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="**********" />
        </div>

        <br/>

        <div class="form-group">
            <button class="btn btn-main-gradient btn-block">Sign in</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login'
}
</script>
