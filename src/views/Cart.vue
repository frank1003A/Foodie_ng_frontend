<template>
  <div>
        
        <!-- Top Navbar-->
        <Nav></Nav>

         <!--mid-pad-->
        <div class="middle-bar">
        </div>

        <!-- Side Navbar 
        <SideNav></SideNav>
        -->


        <div v-if="cart.length == 0" class="grid-container" id="empty">
                <img src="../assets/icons/big_shopping_cart_64.png" alt="">
                <p>Your basket is empty</p>
                <label for="">Make your basket happy and add food items to it</label>
        </div>

        <div v-else class="grid-container">
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
                                        <span><img :src="`${item.image}`" alt="image"></span>
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
                            </div>
                <!--cart item end-->
            </div>

            <div class="payment-summary">
                    <div class="cart-sum">
                        <div class="promo">
                                        <div class="coupon-flex">
                                            <input type="text" class="form-control" placeholder="coupon code"/>
                                            <button class="btn btn-main-gradient btn-block">Apply</button>
                                        </div>
                                    </div>

                                    <br/>
                                    <br/>

                                    <div class="price-flex">
                                        <small>Cart total</small>
                                        <small>&#8358; 2,000.00</small>
                                    </div>
                                    <div class="price-flex">
                                        <small>Delivery fee</small>
                                        <small>&#8358; 250.00</small>
                                    </div>
                                    <div class="price-flex">
                                        <small>Tax(5%)</small>
                                        <small>&#8358; 100.00</small>
                                    </div>

                                    <div class="price-flex">
                                        <small>Promo Discount(5%)</small>
                                        <small>- &#8358; 0.00</small>
                                    </div>

                                    <div class="dividersolid"></div>

                                    <div class="price-flex">
                                        <small>Total</small>
                                        <h4>&#8358; 2,250.00</h4>
                                    </div>
                                    
                                </div>

                                <div class="cart-pay-btn">
                                    <button class="btn btn-main-gradient btn-block"><span class="ti-credit-card"></span>CHECKOUT</button>   
                                    <br/>
                                    <button v-if="address != ''" class="btn btn-success btn-block" @click="$emit('show')">
                                        Add delivery address
                                    </button>
                                    <br/>
                                    <button v-if="user != ''" class="btn btn-success btn-block" @click="$router.push('/account')">
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
    <Footer></Footer>
</template>

<script>
import Order from '../components/Order.vue'
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import Modal from '../components/Modal.vue'
import Card from '../components/Card.vue'
import Footer from '../components/Footer.vue'
import Searchbar from '../components/Searchbar.vue'
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
        Card,
        Footer,
        Searchbar
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
        ]
        }
    },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/cart.scss';
</style>