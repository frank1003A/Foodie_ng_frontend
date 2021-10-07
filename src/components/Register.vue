<template>
    <div class="account-form">
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

        <div class="form-group">
            <label for="">Full name</label>
            <input type="text"  class="form-control" placeholder="John doe" />
        </div>

        <div class="form-group">
            <label for="">Email</label>
            <input type="text"  class="form-control" placeholder="example@gmail.com" />
        </div>
        
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" placeholder="**********" />
        </div>

        </div>

        <div class="form-group">
            <button class="btn btn-main-gradient btn-block" @click="clckevent">Sign up</button>
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

