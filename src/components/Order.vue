<template>
  <div class="order-wrapper">
    <div class="cart-sum">
      <div class="cart-address">
        <h3>My Orders</h3>
        <div class="price-block">
          <div class="c-address">
            <div class="custom-select">
              <span class="i-location"><fa icon="map-marker-alt"/> </span>
              <select name="location" id="order-location">
                <option value="">1314 Morris Street</option>
                <option value=""></option>
              </select>
              <Button 
              :bclass="'btn btn-main-gradient btn-block'" 
              @btn-click="showAddressModal = true" 
              :bword="'Address'"
              :bicon="'plus'"
              :id="'cloc'"
              />
            </div>
          </div>

          <div class="timedistance">
            <span><fa icon="clock"/> <p>40 min</p></span>
            <span><fa icon="road"/> <p>4kms</p></span>
          </div>

          <!-- <button class="btn btn-main-gradient btn-block" @click="$emit('show')">
                                            <span class="ti-location-pin"></span> Change
                                        </button>-->
        </div>

        <div>
          <div class="dividersolid"></div>

          <!--cart item-->
          <div class="cart-body">
            <div class="cart-item" v-for="(item, index) in cart" :key="index">
              <div class="cart-info">
                <span class="ti-trash"><fa icon="trash" @click="pushOut(item)" /></span>
                <div>
                  <h5>{{ item.name }}</h5>
                  <small>{{ item.price }}</small>
                </div>
              </div>
              <div class="cart-controls-new">
                <span class="ti-angle-up" @click="incrementItemQty"> <fa icon="plus"/> </span>
                <input type="text" readonly :value="itemQty" />
                <span class="ti-angle-down" @click="decrementItemQty"> <fa icon="minus"/> </span>
              </div>
            </div>
          </div>
          <!--cart item end-->

          <div class="dividersolid"></div>

          <div class="price-flex">
            <small>Subtotal</small>
            <small>&#8358; 2,000.00</small>
          </div>
          <div class="price-flex">
            <small>Delivery fee</small>
            <small>&#8358; 250.00</small>
          </div>
          <div class="promo">
            <div class="coupon-flex">
              <input
                type="text"
                class="form-control"
                placeholder="coupon code"
                v-model="couponCode"
              />
              <Button 
              :bclass="'btn btn-small btn-main-gradient btn-block'" 
              :bword="'Apply'"
              @btn-click="couponLogic(couponCode)"
               />
            </div>
          </div>
          <div class="dividersolid"></div>

          <div class="price-flex">
            <small>Total</small>
            <h4>&#8358; 2,250.00</h4>
          </div>
        </div>

        <div class="cart-pay-btn">
          <Button 
          :bclass="'btn btn-block btn-main-gradient btn-big'"
          @btn-click="showCheckoutModal = true"
          :bicon="'credit-card'"
          :bword="'Checkout'"
           />


          <button
            v-if="address != ''"
            class="btn btn-success"
            @click="$emit('show')"
          >
            Add delivery address
          </button>
          <br />
          <button
            v-if="user != ''"
            class="btn btn-success"
            @click="$router.push('/account')"
          >
            Login to continue
          </button>
        </div>
      </div>
    </div>
  </div>
  <Modal v-if="showCheckoutModal" @close="showCheckoutModal = false">
            <template v-slot:header>
                <h4>Thank You for shopping with us</h4>
            </template>

            <template v-slot:body>
              <span class="ti-pay"><fa icon="handshake"/></span>    
              <h3>
                 You will be redirected to Paystack payment page
              </h3>
            </template>
            <template v-slot:footer >
               <Button 
              :bclass="'btn btn-main-gradient'"
              :bword="'Proceed'"
              @btn-click="showCheckoutModal = false"
               />

              <Button 
              :bclass="'btn btn-main-gradient'"
              :bword="'Continue Shopping'"
              @btn-click="showCheckoutModal = false"
               />
            </template>
        </Modal>
  
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
            <template v-slot:footer >
              <Button 
              :bclass="'btn btn-main-gradient'"
              :bword="'Save'"
              @btn-click="showAddressModal = false"
               />
            </template>
        </Modal>
</template>

<script>
import cart from '../components/js/cart.js'
import Modal from '../components/Modal.vue'
import Button from "../components/Button.vue"
import { useToast } from "vue-toastification";

export default {
  name: "Order",
  setup() {
    const toast = useToast();
    return {
      toast,
    }
  },
  components:{
    Modal,
    Button,
  },
  props: {
    cartLength: String,
    cart: Array,
    image: Object,
    address: String,
    user: String,
  },
  data(){
    return{
      cart: cart,
      showCheckoutModal: false,
      showAddressModal : false,
      itemQty: 1,
      couponCode:'',
    }
  },
  methods: {
    /*
    updateItemQty(index, item, flag) {
      if (flag === 0 && Number(item.qty) > 1) {
        item.qty = Number(item.qty) - 1;
      } else {
        item.qty = Number(item.qty) + 1;
      }
    },
    */
    generateCoupon(){
      const newCouponCode = Math.floor(Math.random() * 1000) + 1;
    },

   couponLogic(value){
     value === 'coupon' ? this.toast.success('coupon applied') : this.toast.error('coupon invalid');
   },

   updateQty(){
      if(this.cart.length > 0){
        this.itemQty = 1
      }
    },

    /*
   updateItemQty(task){
    this.updateQty();
    for(i = 0; i < 1000; i++){
      if (task === increment){
        i++
      }
      else{
        this.itemQty--;
      }
    }
   },
   */

   incrementItemQty(){
     this.itemQty++;
   },

   decrementItemQty(){
     this.itemQty--;
   },

    pushOut(itemm){
      if (cart.pop(itemm)) {
        this.toast.success('item Removed from cart');
      }else{
        this.toast.error('failed to remove item from cart');
      }
    }
  },
  mounted(){
  },
};
</script>
