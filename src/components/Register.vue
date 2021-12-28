<template>
     <div class="account-form">
        <!--
        <h3>Create your account</h3>
        <div class="form-group">
            <label for="">Sign up as</label>
            <div class="role-grid">
                <div class="role">
                    <span>Customer</span>
                    <input type="radio" id="customer" name="role" v-model="selectedAccountType.customer" value="customer">
                    <label for="customer">
                        <span></span>
                    </label>
                </div>

                <div class="role">
                    <span>Dispatch Rider</span>
                    <input type="radio" id="driver" v-model="selectedAccountType.driver" name="role" value="driver" >
                    <label for="driver">
                        <span></span>
                    </label>
                </div>
            </div>
        </div>
        -->
        <h3>Create your account</h3>
        <div class="form-group-flex">
            <div class="form-group-f">
            <label for="">First name</label>
            <input type="text"  class="form-control-bd" placeholder="first name" />
        </div>

        <div class="form-group-f">
            <label for="">Last name</label>
            <input type="text"  class="form-control-bd" placeholder="last name" />
        </div>
        </div>

        <div class="form-group">
            <label for="">Email</label>
            <input type="text"  class="form-control-bd" placeholder="example@gmail.co" />
        </div>
        
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control-bd" placeholder="**********" />
        </div>

        <div class="form-group">
            <button class="btn btn-main-gradient btn-block" @click="clckevent">Sign up</button>
        </div>

        <div class="form-group">
            <button class="btn btn-block outlined btn-google" @click="clckevent"> 
                <span><img src="../assets/icons/google_32.png" alt=""></span> Sign up With Google
                </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data(){
        return{
            selectedAccountType: []
        }
    },
    computed(){
        this.selectedAccountType = [{
            cusotmer: "",
            driver: ""
        }]
    },
    methods: {
      clckevent(){
          alert('This is a click event')
      }  
    },
}
</script>

