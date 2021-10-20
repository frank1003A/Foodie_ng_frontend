<template>
    <div class="cart-section">
            <div class="cart-item-">
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
                                        <span><img src="@/assets/simg/img1.jpg" alt=""></span>
                                        <div>
                                            <h4>{{item.name}}</h4>
                                            <small>&#8358; {{item.price}}</small>
                                        </div>
                                    </div>
                                    </div>
                                        <!--
                                            <div class="cart-price">
                                        <h4>&#8358; {{item.price}}</h4>
                                    </div>
                                    <div class="counter">
                                            <div class="btn">+</div>
                                            <div class="count"><input  type="text" readonly :value="item.qty"/></div>
                                            <div class="btn">-</div>
                                        </div>

                                            <input  type="text" readonly :value="item.qty"/>
                                        <div class="cart-controls">
                                        <div>
                                            <span class="ti-angle-up" @click="updateItemQty(index,item,1)">+</span>
                                            <span class="ti-angle-down" @click="updateItemQty(index,item,0)">-</span>
                                        </div>
                                        </div>
                                        -->
                                    
                                    
                                </div>
                            </div>

                    <div class="order-wrapper">

                     <div class="cart-sum">
                                <div class="cart-address">
                                    <h3>Payment Summary</h3>
                                    <div class="dividersolid"></div>
                                    <div class="price-flex">
                                        <div>
                                            <small><b>Address</b></small>
                                            <p>address here</p>
                                        </div>
                                        <button class="btn btn-main-gradient" @click="$emit('show')">
                                            <span class="ti-location-pin"></span> Change
                                        </button>
                                    </div>

                                    <div>
                                    <div class="price-flex">
                                        <small>Subtotal</small>
                                        <small>cart total</small>
                                    </div>
                                    <div class="price-flex">
                                        <small>Delivery</small>
                                        <small>total</small>
                                    </div>

                                    <div class="price-flex">
                                        <small>Total</small>
                                        <h4>cart total</h4>
                                    </div>
                                </div>

                                <div class="cart-pay-btn">
                                    <button class="btn btn-success"><span class="ti-credit-card"></span>CHECKOUT</button>   
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

                        <div class="cart-sum">
                            <h4>Redeem coupon</h4>
                            <div class="dividersolid"></div>
                        <input type="text" class="form-control-small" placeholder="coupon code"/>
                        <button class="btn btn-main-gradient">Apply</button>
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