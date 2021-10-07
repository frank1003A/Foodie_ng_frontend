<template>
    <div class="front-wrapper">

        <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Side Navbar-->
        <SideNav></SideNav>

        <div class="front-main">

        <!-- Slide show-->
        <div class="slide-wrapper">
            <Slider></Slider>
        </div>

        <!--Menu category-->
                    <div class="category-wrapper" >
                        <ul>
                            <div class="dropdown">
                            <button class="dropbtn">Category</button>
                              <div class="dropdown-content">
                                <li><img src="../assets/img/dish.svg" alt="dish"><p>Meals</p></li>
                            <li><img src="../assets/img/coffee-cup.svg" alt=""><p>Cofee</p></li>
                            <li><img src="../assets/img/hamburger.svg" alt=""><p>Snacks</p></li>
                            <li><img src="../assets/img/kebab.svg" alt=""><p>Kebab</p></li>
                            <li><img src="../assets/img/dish.svg" alt="dish"><p>Meals</p></li>
                            <li><img src="../assets/img/coffee-cup.svg" alt=""><p>Cofee</p></li>
                            <li><img src="../assets/img/hamburger.svg" alt=""><p>Snacks</p></li>
                            <li><img src="../assets/img/kebab.svg" alt=""><p>Kebab</p></li>
                              </div>
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
                          <!--
                          <label for="selector">Filter by  </label>
                          <select name="selector" id="">
                            <option value="Menu">Menu</option>
                            <option value="Location">Location</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="School">School</option>
                          </select>
                          -->
                        </ul>
                
                    </div>

            <div class="main-grid">
                <div class="menu-section">
                    <h3></h3>    

                    <div class="menu-grid">
                        <div  class="menu-card" v-for="(item, index) in item" :key="index"
                         >
                            <div>
                                <span class="bg-main-gradient item-price">
                                    <span>&#8358;</span> {{item.price}}
                                </span>
                                <span class="bg-main-gradient img-1 wishlist">
                                  <span><img src="../assets/img/love_a.png" alt=""></span>
                                </span>
                            </div>
                            <div>
                                <span class="item-name"  @click="(showItemInfo = true) && (selectedItem = item)" >{{item.name}}</span>
                            </div>

                            <button @click="pushtoCart(item)" class="btn btn-main-gradient">
                            Add to cart
                            </button>

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

export default {  
  name: 'Home',
  components:{
      Nav, 
      Modal,
      SideNav,
      Order,
      Slider
  },
  data() {
    return {
        email: "",
        password: "",
        address: "",
        showAddressModal: false,
        showItemInfo: false,
        selectedItem: [],
        item:[
            {
          name: 'Fried rice and chicken',
          price: '1200',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: "@/assets/simg/img2.jpg",
          status: 'Available till 6pm today'
        },
        {
          name: 'Beans and wheat',
          price: '1000',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img1.jpg',
          status: 'Available till 6pm today'
        },
        {
          name: 'Amala and ewedu',
          price: '1500',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img4.jpg',
          status: 'Available till 6pm today'
        },
        {
          name: 'Fried rice and chicken',
          price: '1200',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: "@/assets/simg/img2.jpg",
          status: 'Available till 6pm today'
        },
        {
          name: 'Beans and wheat',
          price: '1000',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img1.jpg',
          status: 'Available till 6pm today'
        },
        {
          name: 'Amala and ewedu',
          price: '1500',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img4.jpg',
          status: 'Available till 6pm today'
        },
        {
          name: 'Fried rice and chicken',
          price: '1200',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: "@/assets/simg/img2.jpg",
          status: 'Available till 6pm today'
        },
        {
          name: 'Beans and wheat',
          price: '1000',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img1.jpg',
          status: 'Available till 6pm today'
        },
        {
          name: 'Amala and ewedu',
          price: '1500',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img4.jpg',
          status: 'Available till 6pm today'
        },
        {
          name: 'Fried rice and chicken',
          price: '1200',
          restaurant: 'KFC Restaurant',
          menu: 'Sunday Specials',
          image: "@/assets/simg/img2.jpg",
          status: 'Available till 6pm today'
        },
        {
          name: 'Beans and wheat',
          price: '1000',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img1.jpg',
          status: 'Available till 6pm today'
        },
        {
          name: 'Amala and ewedu',
          price: '1500',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image: '@/assets/simg/img4.jpg',
          status: 'Available till 6pm today'
        }
        ],
        cart: []
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


