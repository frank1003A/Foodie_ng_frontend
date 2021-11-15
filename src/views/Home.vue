<template>
    <div class="main-wrapper">

        <!-- Top Navbar-->
        <Nav></Nav> 

        <!-- Side Navbar-->
        <SideNav></SideNav>

        <!-- Bottom Navbar -->
        <BottomNav :cart="cart"></BottomNav>

         <!--mid-pad-->
        <div class="middle-bar">
                    <Searchbar></Searchbar>
        </div>

        <!-- Slide-->
        <div class="slide-wrapper">
            <!--<Slider></Slider>-->
            <img class="mainvector" src="@/assets/img/home-img-1.png" alt="adverts here"> 

            <div class="writeup">
                <h3>&#8358;0 delivery for 30days!</h3>
                <label for="">&#8358;0 delivery for orders over &#8358;1000 for 30days</label>
            </div>
            <img class="confetti" src="../assets/icons/confetti_64.png" alt="confetti">
        </div>


        <div class="front-main">
        
        
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

                    <!--food category--> 
                    <div class="category-wrapper" id="foodcat" >
                        <ul>
                            <li class="active"><img src="../assets/cat-icon/icons_package_32.png" alt="dish"><p>Gift Basket</p></li>
                            <li><img src="../assets/cat-icon/pizza_32.png" alt=""><p>Snacks</p></li>
                            <li><img src="../assets/cat-icon/apple_32.png" alt=""><p>Fruits</p></li>
                            <li><img src="../assets/cat-icon/beer_bottle_32.png" alt=""><p>Drinks</p></li>
                            <li><img src="../assets/cat-icon/food_32.png" alt="dish"><p>Food</p></li>
                        </ul>
                    </div>

                    <!--main-tabs for cart and filter view in screens above 900px 
                    <div class="main-tabs">
                    <button :class="isActive === 0? 'is-active': ''" @click="isActive = 0">Cart</button>
                    <button :class="isActive === 1? 'is-active': ''" @click="isActive = 1">Filter</button>
        </div>
-->
             <div class="dividersolid"></div>      

            <div class="main-grid">

                <!-- code within this comment are media queries for smaller screens-->

              <!--View all menu in the nearby filer --> 
              <div class="menu-section" id="Nearby">
                  <div class="cat-header">
                      <h3><img src="../assets/img/location_16.png" alt="">Nearby</h3>    
                    <a href="#" id="viewall">view all <img src="@/assets/icons/forward_16.png" alt="forward"></a>
                    
                  </div>
                    <div class="menu-flex">
                        <div  
                        class="menu-card" :style="`background-image: url(${item.image})`" 
                        v-for="(item, index) in item" :key="index">
                            <div>
                                <span class="bg-main-gradient item-price">
                                    <span>&#8358;</span> {{item.price}}
                                </span>
                            </div>
                            <div>
                                <span class="item-name">{{item.name}}</span>
                            </div>
                            <div class="love-item">
                                <span class="cravelist"><img src="@/assets/img/love_a.png" alt="love"></span>
                            </div>

                            <router-link to="/item">
                               <button @click="(selectedItem = item)" class="btn btn-main-gradient">
                                    <span class="ti-plus"></span>
                                add to cart 
                               </button>
                               </router-link> 
                            
                        </div>
                    </div>    
                             <!--<Pagination></Pagination>-->
                </div>

                <div class="dividersolid"></div>

                <!-- about section starts  -->
                <section></section>
                <!-- about section ends -->
                
                <!--View all menu in the top rated filter--> 
              <div class="menu-section" id="Toprated">
                        
                    <div class="cat-header">
                      <h3><img src="../assets/img/rated_16.png" alt="">Top Rated</h3>   
                    <a href="#" id="viewall">view all <img src="@/assets/icons/forward_16.png" alt="forward"></a>
                    
                  </div>
                    <div class="menu-flex">
                        <div  
                        class="menu-card" 
                        :style="`background-image: url(${item.image})`" 
                        v-for="(item, index) in item" :key="index">
                            <div>
                                <span class="bg-main-gradient item-price">
                                    <span>&#8358;</span> {{item.price}}
                                </span> 
                                </div>
                            <div>
                                <span class="item-name"  @click="(showItemInfo = true) && (selectedItem = item)" >{{item.name}}</span>
                            </div>
                            <div class="love-item">
                                <span class="cravelist"><img src="@/assets/img/love_a.png" alt="love"></span>
                            </div>
                            

                            <button @click="pushtoCart(item)" class="btn btn-main-gradient">
                            <span class="ti-plus"></span>
                            add to cart 
                            </button>
                            
                        </div>
                    </div>    
                             <!--<Pagination></Pagination>-->
                </div>  

                <div class="dividersolid"></div>

                <!--menucard
                <div class="menu-section">
                    <div class="menu-grid">
                            <Menucard :item="item"></Menucard>
                    </div>
                </div>
                -->
                <section>
                    
                </section>

                <!--View all menu without filter--> 
                <div class="menu-section" id="all">
                        
                     <div class="cat-header">
                      <h3><img src="../assets/img/all_16.png" alt="dish">All</h3>  
                    <a href="#" id="viewall">view all <img src="@/assets/icons/forward_16.png" alt="forward"></a>
                    
                  </div>
                    <div class="menu-grid">
                        <div  
                        class="menu-card" 
                        :style="`background-image: url(${item.image})`" 
                        v-for="(item, index) in item" :key="index">
                            <div>
                                <span class="bg-main-gradient item-price">
                                    <span>&#8358;</span> {{item.price}}
                                </span>
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
                            </div>
                            <div>
                                <span class="item-name">{{item.name}}</span>
                            </div>

                            <div class="love-item">
                                <span class="cravelist"><img src="@/assets/img/love_a.png" alt="love"></span>
                            </div>

                            <button @click="pushtoCart(item)" class="btn btn-main-gradient">
                            <span class="ti-plus"></span>
                            add to cart 
                            </button>
                            
                        </div>
                    </div> 
                    
        <div class="cart-section">
            <Order @show="showAddressModal = true" 
        :cartLength="(cart.length).toLocaleString()" 
        :cart="cart"
        :address="address" 
        :user="email" >
        </Order>
        </div>
                    <!--Cart Tab
        <div class="cart-section">
            <Order @show="showAddressModal = true" 
        :cartLength="(cart.length).toLocaleString()" 
        :cart="cart"
        :address="address" 
        :user="email" >
        </Order>
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
        -->        
<Pagination></Pagination>
                </div>

    <section class="about" id="about">
    <h1 class="heading"> why choose us? </h1>

    <div class="row">

        <div class="image">
            <img src="@/assets/newimg/dish-2.png" alt="">
        </div>

        <div class="content">
            <p>Foodie brings the best food, menu's and categories from the best and location strategic restaurants to you.</p>
           <!--
            <div class="icons-container">
                <div class="icons">
                    <i class="fas fa-shipping-fast"></i>
                    <span>free delivery</span>
                </div>
                <div class="icons">
                    <i class="fas fa-dollar-sign"></i>
                    <span>easy payments</span>
                </div>
                <div class="icons">
                    <i class="fas fa-headset"></i>
                    <span>24/7 service</span>
                </div>
            </div>
            -->
            <a href="#" class="btn btn-main-gradient">learn more</a>
        </div>

    </div>

    </section>
        <!--
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

        <!--
        <div class="cart-section">
        <component :is="compsArr[isActive]" :cart="cart" :user="user" :address="address"></component>
        </div>
        -->
     </div>
    </div>
     <Footermain id="extupFooter"></Footermain>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Modal from '../components/Modal.vue'
import SideNav from '../components/SideNav.vue'
import Order from '../components/Order.vue'
import BottomNav from '../components/Bottom_Navbar.vue'
import Menucard from '../components/MenuCard.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import Footermain from '../components/Footer_main.vue'
import Searchbar from '../components/Searchbar.vue'
import Pagination from '../components/Pagination.vue'
import FilterTab from '../components/FIlterTab.vue'
import image1 from '@/assets/newimg/jollofrice.jpg'
import image2 from '@/assets/newimg/friedrice.jpg'
import image3 from '@/assets/newimg/food1.jpg'
import image4 from '@/assets/newimg/food2.jpg'
import image5 from '@/assets/newimg/food3.jpg'
import image6 from '@/assets/newimg/burger.jpg'
import image7 from '@/assets/newimg/amala_ewedu.jpg'
import image8 from '@/assets/newimg/dish1.jpg'
import image9 from '@/assets/newimg/dish2.jpg'
import CartTab from '../components/CartTab.vue'
import Item from '../components/Item.vue'

export default {  
  name: 'Home',
  components:{
      Nav, 
      Modal,
      SideNav,
      BottomNav,
      Slider,
      Footer,
      Pagination,
      Searchbar,
      FilterTab,
      CartTab,
      Order,
      Menucard,
      Footermain,
      Item
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
        show: false,
        compsArr: [
                CartTab,
                FilterTab,
            ],
        isActive: 0,
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
        {
          name: 'Amala and ewedu',
          price: '2500.00',
          restaurant: 'Emeka Restaurant',
          menu: 'green menu',
          image: image7,
          status: 'Available till 6pm today'
        },
        {
          name: 'Beans and wheat',
          price: '1000.00',
          restaurant: 'D Restaurant',
          menu: 'green menu',
          image: image8,
          status: 'Available till 6pm today'
        },
        {
          name: 'Rice crispies',
          price: '2000.00',
          restaurant: 'D Restaurant',
          menu: 'green menu',
          image: image9,
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
        {
          name: 'Beans and wheat',
          price: '1000.00',
          restaurant: 'D Restaurant',
          menu: 'green menu',
          image: image8,
          status: 'Available till 6pm today'
        },
        {
          name: 'Rice crispies',
          price: '2000.00',
          restaurant: 'D Restaurant',
          menu: 'green menu',
          image: image9,
          status: 'Available till 6pm today'
        },
        ],
    }
  },
  methods: {
      pushtoCart(itemm){
            this.cart = [itemm]
      },
  },
}
</script>

<style lang="scss">
</style>


