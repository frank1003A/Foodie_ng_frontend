<template>
    <!-- Top Navbar-->
        <Nav></Nav>

    <div class="item-container">
        <!---->
        <div class="header">
        <a href="/"> &lt; Back to Marketplace</a>
        </div>  
        <!---->

        <!----> 
        <div class="images">
            <img id="item-image" :src="`${selectedItem.image}`" alt="itemimage">
        </div>
        <!---->

        <!---->
        <div class="counter-container">
            <button id="cbtn">-</button>
            <input id="counterinput" type="text" value="1">
            <button id="cbtn">+</button>
        </div>
        <!---->

        <!---->
        <div class="header">
            <div class="rflex">
                <h4>{{selectedItem.name}}</h4>
                <span id="catimg"><img src="../assets/cat-icon/food_32.png" alt="dish">Category</span>
            </div>
             <div class="price">
               <p>&#8358; {{selectedItem.price}}</p>
            </div>
        </div>
        <!---->

        <!---->
         <div class="infosect">
            <span id="infoimg" ><img src="../assets/icons/star_16.png" alt="">4.5</span>
            <span id="infoimg"><img src="../assets/icons/time_16.png" alt=""> 10-15 mins</span>
            <span id="infoimg"><img src="../assets/img/location_16.png" alt=""> Festac Town</span>
            <span class="badge success">Available</span>
        </div>
        <!---->

        <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias, cum cupiditate nemo voluptates asperiores dolore laudantium ex expedita exercitationem non molestias dolorem voluptate ducimus accusamus. Neque laborum molestiae rerum.</p>
        </div>

        <!---->
        <div class="restaurant-container">
            <div class="restaurant">
                <img src="@/assets/icons/kfc_chicken_32.png" alt="logo">
                <div class="rflex">
                    <h5>{{selectedItem.restaurant}}</h5>
                    <a href="#">view restaurant</a>
                </div>
                <div class="icon">
                    <img id="i1" src="@/assets/icons/forward_16.png" alt="forward">
                </div>
            </div>
        </div>
        <!---->

        <div class="tabs">

        </div>
        <button class="btn btn-block btn-big btn-main-gradient " >Add to Cart</button>
    </div>
    <section>
        <div class="main-grid">
        <!--View all menu in the nearby filer --> 
              <div class="menu-section" id="Nearby">
                  <div class="cat-header">
                      <h3><img src="../assets/img/location_16.png" alt="">Similar Food Items</h3>    
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
                                <span class="item-name"  @click="(selectedItem = item)" >{{item.name}}</span>
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
                </div>
    </section>
 <Footermain></Footermain>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footermain from '../components/Footer_main.vue'
import image1 from '@/assets/newimg/jollofrice.jpg'
import image2 from '@/assets/newimg/friedrice.jpg'
import image3 from '@/assets/newimg/food1.jpg'
import image4 from '@/assets/newimg/food2.jpg'
import image5 from '@/assets/newimg/food3.jpg'
import image6 from '@/assets/newimg/burger.jpg'
import image7 from '@/assets/newimg/amala_ewedu.jpg'
import image8 from '@/assets/newimg/dish1.jpg'
import image9 from '@/assets/newimg/dish2.jpg'
export default {
    name: 'Item',
    props:{
        item: Array,
        selectedItem: Object
    },
    components:{
        Nav,
        Footermain
    },
    data() {
        return {
            selectedItem: [
                {
          name: 'Amala and ewedu',
          price: '1500.00',
          restaurant: 'Onehouse Restaurant',
          menu: 'green menu',
          image:image3,
          status: 'Available till 6pm today'
        },
            ],
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
        }
    },

}
</script>

<style lang="scss" scoped>
.item-container{
    margin-top: 100px;
    min-height: 100vh;
        padding: 30px;
}
.restaurant-container{
    background: white;
    padding: 50px;
}
.images {
    padding: 20px;
    background: white;
    height: 250px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.restaurant{
    background: #dedbdb;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
}

.rflex {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
    a {
    font-size: .7rem;
    color: #585757;
}
}

img#item-image {
    height: 200px;
    border-radius: 20px;
}

.icon{
        margin-left: auto;
    background: white;
    border-radius: 5px;
}

.price {
    margin-left: auto;
    background: var(--main-gradient);
    border-radius: 8px;
    height: 30px;
    color: white;
    display: flex;
    padding: 10px;
    align-items: center;
    font-weight: 600;
}

.header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5%;
}

.counter-container {
    background: orangered;
    height: 30px;
    width: 150px;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-around;
    border-radius: 10px;
    margin: auto;
}

button#cbtn {
    width: 50px;
    height: 30px;
    border-radius: 50px;
    border: none;
    display: flex;
    background: orangered;
    font-size: 2rem;
    color: white;
    align-items: center;
    justify-content: center;
}

input#counterinput {
    width: 50px;
    height: 30px;
    background: orangered;
    border: none;
    color: white;
    font-weight: 700;
    text-align: center;
}

.infosect {
    height: max-content;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 5%
}

span#catimg {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
}

.description {
    margin-top: 5%;
    font-size: 1rem;
    line-height: 1;
    overflow-y: hidden;
}

span#infoimg {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}

</style>