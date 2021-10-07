<template>
    <div class="account-wrapper">
        <div>
            <div>
                <div class="account-header">
                    <h3><span class="ti-bolt"></span> Foodie</h3>
                    <small>Awesome food and Beverages</small>
                </div>

                <div class="restaurant-account-tabs">
                    <button :class="isActive === 0? 'is-active': ''" @click="isActive = 0">New Restaurant</button>
                </div>

                <div class="account-form-wrapper">
                    <div class="form-group">
                       <label for="">Restaurant Name</label>
                       <input type="text"  class="form-control" placeholder="Restaurant name" />
                    </div>

                    <div class="form-group">
                       <label for="">Address</label>
                       <input type="text" class="form-control" placeholder="oakland avenue, house 2" />
                    </div>

                    <div class="form-group">
                       <label for="">Buisness phone</label>
                       <input type="text" class="form-control" placeholder="+234080234364.." />
                    </div>

                    <div class="form-group">
            <button class="btn btn-main-gradient btn-block">Sign in</button>
        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateRestaurant',
    data() {
        return {
            isActive: 0,
        }
    }
}
</script>