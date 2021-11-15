<template>
      <div class="account-form">
        <h3>Sign into your account</h3>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control-bd" placeholder="example@gmail.com" />
        </div>

        <br/>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control-bd" placeholder="**********" />
        </div>

        <br/>

        <div class="form-group">
            <button class="btn btn-main-gradient btn-block btn-big">Sign in</button>
        </div>


        <div class="form-group">
            <button class="btn btn-block outlined btn-google btn-big" @click="clckevent"> <span><img src="../assets/icons/google_32.png" alt=""></span>Sign in With Google</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login'
}
</script>
