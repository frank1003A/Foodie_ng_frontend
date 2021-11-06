<template>
  <div class="main-wrapper" >
     <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Bottom Navbar -->
        <BottomNav></BottomNav>


        <!--mid-pad--->
        <div class="middle-bar">
            <div class="pathdesc">
                <p>Home > Cart</p>
            <h3>120 restaurants in Festac Town</h3>
            </div>
                    <Searchbar></Searchbar>
        </div>



        <div class="wallet-container">
            <div class="wallet">
                <!--<img src="@/assets/img/atmcard.png" alt="">-->
                 <span class="wallet-info">
                <span class="info" >
                    <h1>&#8358; 50,000.00</h1>
                    <p>Current Wallet Balance</p>
                </span>
                <button class="btn btn-main-gradient" @click="showAddressModal = true">Add Money to Wallet</button>
            </span>
            </div>

            <div class="transfer-grid">
                <h2>Wallet Transfer</h2>
             <div class="wallet-form">
        <div class="form-group">
            <label for="reciever">Pay to</label>
            <input type="text" class="form-control-small" placeholder="3F2BE3J23J3 or email@whatmail.com" />
            <br/>
            <span class="under">please enter wallet Id or destination email</span>
        </div>

        <div class="form-group">
            <label for="amount">Amount</label>
            <input type="text" class="form-control-small" placeholder="&#8358; 2000.00" />
            <br/>
            <span class="under">commision: &#8358; 20.00 </span>
        </div>


        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control-small" placeholder="**********" />
        </div>

        <br/>

        <div class="form-group">
            <button class="btn btn-main-gradient">Transfer from wallet</button>
        </div>
    </div>
            </div>
            <div>
                <h2>Wallet Transactions</h2>
            </div>  
        </div>

        <!--modal-->
        <Modal v-if="showAddressModal" @close="showAddressModal = false">
            <template v-slot:header>
                <h4>Add Money to your Wallet</h4>
            </template>

            <template v-slot:body>    
                <div class="form-group">
                    <input type="text" class="form-control" v-model="address" placeholder="Enter Amount to be Added into your wallet" />
                </div>
            </template>
        </Modal>
  </div>
  <Footer id="extupFooter"></Footer>
</template>

<script>
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import BottomNav from '../components/Bottom_Navbar.vue'
import Modal from '../components/Modal.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Wallet',
    components:{
        Nav, 
        SideNav,
        BottomNav,
        Modal,
        Footer
    },
    data() {
        return {
            showAddressModal: false,
        }
    },
}
</script>

<style lang="scss" scoped>
 @import '@/assets/scss/wallet.scss';
</style>