<template>
  <div class="front-wrapper">
        <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Side Navbar-->
        <SideNav></SideNav>
        <div class="front-main">

        <h3>Order</h3>
        <div class="cart-wrapper">
            <div class="main-grid">
                <Order @show="showAddressModal = true" 
        
        :address="address" 
        :user="email" >
        </Order>
            </div>
        </div>

        <!--Cart  
        <Order @show="showAddressModal = true" 
        
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
</template>

<script>
import Order from '../components/Order.vue'
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import Modal from '../components/Modal.vue'

export default {
    name: 'Cart',
    components: {
        Order,
        Nav,
        Modal,
        SideNav
    },
    data() {
        return {
        email: "",
        password: "",
        address: "",
        showAddressModal: false,
        }
    },

}
</script>

<style>

</style>