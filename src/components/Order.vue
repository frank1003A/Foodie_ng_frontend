<template>
    <div class="cart-section">
                    <div class="cart-card">
                        <div class="cart-header">
                            <h3>New Order</h3>
                            <small>{{cartLength}} items in cart </small>
                        </div>

                        <div class="cart-body">
                            <div class="cart-items">
                                <div class="cart-item" v-for="(item, index) in cart" :key="index">
                                    <div class="cart-info">
                                        <span class="ti-trash"></span>
                                        <div>
                                            <h5>{{item.name}}</h5>
                                            <small>{{item.price}}</small>
                                        </div>
                                    </div>
                                    <div class="cart-controls">
                                        <input type="text" readonly :value="item.qty" >
                                        <div>
                                            <span class="ti-angle-up" @click="updateItemQty(index,item,1)">+</span>
                                            <span class="ti-angle-down" @click="updateItemQty(index,item,0)">-</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="cart-sum">
                                <div class="cart-address">
                                    <div class="price-flex">
                                        <div>
                                            <small><b>Address</b></small>
                                            <p>address here</p>
                                        </div>
                                        <button class="btn btn-main-gradient" @click="$emit('show')">
                                            <!--<span class="ti-location-pin"></span>--> Change
                                        </button>
                                    </div>

                                    <div>
                                    <div class="price-flex">
                                        <small>Subtotal</small>
                                        <small>cart total</small>
                                    </div>

                                    <div class="price-flex">
                                        <small>Total</small>
                                        <h4>cart total</h4>
                                    </div>
                                </div>

                                <div class="cart-pay-btn">
                                    <button class="btn btn-success"><span class="ti-credit-card"></span> Pay Now</button>   
                                    <br/>
                                    <button v-if="address != ''" class="btn btn-success" @click="$emit('show')">
                                        Add delivery address
                                    </button>
                                    <br/>
                                    <button v-if="user != ''" class="btn btn-success" @click="$router.push('/account')">
                                        Login to continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>  
    </div>  
</template>

<script>
export default {
    name: 'Order',
    props:{
        cartLength: String,
        cart: Array,
        address:  String,
        user: String
    },
    methods: {
        updateItemQty(index, item, flag) {
            if(flag === 0 && Number(item.qty) > 1) {
                item.qty = Number(item.qty) - 1
            }else{
                item.qty = Number(item.qty) + 1
            }
        },
    },
}
</script>