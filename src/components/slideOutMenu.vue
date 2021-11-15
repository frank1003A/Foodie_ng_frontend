<template>
  <div class="c-slideout">
      <transition name="overlay">
          <div class="c-slideout_overlay" v-show="Show" @click="$emit('close')" >
          <transition name="slide">
              <div class="c-slideout_container u-px2 u-py2"
              v-if="Show" @click.stop>
              <div class="slidemenu_header">
                  <img id="image1" src="@/assets/icons/customer_48.png" alt="photo">
                  <div class="userinfo">
                      <p>Welcome</p>
                      <h4>Bryan Ezene</h4>
                  </div>
                  <img id="licon" src="@/assets/icons/logout_48.png" alt="logout">
              </div>
              <button class="c-close" aria-label="close"
              @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
              </button>
              <div class="slidemenu_body">
                  <ul @click="$emit('close')" class="menu_options">
                  <li @click="active = true">
                        <div>
                            <router-link to="/" >
                            <div class="option">
                                <img src="../assets/icons/transfer_48.png" alt="transfer">
                                 <p>Transfer Funds</p>
                                 <img id="fi" src="@/assets/icons/forward_16.png" alt="forward">
                            </div>
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true">
                        <div>
                            <router-link to="/wallet" >
                            <div class="option">
                                <img src="../assets/icons/credit_card_48.png" alt="">
                                <p>My Wallet</p>
                                <img id="fi" src="@/assets/icons/forward_16.png" alt="forward">
                            </div>
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true">
                        <div>
                            <router-link to="/cravelist" >
                            <div class="option">
                                <img src="../assets/icons/customer_48.png" alt="">
                                <p>Profile</p>
                                <img id="fi" src="@/assets/icons/forward_16.png" alt="forward">
                            </div>
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true">
                        <div>
                            <router-link to="/profile" >
                            <div class="option">
                                <img src="../assets/icons/settings_48.png" alt="">
                                <p>Settings</p>
                                <img id="fi" src="@/assets/icons/forward_16.png" alt="forward">
                            </div>
                            </router-link>
                        </div>
                    </li>
              </ul>

              </div>
              <div class="sldiemenu_footer">
                  <div class="gmaillink">
                      <img src="@/assets/icons/google_48.png" alt="logo">
                      <p>How can we help you ?</p>
                  </div>
                  <div class="links">
                      <button class="btn  outlined">Privacy policy</button>
                      <button class="btn outlined">imprint</button>
                      <button class="btn outlined">language</button>
                  </div>
                  <div class="dividersolid"></div>
                  <div class="protek">
                      &copy;Protek 2021
                  </div>
              </div>
              </div>
          </transition>
          </div>
      </transition>
  </div>
</template>

<script>
export default {
    name: 'SlideOutMenu',
    props: {
        Show:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            isOpen: false
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/slideoutmenu.scss';
</style>