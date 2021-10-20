<template>
    <div class="body" id="body">

        <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Side Navbar-->
        <SideNav></SideNav>
        

        <div class="front-main">

        <!-- Slide show-->
        <div class="slide-wrapper">
            <Slider></Slider> 
        </div>
        
        
                    <div class="category-wrapper" id="cartwrap" >
                        <ul>
                            <li class="active"><img src="../assets/img/all_16.png" alt="dish"><p>All</p></li>
                            <li><img src="../assets/img/location_16.png" alt=""><p>Nearby</p></li>
                            <li><img src="../assets/img/rated_16.png" alt=""><p>Top Rated</p></li>
                            <li><img src="../assets/img/best_16.png" alt=""><p>Best Sellers</p></li>
                            <li><img src="../assets/img/new_16.png" alt="dish"><p>Newcomers</p></li>
                              <!--
                          </div>
                          <br/>
                          <br/>
                          <br/>
                          <div class="dropdown">
                            <button class="dropbtn">Filter</button>
                              <div class="dropdown-content">
                                <a href="#">Location</a>
                                <a href="#">Restaurant</a>
                                <a href="#">School</a>
                                <a href="#">Menu</a>
                              </div>
                          </div>
                          -->
                        </ul>
                
                    </div>
                   

            <div class="main-grid">
                <div class="menu-section">
                    <h3></h3>    

                    <div class="menu-grid">
                        <div  class="menu-card" :style="`background-image: url(${item.image})`" v-for="(item, index) in item" :key="index"
                         >
                            <div>
                                <span class="bg-main-gradient item-price">
                                    <span>&#8358;</span> {{item.price}}
                                </span>
                                <span>
                                  <!--
                                  <span class="bg-main-gradient img-1 wishlist">
                                    
                                    <Rating 
                                    :star="this.star" 
                                    :disabled="disabled" 
                                    :maxstars="this.maxstars" 
                                    :starsize="this.starsize" 
                                    :hasresults="this.hasresults" 
                                    :hasdescription="this.hasdescription" 
                                    :ratingdescription="this.ratingdescription" />-->
                                 <!-- <img src="../assets/img/love_a.png" alt=""></span> 
                                </span>
                                -->
                                </span>
                            </div>
                            <div>
                                <span class="item-name"  @click="(showItemInfo = true) && (selectedItem = item)" >{{item.name}}</span>
                            </div>

                            <button @click="pushtoCart(item)" class="btn btn-main-gradient">
                            <span class="ti-plus"></span>
                            add to cart 
                            </button>

                        </div>
                    </div> 
                    <div>
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

                                    <div class="dividersolid"></div>

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

                                      <div class="dividersolid"></div>

                                    <div class="price-flex">
                                        <small>Subtotal</small>
                                        <small>{{selectedItem.price}}</small>
                                    </div>
                                    <div class="price-flex">
                                        <small>Delivery fee</small>
                                        <small>{{selectedItem.price/0.1}}</small>
                                    </div>
                                    <div class="promo">
                                        <div class="coupon-flex">
                                            promotion 
                                            <button class="btn btn-small btn-main-gradient">Add Coupon</button>
                                        </div>
                                    </div>
                                    <div class="dividersolid"></div>

                                    <div class="price-flex">
                                        <small>Total</small>
                                        <h4>{{selectedItem.price}}</h4>
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
              </div> 

        <Modal v-if="showItemInfo" @close="showItemInfo = false">
            <template v-slot:header>
                    <h4>{{selectedItem.name}}</h4>
            </template>

            <template v-slot:body>
                <ul>
                    <div class="form-group">
                        <input type="text" :value="selectedItem.restaurant" readonly class=" bg-main-gradient item-price form-control">
                        <br/>
                        <input type="text" :value="selectedItem.menu" readonly class=" bg-main-gradient item-price form-control">
                        <br/>
                        <input type="text" :value="selectedItem.price" readonly class=" bg-main-gradient item-price form-control">
                        <br/>
                        <input type="text" :value="selectedItem.status" readonly class=" bg-main-gradient item-price form-control">
                    </div>
                </ul>
            </template>
        </Modal>        

                </div>


        <!-- Cart Tab   
        <Order @show="showAddressModal = true" 
        :cartLength="(cart.length).toLocaleString()" 
        :cart="cart"
        :address="address" 
        :user="email" >
        </Order>

        
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
        --> 

    </div>
    </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Modal from '../components/Modal.vue'
import SideNav from '../components/SideNav.vue'
import Slider from '../components/Slider.vue'
import Order from '../components/Order.vue'
import image1 from '@/assets/newimg/jollofrice.jpg'
import image2 from '@/assets/newimg/friedrice.jpg'
import image3 from '@/assets/newimg/food1.jpg'
import image4 from '@/assets/newimg/food2.jpg'
import image5 from '@/assets/newimg/food3.jpg'
import image6 from '@/assets/newimg/burger.jpg'

export default {  
  name: 'Home',
  components:{
      Nav, 
      Modal,
      SideNav,
      Order,
      Slider,
  },
  data() {
    return {
        email: "",
        password: "",
        address: "",
        user: "",
        showAddressModal: false,
        showItemInfo: false,
        total:'',
        Dfee: '',
        selectedItem: [],
        item:[
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
        {
          name: 'Amala and ewedu',
          price: '1500.00',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: image6,
          status: 'Available till 6pm today'
        },
        ],
        cart: [
            {
          name: 'Fried rice and chicken',
          price: '1200.00',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: image1,
          status: 'Available till 6pm today'
        },
        ],
        cart: [
            {
          name: 'Fried rice and chicken',
          price: '1200.00',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: image1,
          status: 'Available till 6pm today'
        },
        ]
    }
  },
  methods: {
      pushtoCart(itemm){
            this.cart = [itemm]
      }
  },
}
</script>

<style lang="scss">
</style>


