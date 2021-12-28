<template>
  <div class="main-wrapper">
    <!-- Top Navbar-->
    <Nav></Nav>

    <!--top-section
    <section id="top-section" class="home-top-section" >
            
        </section>
        -->

    <!-- Side Navbar
        <SideNav></SideNav>
        -->

    <!-- Bottom Navbar -->
    <BottomNav :cart="cart"></BottomNav>

    <!-- Slide starts here
    <div class="slide-wrapper">
      <Slider></Slider>
      <img
        class="mainvector"
        src="@/assets/img/home-img-1.png"
        alt="adverts here"
      />

      <div class="writeup">
        <h3>&#8358;0 delivery for 30days!</h3>
        <label for=""
          >&#8358;0 delivery for orders over &#8358;1000 for 30days</label
        >
      </div>
      <img
        class="confetti"
        src="../assets/icons/confetti_64.png"
        alt="confetti"
      />
      
      <div class="advert-cont">
        <div class="avt-cont">
          <p>FOODIE</p>
          <span>More than 300 restaurant</span>
          <p>Order now at the best prices</p>
          <input
            type="button"
            id="ad-btn"
            class="btn btn-main-gradient"
            value="View all"
          />
        </div>
      </div>
      <Searchbar></Searchbar>
    </div>
    Slide ends here-->

<!-- home section starts -->
    <section class="home" id="home">

    <div class="swiper-container home-slider">

        <div class="swiper-wrapper wrapper">

            <div class="swiper-slide slide">
                <div class="content">
                    <span>our special dish</span>
                    <h3>spicy shawarma</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                    <a href="#" class="btn">order now</a>
                    <a href="#" id="learnmore" class="btn outlined">learn more</a>
                </div>
                <div class="image">
                    <img src="../assets/newimg-2/img-ad-1.png" alt="">
                </div>
            </div>
        </div>

        <div class="swiper-pagination"></div>

    </div>

</section>

<!-- home section ends -->

    <section id="tab-section">
      <div class="tab">
        <img src="../assets/icons/free_shipping_32.png" id="tabimg" alt="" />
        <div class="tab-content">
          <p>Free shipping</p>
          <label for="">Free delivery for all order</label>
        </div>
      </div>
      <div class="tab">
        <img src="../assets/icons/money_32.png" id="tabimg" alt="" />
        <div class="tab-content">
          <p>Money Gurantee</p>
          <label for="">30 days money back</label>
        </div>
      </div>
      <div class="tab">
        <img src="../assets/icons/headphones_32.png" id="tabimg" alt="" />
        <div class="tab-content">
          <p>24/7 Support</p>
          <label for="">Friendly 24/7 Support</label>
        </div>
      </div>
      <div class="tab">
        <img src="../assets/icons/card_security_32.png" id="tabimg" alt="" />
        <div class="tab-content">
          <p>Secure payment</p>
          <label for="">All cards acceted</label>
        </div>
      </div>
    </section>

    <section class="cat-section">
      <div class="sect-cat">
        <div class="f-cat">
          <ul>
            <li class="active">
              <span class="ti-sb">
                <fa icon="shopping-basket" />
              </span>
              <p>Gift Basket</p>
            </li>
            <li>
              <span class="ti-ham">
                <fa icon="hamburger" />
              </span>
              <p>Snacks</p>
            </li>
            <li>
              <span class="ti-apple">
                <fa icon="apple-alt" />
              </span>
              <p>Fruits</p>
            </li>
            <li>
              <span class="ti-bottle">
                <fa icon="wine-bottle" />
              </span>
              <p>Drinks</p>
            </li>
            <li>
              <span class="ti-cb">
                <fa icon="concierge-bell" />
              </span>
              <p>Food</p>
            </li>
          </ul>
        </div>
        <br/>
        <p>view :</p>
              <div class="main-tabs">
                <button
                  :class="isActive === 0 ? 'is-active' : ''"
                  @click="isActive = 0"
                >
                  <span class="ti-cart"> <fa icon="shopping-cart"/></span>View
                  cart
                </button>
                <button
                  :class="isActive === 1 ? 'is-active' : ''"
                  @click="isActive = 1"
                >
                  <span class="ti-filter"> <fa icon="filter"/></span>Filter list
                </button>
              </div>
      </div>
    </section>

    <div class="front-main">
      <div class="category-wrapper" id="cartwrap">
        <ul>
          <li class="active">
            <img src="../assets/img/all_16.png" alt="dish" />
            <p>All</p>
          </li>
          <li>
            <img src="../assets/img/location_16.png" alt="" />
            <p>Nearby</p>
          </li>
          <li>
            <img src="../assets/img/rated_16.png" alt="" />
            <p>Top Rated</p>
          </li>
          <li>
            <img src="../assets/img/best_16.png" alt="" />
            <p>Best Sellers</p>
          </li>
          <li>
            <img src="../assets/img/new_16.png" alt="dish" />
            <p>Newcomers</p>
          </li>
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
      <div class="category-wrapper" id="foodcat">
        <ul>
          <li class="active">
            <img src="../assets/cat-icon/icons_package_32.png" alt="dish" />
            <p>Gift Basket</p>
          </li>
          <li>
            <img src="../assets/cat-icon/pizza_32.png" alt="" />
            <p>Snacks</p>
          </li>
          <li>
            <img src="../assets/cat-icon/apple_32.png" alt="" />
            <p>Fruits</p>
          </li>
          <li>
            <img src="../assets/cat-icon/beer_bottle_32.png" alt="" />
            <p>Drinks</p>
          </li>
          <li>
            <img src="../assets/cat-icon/food_32.png" alt="dish" />
            <p>Food</p>
          </li>
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
            <h3><img src="../assets/img/location_16.png" alt="" />Nearby</h3>
            <a href="#" id="viewall"
              >view all <img src="@/assets/icons/forward_16.png" alt="forward"
            /></a>
          </div>
          <div class="menu-flex">
            <div
              class="menu-card"
              :style="`background-image: url(${item.image})`"
              v-for="(item, index) in item"
              :key="index"
            >
              <div>
                <span class="bg-main-gradient item-price">
                  <span>&#8358;</span> {{ item.price }}
                </span>
              </div>
              <div>
                <span class="item-name">{{ item.name }}</span>
              </div>
              <div class="love-item">
                <fa icon="heart" />
              </div>

              <router-link to="/item">
                <button
                  @click="selectedItem = item"
                  class="btn btn-main-gradient"
                >
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
            <h3><img src="../assets/img/rated_16.png" alt="" />Top Rated</h3>
            <a href="#" id="viewall"
              >view all <img src="@/assets/icons/forward_16.png" alt="forward"
            /></a>
          </div>
          <div class="menu-flex">
            <div
              class="menu-card"
              :style="`background-image: url(${item.image})`"
              v-for="(item, index) in item"
              :key="index"
            >
              <div>
                <span class="bg-main-gradient item-price">
                  <span>&#8358;</span> {{ item.price }}
                </span>
              </div>
              <div>
                <span
                  class="item-name"
                  @click="(showItemInfo = true) && (selectedItem = item)"
                  >{{ item.name }}</span
                >
              </div>
              <div class="love-item">
                <fa icon="heart" />
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

        <!--section-->
        <section></section>

        <!--View all menu without filter-->
        <div class="menu-section" id="all">
          <div class="cat-header">
            <span
              ><fa icon="th" />
              <h3>Meals From all categories</h3></span
            >
            <span
              ><a href="#" id="viewall">view all </a
              ><fa icon="chevron-circle-right"
            /></span>
          </div>
          <div class="menu-grid">
            <div
              class="menu-card"
              :style="`background-image: url(${item.image})`"
              v-for="(item, index) in item"
              :key="index"
            >
              <div>
                <span class="bg-main-gradient item-price">
                  <span>&#8358;</span> {{ item.price }}
                </span>
              </div>
              <div>
                <span class="item-name">{{ item.name }}</span>
              </div>
              <div class="rating">
                <span class="rate"><fa icon="star"/></span>
                <span class="rate"><fa icon="star"/></span>
                <span class="rate"><fa icon="star"/></span>
                <span class="rate"><fa icon="star"/></span>
                <span class="rate"><fa icon="star"/></span>
              </div>
              <!--
              <div>
                <Rating
                  :star="this.star"
                  :disabled="disabled"
                  :maxstars="this.maxstars"
                  :starsize="this.starsize"
                  :hasresults="this.hasresults"
                  :hasdescription="this.hasdescription"
                  :ratingdescription="this.ratingdescription"
                />
              </div>
              -->

              <div class="love-item">
                <fa icon="heart" />
              </div>

              <button @click="pushtoCart(item)" class="btn btn-main-gradient">
                <span class="ti-plus"><fa icon="cart-plus"/></span>
                add to cart
              </button>
            </div>
          </div>

          <div class="side-tab">
            <component
              :is="compsArr[isActive]"
              :cart="cart"
              :user="email"
              :address="address"
            ></component>
          </div>

          <!--
          <Order
            @show="showAddressModal = true"
            :cartLength="cart.length.toLocaleString()"
            :cart="cart"
            :address="address"
            :user="email"
          >
          </Order>
          Cart Tab
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
    <section class="restaurants-list" >
       <div class="cat-header">
            <span
              ><fa icon="th" />
              <h3>Top Restaurants</h3></span
            >
            <span
              ><a href="#" id="viewall">view all </a
              ><fa icon="chevron-circle-right"
            /></span>
          </div>
        <div class="cat-body">
          <div class="res-cont">
        <div class="sflex" >
          <div class="img-1">
          <img src="../assets/restaurant/dominos.png" id="res-logo" alt="">
        </div>
         <div class="res-info">
           <h4>Restautant name</h4>
           <p><span class="ti-loc"><fa icon="map-marker-alt"/></span>location</p>
         </div>
        </div>
        <div class="cat-three">
          <p>Meals</p>
          <p>Meals</p>
          <p>Meals</p>
        </div>
          <div class="timedistance">
            <span><fa icon="truck"/> <p>Free Delivery</p></span>
            <span><fa icon="clock"/> <p>20-30min</p></span>
          </div>
          <div class="sflex">
            <span class="ti-star"><fa icon="star"/></span><small id="score">4.5</small> <small>(30+)</small> <button class="btn btn-main-gradient">Visit</button>
          </div>
      </div>
      <div class="res-cont">
        <div class="sflex" >
          <div class="img-1">
          <img src="../assets/restaurant/dominos.png" id="res-logo" alt="">
        </div>
         <div class="res-info">
           <h4>Restautant name</h4>
           <p><span class="ti-loc"><fa icon="map-marker-alt"/></span>location</p>
         </div>
        </div>
        <div class="cat-three">
          <p>Meals</p>
          <p>Meals</p>
          <p>Meals</p>
        </div>
          <div class="timedistance">
            <span><fa icon="truck"/> <p>Free Delivery</p></span>
            <span><fa icon="clock"/> <p>20-30min</p></span>
          </div>
          <div class="sflex">
            <span class="ti-star"><fa icon="star"/></span><small id="score">4.5</small> <small>(30+)</small> <button class="btn btn-main-gradient">Visit</button>
          </div>
      </div>
      <div class="res-cont">
        <div class="sflex" >
          <div class="img-1">
          <img src="../assets/restaurant/dominos.png" id="res-logo" alt="">
        </div>
         <div class="res-info">
           <h4>Restautant name</h4>
           <p><span class="ti-loc"><fa icon="map-marker-alt"/></span>location</p>
         </div>
        </div>
        <div class="cat-three">
          <p>Meals</p>
          <p>Meals</p>
          <p>Meals</p>
        </div>
          <div class="timedistance">
            <span><fa icon="truck"/> <p>Free Delivery</p></span>
            <span><fa icon="clock"/> <p>20-30min</p></span>
          </div>
          <div class="sflex">
            <span class="ti-star"><fa icon="star"/></span><small id="score">4.5</small> <small>(30+)</small> <button class="btn btn-main-gradient">Visit</button>
          </div>
      </div>
       <div class="res-cont">
        <div class="sflex" >
          <div class="img-1">
          <img src="../assets/restaurant/dominos.png" id="res-logo" alt="">
        </div>
         <div class="res-info">
           <h4>Restautant name</h4>
           <p><span class="ti-loc"><fa icon="map-marker-alt"/></span>location</p>
         </div>
        </div>
        <div class="cat-three">
          <p>Meals</p>
          <p>Meals</p>
          <p>Meals</p>
        </div>
          <div class="timedistance">
            <span><fa icon="truck"/> <p>Free Delivery</p></span>
            <span><fa icon="clock"/> <p>20-30min</p></span>
          </div>
          <div class="sflex">
            <span class="ti-star"><fa icon="star"/></span><small id="score">4.5</small> <small>(30+)</small> <button class="btn btn-main-gradient">Visit</button>
          </div>
      </div>
      <div class="res-cont">
        <div class="sflex" >
          <div class="img-1">
          <img src="../assets/restaurant/dominos.png" id="res-logo" alt="">
        </div>
         <div class="res-info">
           <h4>Restautant name</h4>
           <p><span class="ti-loc"><fa icon="map-marker-alt"/></span>location</p>
         </div>
        </div>
        <div class="cat-three">
          <p>Meals</p>
          <p>Meals</p>
          <p>Meals</p>
        </div>
          <div class="timedistance">
            <span><fa icon="truck"/> <p>Free Delivery</p></span>
            <span><fa icon="clock"/> <p>20-30min</p></span>
          </div>
          <div class="sflex">
            <span class="ti-star"><fa icon="star"/></span><small id="score">4.5</small> <small>(30+)</small> <button class="btn btn-main-gradient">Visit</button>
          </div>
      </div>
      <div class="res-cont">
        <div class="sflex" >
          <div class="img-1">
          <img src="../assets/restaurant/dominos.png" id="res-logo" alt="">
        </div>
         <div class="res-info">
           <h4>Restautant name</h4>
           <p><span class="ti-loc"><fa icon="map-marker-alt"/></span>location</p>
         </div>
        </div>
        <div class="cat-three">
          <p>Meals</p>
          <p>Meals</p>
          <p>Meals</p>
        </div>
          <div class="timedistance">
            <span><fa icon="truck"/> <p>Free Delivery</p></span>
            <span><fa icon="clock"/> <p>20-30min</p></span>
          </div>
          <div class="sflex">
            <span class="ti-star"><fa icon="star"/></span><small id="score">4.5</small> <small>(30+)</small> <button class="btn btn-main-gradient">Visit</button>
          </div>
      </div>
        </div>
    </section>

    <section class="restaurants-section">
       <div class="res-header">
        <span><fa icon="utensils"/></span>
        <h3>Top Restaurants</h3>
       </div>
          <div class="rest-container">
            <img src="@/assets/restaurant/dominos.png" alt="#one">
            <img src="@/assets/restaurant/kfc.png" alt="#two">
            <img src="@/assets/restaurant/starbucks.png" alt="#three">
          </div>
        </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Modal from "../components/Modal.vue";
import SideNav from "../components/SideNav.vue";
import Order from "../components/Order.vue";
import BottomNav from "../components/Bottom_Navbar.vue";
import Menucard from "../components/MenuCard.vue";
import Slider from "../components/Slider.vue";
import Footer from "../components/Footer.vue";
import Footermain from "../components/Footer_main.vue";
import Searchbar from "../components/Searchbar.vue";
import Pagination from "../components/Pagination.vue";
import FilterTab from "../components/FIlterTab.vue";
import CartTab from "../components/CartTab.vue";
import Item from "../components/Item.vue";
import ripple from "../components/ripple.vue";
import items from "../components/js/items.js";
import cart from "../components/js/cart.js";
import btnRipple from "../components/js/ripple.js";
import Rating from "../components/Rating.vue";
import { useToast } from "vue-toastification";
import Button from "../components/Button.vue"
import Navbar from "../components/Navbar.vue"

export default {
  name: "Home",
  components: {
    Button,
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
    Item,
    ripple,
    Navbar,
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },
  data() {
    return {
      email: "",
      password: "",
      address: "",
      user: "",
      showAddressModal: false,
      showItemInfo: false,
      total: "",
      Dfee: "",
      show: false,
      compsArr: [Order, FilterTab],
      isActive: 0,
      selectedItem: [],
      item: items,
      cart: cart,
    };
  },
  methods: {
    pushtoCart(itemm) {
      if (this.cart.push(itemm)) {
        this.toast.success("Item successfully added to cart");
      } else {
        this.toast.error("failed to add item to cart");
      }
      /*
      this.$toasted.show("Added to cart !!", { 
        theme: "toasted-primary",
        position: "top-right",
        duration: 2000
      });
      */
    },
    funct(btn){
      if(btn === "checkout"){
        alert('This is a checkout button')
      }else {
        if(btn === "save"){
          alert('This is a save button')
        }
      }
    }
  },
};
</script>

<style lang="scss"></style>
