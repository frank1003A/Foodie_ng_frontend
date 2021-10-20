<template>
  <div>
        
        <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Side Navbar -->
        <SideNav></SideNav>


        <div class="grid-container">
            <div class="order">
                <!--cart header-->
                <div class="cart-header">
                            <h3>New Order</h3>
                            <small>{{cart.length}} items in cart</small>
                        </div>
                <!--cart item-->
                                      <div class="cart-body">
                            <div class="cart-items">
                                <div class="cart-item" v-for="(item, index) in cart" :key="index">
                                    <div class="cart-info">
                                        <span class="ti-trash"></span>
                                        <span><img :src="item.image" alt=""></span>
                                        <div>
                                            <h4>{{item.name}}</h4>
                                            <small>&#8358; {{item.price}}</small>
                                        </div>
                                    </div>
                                    </div>  
                                </div>
                            </div>
                <!--cart item end-->
            </div>
            <div class="payment-summary">
                    <div class="cart-sum">
                        <h3>Payment Summary</h3>
                        <br/>
                                <div class="cart-address">
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
                                    <div class="dividersolid"></div>
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
                                            <input type="text" class="form-control-small" placeholder="coupon code"/>
                                            <button class="btn btn-small btn-main-gradient">Apply</button>
                                        </div>
                                    </div>
                                    <div class="dividersolid"></div>

                                    <div class="price-flex">
                                        <small>Total</small>
                                        <h4>&#8358; 2,250.00</h4>
                                    </div>
                                    
                                </div>

                                <div class="cart-pay-btn">
                                    <button class="btn btn-main-gradient"><span class="ti-credit-card"></span>CHECKOUT</button>   
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
        
        <!--Cart
        <Order @show="showAddressModal = true" 
        :cartLength="(cart.length).toLocaleString()" 
        :cart="cart"
        :image="cart.image"
        :address="address" 
        :user="email" >
        </Order>
        --> 
                    
        

        <Modal v-if="showAddressModal" @close="showAddressModal = false">
            <template v-slot:header>
                <h4>Provide your address</h4>
            </template>

            <template v-slot:body>    
                <div class="form-group">
                    <label for="">Your address</label>
                    <input type="text" class="form-control" v-model="address" placeholder="No 230, Abba road" />
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import Order from '../components/Order.vue'
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import Modal from '../components/Modal.vue'
import Card from '../components/Card.vue'
import image1 from '@/assets/newimg/jollofrice.jpg'
import image2 from '@/assets/newimg/friedrice.jpg'
import image3 from '@/assets/newimg/food1.jpg'
import image4 from '@/assets/newimg/food2.jpg'
import image5 from '@/assets/newimg/food3.jpg'
import image6 from '@/assets/newimg/burger.jpg'

export default {
    name: 'Cart',
    components: {
        Order,
        Nav,
        Modal,
        SideNav,
        Card
    },
    data() {
        return {
        email: "",
        password: "",
        address: "",
        showAddressModal: false,
        cart: [
             {
          name: 'Fried rice and chicken',
          price: '1200.00',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: image1,
          status: 'Available till 6pm today'
        },
        {
          name: 'Beans and wheat',
          price: '1000.00',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image:image2,
          status: 'Available till 6pm today'
        },
         {
          name: 'Amala and ewedu',
          price: '1500.00',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image:image3,
          status: 'Available till 6pm today'
        },
        {
          name: 'Fried rice and chicken',
          price: '1200.00',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: image4,
          status: 'Available till 6pm today'
        },
        {
          name: 'Beans and wheat',
          price: '1000.00',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image : image5,
          status: 'Available till 6pm today'
        },
        ]
        }
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/cart.scss';
</style>