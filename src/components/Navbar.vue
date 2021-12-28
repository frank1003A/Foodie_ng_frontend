<template>
  <!-- header section starts-->
<div class="header">
    <div class="top-container">

        <nav class="navbar">
            <ul class="company-socials">
                <!--
                <span><img id="socicons" src="" alt=""></span>
                <span><img  id="socicons" src="../food website/images/social_icons/twitter_32.png" alt=""></span>
                <span><img id="socicons" src="../food website/images/social_icons/gmail_32.png" alt=""></span>
                <span><img id="socicons" src="../food website/images/social_icons/instagram_32.png" alt=""></span>
                -->
        </ul>
        </nav>
    
        <nav class="extra">
            <a href="#">Track Order</a>
            <a href="#">Help</a>
            <a href="#"><fa icon="flag-usa" />
                <select name="country-select" id="country-select">
                <option value="one">English(USA)</option>
            </select>
            </a>
    
        </nav>
    </div>
    
    <header>
    
        <a href="#" class="logo"><i class="fas fa-utensils"></i><img id="logoimg" src="@/assets/f-logo-2.png" alt="" /></a>
    
        <!--
        <nav class="navbar">
            <a class="active" href="#home">home</a>
            <a href="#dishes">dishes</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#review">review</a>
            <a href="#order">order</a>
        </nav>
        <a href="#" class="fas fa-shopping-cart"></a>
            <a href="#" class="fas fa-heart"></a>
            <i class="fas fa-search" id="search-icon"></i>
            <i class="fas fa-bars" id="menu-bars"></i>
        -->

        <div class="icons">
            <a href="#"><fa icon="shopping-cart" /></a>
            <!--
            <a href="#"><img id="navimg" src="./images/icons/love_32.png" alt=""></a>
            <a href="#"><img id="navimg" src="./images/icons/chat_bubble_32.png" alt=""></a>
            <a href="#"><img id="navimg" src="./images/icons/marker_32.png" alt=""></a>
           <i class="fas fa-bars" id="menu-bars"></i>-->
        </div>

        <div class="user-section">
            <div class="user">
                <div class="icons">
                    <a href="#" class="user-a"><fa icon="user" /></a>
                </div>
                <div class="user-info">
                    <p>Ezene Bryan</p>
                    <select name="user-select" id="user-select">
                        <option value="one">My Account</option>
                    </select>
                </div>
            </div>
        </div>    
    
    </header>

</div>
<!-- header section ends-->
</template>

<script>
import Button from "../components/Button.vue"
export default {
    name:'Navbar',
    props:{

    },
    components:{
        Button,
    },
    data(){
        return{

        }
    },
    methods: {
        headerChangePosition(){
            const navbar = document.querySelector("header")
      window.onscroll = function(){
        if(window.scrollY > 0){
          navbar.classList.add("header-fixed");
          navbar.classList.remove(".header")
        }
        else{
           navbar.classList.remove("header-fixed");
          navbar.classList.add(".header")
        }
      }
        }
    },

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
</style>