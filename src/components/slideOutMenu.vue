<template>
  <div class="c-slideout">
      <transition name="overlay">
          <div class="c-slideout_overlay" v-show="Show" @click="$emit('close')" >
          <transition name="slide">
              <div class="c-slideout_container u-px2 u-py2"
              v-if="Show" @click.stop>
              <div class="slidemenu_header">
                  <p>Ezene Chidi</p>
              </div>
              <button class="c-close" aria-label="close"
              @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
              </button>
              <div class="slidemenu_body">
                  <ul @click="$emit('close')">
                  <li @click="active = true" class="" >
                        <div>
                            <router-link to="/" >
                            <img src="../assets/icons/home_32.png" alt="">
                            <p>Edit Profile</p>
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true" >
                        <div>
                            <router-link to="/wallet" >
                            <img src="../assets/icons/wallet_32.png" alt="">
                            <p>Reservations</p>
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true" >
                        <div>
                            <router-link to="/cravelist" >
                            <img src="../assets/icons/love_32.png" alt="">
                            <p>cravelist</p>
                            </router-link>
                        </div>
                    </li>
                    <li @click="active = true" >
                        <div>
                            <router-link to="/profile" >
                            <img src="../assets/icons/profile_32.png" alt="">
                            <p>Restaurant</p>
                            </router-link>
                        </div>
                    </li>
              </ul>

              </div>
              <div class="sldiemenu_footer">
                  <div class="dividersolid"></div>
                  <button class="btn btn-big">Log out</button>
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