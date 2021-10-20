<template>
  <div>
     <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Side Navbar-->
        <SideNav></SideNav>


        <div class="wallet-container">
            <div class="wallet">
            <div class="wallet-table">
                 <h2>Wallet Transactions</h2>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Restaurant Name</th>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>KFC Restaurant</td>
                            <td>Jollof rice and chicken</td>
                            <td>&#8358; 2000.00</td>
                            <td><span class="badge success">Success</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>

            <div class="transfer-grid">
                 <span class="wallet-info">
                <span class="info" >
                    <h1>&#8358; 50,000.00</h1>
                    <p>Current Wallet Balance</p>
                </span>
                <button class="btn btn-main-gradient" @click="showAddressModal = true">Add Money to Wallet</button>
            </span>

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
</template>

<script>
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import Modal from '../components/Modal.vue'

export default {
    name: 'Wallet',
    components:{
        Nav, 
        SideNav,
        Modal
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