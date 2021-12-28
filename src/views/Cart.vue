<template>
  <div>
    <!-- Top Navbar-->
    <Nav></Nav>

    <!--mid-pad-->
    <section id="top-section">
      <p>cart</p>
    </section>

    <!-- Side Navbar 
        <SideNav></SideNav>
        -->

    <div v-if="cart.length == 0" class="grid-container" id="empty">
      <span class="cpage-cart"> <fa icon="shopping-cart" /> </span>
      <p>Your cart is empty</p>
      <label for=""
        >Already have an account? <a href="#">Login</a> to see items in your
        cart</label
      >
      <input
        type="button"
        class="btn btn-main-gradient"
        value="START SHOPPING"
      />
    </div>

    <div v-else class="grid-container">
      <div class="order">
        <!--cart header-->
        <div class="cart-header">
          <h3>Shopping Cart</h3>
          <small>{{ cart.length }} items in cart</small>
        </div>
        <!--cart item-->
        <div class="cart-body" id="cpage-body">
          <div class="cart-items" id="cartPage">
            <div class="cart-item" v-for="(item, index) in cart" :key="index">
              <div class="cart-info">
                <span class="ti-trash"><fa icon="trash"/></span>
                <span><img :src="`${item.image}`" alt="image"/></span>
                <div>
                  <h5>{{ item.name }}</h5>
                  <small>{{ item.price }}</small>
                </div>
              </div>
              <div class="cart-controls-new">
                <span class="ti-angle-up"> <fa icon="plus" /> </span>
                <input type="text" readonly :value="item.qty" />
                <span class="ti-angle-down"> <fa icon="minus" /> </span>
              </div>
            </div>
          </div>
        </div>
        <!--cart item end-->
      </div>
      


      <!--payment summary-->
      <div class="payment-summary">
        <div class="cart-sum">
          <div class="promo">
            <div class="coupon-flex">
              <input
                type="text"
                class="form-control"
                placeholder="coupon code"
              />
              <button class="btn btn-main-gradient btn-block">Apply</button>
            </div>
          </div>

          <br />
          <br />

          <div class="price-flex">
            <small>Cart total</small>
            <small>&#8358; 2,000.00</small>
          </div>
          <div class="price-flex">
            <small>Delivery fee</small>
            <small>&#8358; 250.00</small>
          </div>
          <div class="price-flex">
            <small>Tax(5%)</small>
            <small>&#8358; 100.00</small>
          </div>

          <div class="price-flex">
            <small>Promo Discount(5%)</small>
            <small>- &#8358; 0.00</small>
          </div>

          <div class="dividersolid"></div>

          <div class="price-flex">
            <small>Total</small>
            <h4>&#8358; 2,250.00</h4>
          </div>
        </div>

        <div class="cart-pay-btn">
          <button class="btn btn-block btn-main-gradient">
            <span class="ti-credit-card"><fa icon="credit-card"/></span>CHECKOUT
          </button>
          <br />
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
            class="btn btn-success btn-block"
            @click="$router.push('/account')"
          >
          <span class="ti-user"><fa icon="user" /></span> Login to continue
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--
        <Order id="corder" @show="showAddressModal = true" 
        :cartLength="(cart.length).toLocaleString()" 
        :cart="cart"
        :image="cart.image"
        :address="address" 
        :user="email" >
        </Order>
  -->
  <section id="bottom-section">
    <div class="sub">
      <h3>New to FOODIE?</h3>
      <p>
        Subscribe to our news letter to recieve special offers and latest news
      </p>
      <div class="form">
        <input
          type="email"
          class="form-control-small"
          name="email"
          placeholder="Type ypur email here!"
        />
        <input type="button" class="btn btn-main-gradient" value="Male" />
        <input type="button" class="btn btn-main-gradient" value="Female" />
      </div>
    </div>
  </section>

  <Modal v-if="showAddressModal" @close="showAddressModal = false">
    <template v-slot:header>
      <h4>Provide your address</h4>
    </template>

    <template v-slot:body>
      <div class="form-group">
        <label for="">Your address</label>
        <input
          type="text"
          class="form-control"
          v-model="address"
          placeholder="No 230, Abba road"
        />
      </div>
    </template>
  </Modal>
  <Footermain></Footermain>
</template>

<script>
import Order from "../components/Order.vue";
import Nav from "../components/Nav.vue";
import SideNav from "../components/SideNav.vue";
import Modal from "../components/Modal.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import Footermain from "../components/Footer_main.vue";
import Searchbar from "../components/Searchbar.vue";
import cart from "../components/js/cart.js";

export default {
  name: "Cart",
  components: {
    Order,
    Nav,
    Modal,
    SideNav,
    Card,
    Footer,
    Searchbar,
    Footermain,
  },
  data() {
    return {
      email: "",
      password: "",
      address: "",
      showAddressModal: false,
      cart: cart,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/cart.scss";
</style>
