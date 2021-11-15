<template>
<div class="order-wrapper">
                        <div class="cart-sum">
                                <div class="cart-address">
                                    <h3>My Orders</h3>
                                    <div class="price-block">
                                        <div>
                                            <small><b>Delivery address</b></small>
                                                <div class="custom-select">
                                                    <select name="location" id="order-location">
                                                        <option value="">1314 Morris Street</option>
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                        </div>

                                        <div class="timedistance">
                                            <span><img src="../assets/img/best_16.png" alt=""> 40 mins</span>
                                            <span><img src="../assets/img/location_16.png" alt=""> 4 kms</span>
                                        </div>

                                       <!-- <button class="btn btn-main-gradient btn-block" @click="$emit('show')">
                                            <span class="ti-location-pin"></span> Change
                                        </button>-->
                                    </div>

                                    <div>

                                    <div class="dividersolid" ></div>

                                      <!--cart item-->
                                      <div class="cart-body">
                            <div class="cart-item" v-for="(item, index) in cart" :key="index">
                                    <div class="cart-info">
                                        <span class="ti-trash"></span>
                                        <div>
                                            <h5>{{item.name}}</h5>
                                            <small>{{item.price}}</small>
                                        </div>
                                    </div>
                                    <div class="cart-controls">
                                        <input type="text" readonly :value="item.qty">
                                        <div>
                                            <span class="ti-angle-up" >+</span>
                                            <span class="ti-angle-down">-</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                      <!--cart item end-->

                                      <div class="dividersolid" ></div>

                                    <div class="price-flex">
                                        <small>Subtotal</small>
                                        <small>&#8358; 2,000.00</small>
                                    </div>
                                    <div class="price-flex">
                                        <small>Delivery fee</small>
                                        <small>&#8358; 250.00</small>
                                    </div>
                                    <div class="promo">
                                        <div class="coupon-flex">
                                            <input type="text" class="form-control" placeholder="coupon code"/>
                                            <button class="btn btn-small btn-main-gradient btn-block">Apply</button>
                                        </div>
                                    </div>
                                    <div class="dividersolid"></div>

                                    <div class="price-flex">
                                        <small>Total</small>
                                        <h4>&#8358; 2,250.00</h4>
                                    </div>
                                    
                                </div>

                                <div class="cart-pay-btn">
                                    <button class="btn btn-block btn-main-gradient btn-big"><span class="ti-credit-card"></span>CHECKOUT</button>   
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
</template>

<script>
export default {
    name: 'Order',
    props:{
        cartLength: String,
        cart: Array,
        image: Object,
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