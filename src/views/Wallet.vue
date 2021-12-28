<template>
     <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Bottom Navbar--> 
        <BottomNav :cart="cart"></BottomNav>


        <!--mid-pad
        <div class="middle-bar">
            <div class="pathdesc">
                <p>Home > Cart</p>
            <h3>120 restaurants in Festac Town</h3>
            </div>
                    <Searchbar></Searchbar>
        </div>
        --->



        <div class="wallet-container">
            <div class="bg-grey">
            <div class="wallet">
                <!--<img src="@/assets/img/atmcard.png" alt="">-->
                 <span class="wallet-info">
                <span class="info" >
                    <h1>&#8358; 50,000.00</h1>
                    <p>Current Wallet Balance</p>
                </span>
                <button class="btn btn-main-gradient" @click="showCreditModal = true">Add Money to Wallet</button>
            </span>
            </div>
            <div class="tbtns">
                <button class="btn btn-main-gradient btn-big" @click="showTransferModal = true">Send money</button>
                <button class="btn btn-main-gradient btn-big"><img src="../assets/icons/transfer_48.png" alt="transfer"></button>
            </div>
            </div>
            <div class="Transaction-container">
                <!---->
                <div class="theader">
                    <h2 class="form-control-small">Transactions</h2>
                    <input type="date" class="form-control-small">
                </div>

                <!---->
                <div class="events">
                    <div class="event">
                        <div class="imglogo">
                            <img src="" alt="logo">
                        </div>
                        <div class="col-e">
                            <h4 class="h3" >Transfer to olivia</h4>
                            <p class="p">January 15</p>
                        </div>
                        <div class="amount">
                            <p>&#8358; 30,000</p>
                        </div>
                        </div>
                    <div class="event">
                        <div class="imglogo">
                            <img src="" alt="logo">
                        </div>
                        <div class="col-e">
                            <h4 class="h3" >Transfer to olivia</h4>
                            <p class="p">January 15</p>
                        </div>
                        <div class="amount">
                            <p>&#8358; 30,000</p>
                        </div>
                        </div>
                    <div class="event">
                        <div class="imglogo">
                            <img src="" alt="logo">
                        </div>
                        <div class="col-e">
                            <h4 class="h3" >Transfer to olivia</h4>
                            <p class="p">January 15</p>
                        </div>
                        <div class="amount">
                            <p>&#8358; 30,000</p>
                        </div>
                        </div>                       
                </div>
            </div>  
        </div>


        <!--modal for wallet transfer-->
        <Modal v-if="showTransferModal" @close="showTransferModal = false">
            <template v-slot:header>
                <h4>Transfer money from your wallet</h4>
            </template>

            <template v-slot:body>    
                 <div class="wallet-form">
        <div class="form-group">
            <label for="reciever">Pay to</label>
            <input type="text" class="form-control" placeholder="id or email@whatmail.com" />
            <span class="under">please enter wallet Id or destination email</span>
        </div>

        <div class="form-group">
            <label for="amount">Amount</label>
            <input type="text" class="form-control" placeholder="&#8358; 2000.00" />
            <span class="under">commision: &#8358; 20.00 </span>
        </div>


        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="**********" />
        </div>

        <br/>

        <div class="form-group">
            <button class="btn btn-main-gradient btn-block btn-big">Transfer from wallet</button>
        </div>
    </div>
            </template>
        </Modal>

        <!--modal-->
        <Modal v-if="showCreditModal" @close="showCreditModal = false">
            <template v-slot:header>
                <h4>Add Money to your Wallet</h4>
            </template>

            <template v-slot:body>    
                <div class="form-group">
                    <input type="text" class="form-control" v-model="address" placeholder="Enter Amount to be Added into your wallet" />
                </div>
            </template>
        </Modal>

  <Footermain id="extupFooter"></Footermain>
</template>

<script>
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import Footermain from '../components/Footer_main.vue'
import BottomNav from '../components/Bottom_Navbar.vue'
import Modal from '../components/Modal.vue'
import Footer from '../components/Footer.vue'
import CartVue from './Cart.vue'

export default {
    name: 'Wallet',
    components:{
        Nav, 
        SideNav,
        BottomNav,
        Modal,
        Footermain
    },
    data() {
        return {
            showAddressModal: false,
            showCreditModal: false,
            showTransferModal: false,
            cart:[
                {
                   id: 3,
                },
                {
                   id: 3,
                },
                {
                   id: 3,
                }
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
 @import '@/assets/scss/wallet.scss';
</style>