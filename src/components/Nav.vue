<template>
  <header class="front-header">
    <slide-nav
      v-show="isOpen"
      :Show="isOpen"
      @close="isOpen = !isOpen"
    ></slide-nav>
      <nav>
        <div class="nav-logo">
          <img id="logo" src="@/assets/f-logo-2.png" alt="" />
        </div>

        <!--
                <div class="front-search">
                    <span class="ti-search"></span>
                    <input type="search" placeholder="what would you like to eat?" />
                </div>
                -->

                <div class="front-nav-links">

                   

<!--
   <div>
                        <router-link to="/account"><small class="links">Login</small></router-link> |   
                        <router-link to="/account"><small class="links">Sign Up</small></router-link>
                    </div>
                    <div v-if="isLogin === true" >
                        <button class="btn btn-main-gradient btn-link"><small ><span class="ti-user"></span>Profile</small></button> | <button class="btn btn-main-gradient btn-link"><small><span class="ti-power-off"></span> Logout</small></button>
                    </div>

                    <div v-if="isLogin === true" >
                        <router-link to="/restaurant/account"><small>Create Restaurant</small></router-link>
                    </div>
                    -->
                    <divl class="login">
                      <Button 
                      @btn-click="showAccountModal = true" 
                      :bclass="'btn btn-main-gradient'" 
                      :bword="'Login'"  
                      :bicon="'sign-in-alt'" >
                      </Button>
                    </divl>
                    <div class="help">
                      <span><fa icon="question-circle"/></span>
                       <select name="user-select" id="user-select">
                        <option value="one">Need Help</option>
                    </select>
                    </div>

                    <div class="user-info">
                    <span class="ti-user" @click="menuToggle"><fa icon="user"/></span> 
                    <select name="user-select" id="user-select">
                      <option value="one">My Account</option>
                    </select>
                    <div class="menu-option">
                      <ul>
                      <li><span class="ti-uc"><fa icon="user-circle"/></span>My Profile</li>
                      <li><span class="ti-edit"><fa icon="edit"/></span>Edit Profile</li>
                      <li><span class="ti-inbox"><fa icon="inbox"/></span>Inbox</li>
                      <li><span class="ti-setting"><fa icon="cog"/></span>Settings</li>
                      <li><span class="ti-qc"><fa icon="question-circle"/></span>Help</li>
                      <li><span class="ti-soa"><fa icon="sign-out-alt"/></span> Logout</li>
                    </ul>

                    </div>
                    
                    </div>

                    <div>
                        
                        <router-link to="/cart">
                        <Button :bword="'Cart'" :bicon="'shopping-cart'" :bclass="'btn btn-main-gradient'" :id="'cart'"/>
                        </router-link>
                        
                    </div>
                   
                </div>

        <button class="togglebutton" @click="isOpen = !isOpen">
          <fa icon="bars" />
        </button>
      </nav>
  </header>
  <LoginModal v-if="showAccountModal" @close="showAccountModal = false">
    <template v-slot:content>
       <Account></Account>
    </template>
  </LoginModal>

</template>

<script>
import slideNav from "../components/slideOutMenu.vue";
import Searchbar from "../components/Searchbar.vue";
import Button from "../components/Button.vue"
import Modal from "../components/Modal.vue"
import Account from "../views/Account.vue"
import LoginModal from "../components/Login-Modal.vue"
export default {
  name: "Nav",
  props: {
    isOpen: Boolean,
  },
  components: {
    slideNav,
    Searchbar,
    Button,
    Modal,
    Account,
    LoginModal,
  },
  data() {
    return {
      isLogin: false,
      showAccountModal: false,
    };
  },
  methods: {
   /**layout function 
    navColorChange(){
      const navbar = document.querySelector(".front-header")
      window.onscroll = function(){
        if(window.scrollY > 0){
          navbar.classList.add("notTrans")
        }
        else{
          navbar.classList.remove("notTrans")
        }
      }
    }
    */
    menuToggle(){
      const toggleMenu = document.querySelector(".menu-option")
      toggleMenu.classList.toggle('menu-option-active')
    }
  },
  mounted() {
    //this.navColorChange();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/top_navbar.scss";
</style>
