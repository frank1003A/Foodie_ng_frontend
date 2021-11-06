<template>
<div>

    <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Bottom Navbar -->
        <BottomNav></BottomNav>

         <!--mid-pad-->
        <div v-if="cravelist.length == 0" class="middle-bar">
            
        </div>

        <div v-else class="middle-bar">
            <img src="../assets/icons/love_32.png" alt="">
        </div>


    <div v-if="cravelist.length == 0" class="crave-container">
        <img src="../assets/icons/Cravelist_folder_64.png" alt="">
                <p>Your cravelist is empty</p>
                <label for="">Save items you love in cravelist</label>
    </div>
    <div v-else class="crave-container">
         <!--cart item-->
                                      <div class="cart-body" id="cravelist">
                            <div class="cart-items">
                                <div class="cart-item" v-for="(item, index) in cravelist" :key="index">
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

                <!--View more menu--> 
              <div class="menu-section" id="More">
                    
                    <div class="menu-flex">
                        <div  
                        class="menu-card" 
                        :style="`background-image: url(${item.image})`" 
                        v-for="(item, index) in item" :key="index">
                            <div>
                                <span class="bg-main-gradient item-price">
                                    <span>&#8358;</span> {{item.price}}
                                </span>
                                <span class="img-1 bg-main-gradient cravelist"><img src="@/assets/img/love_a.png" alt="love"></span>
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
                             <!--<Pagination></Pagination>-->
                </div> 
    </div>         
</div>
<Footer id="extupFooter"></Footer>
</template>

<script>
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import BottomNav from '../components/Bottom_Navbar.vue'
import Modal from '../components/Modal.vue'
import Footer from '../components/Footer.vue'
import image1 from '@/assets/newimg/jollofrice.jpg'
import image2 from '@/assets/newimg/friedrice.jpg'
import image3 from '@/assets/newimg/food1.jpg'

export default {
    name: 'Cravelist',
    components: {
        Nav,
        Modal,
        Footer,
        SideNav,
        BottomNav
    },
    props:{
        item: Array,
    },
    data(){
        return{
            cravelist: [
                 
            ]
        }
    }

}
</script>

<style lang="scss" scoped>

@media only screen and (max-width: 470px){
    .middle-bar{
        visibility: visible;
    }
    .crave-container{
    max-height: 100vh;
    position: relative;
    background: #fff;
    display: block;
    padding: 10px;
    margin-bottom: 50%;
    //margin-top: 80px;
    border: none;
    text-align: center;

    img{
        width: 120px;
    }
    

        p{
            font-size: 20px;
            font-weight: 900;
            color: #faae0a;
        }

        label{
            font-size: 15px;
            margin-top: 10px;
             font-weight: 600;
        }
}


#cravelist{

    .cart-items{
        min-height: 90vh;
    }

}

}
</style>