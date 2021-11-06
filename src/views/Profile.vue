<template>
<div>
        <!-- Top Navbar-->
        <Nav></Nav>

        

    <div class="profile-grid-container">
        <div class="user">
            <div class="photo">
                <img src="@/assets/icons/userbig_48.png" alt="photo">
            </div>
            <div class="information">
                <h5>Chidiebere Ezene</h5>
                <p>ezenechidi@gmail.com</p>
                <br/>
                <div class="buttons">
                    <button class="btn btn-success">Contact</button>

                    <div class="dropdown">
                            <button class="btn btn-main-gradient light outlined">Filter</button>
                              <div class="dropdown-content">
                                <a href="#">Location</a>
                                <a href="#">Restaurant</a>
                                <a href="#">School</a>
                                <a href="#">Menu</a>
                              </div>
                          </div>
                </div>
            </div>
            <div class="divider-vertical"></div>
        </div>
        
                <button class="accordion">
                    Section 1
                    <span class="accordion-item-trigger-icon"></span>
                    </button>
                <div class="panel">
                    <p>Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. 
                        Debitis saepe ea optio. 
                        Possimus voluptas beatae maiores harum debitis ratione culpa assumenda asperiores corporis quidem quasi, voluptates sint. Doloremque, aperiam soluta.
                    </p>
                </div>
                <button class="accordion">
                    Section 2
                    <span class="accordion-item-trigger-icon"></span>
                </button>
                <div class="panel">
                    <div class="form-group">
            <label for="amount">Amount</label>
            <input type="text" class="form-control-small" placeholder="&#8358; 2000.00" />
            <br/>
            <span class="under">commision: &#8358; 20.00 </span>
        </div>
                </div>
                <button class="accordion">
                    Section 3
                    <span class="accordion-item-trigger-icon"></span>
                </button>
                <div class="panel">
                    <p>Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. 
                        Debitis saepe ea optio. 
                        Possimus voluptas beatae maiores harum debitis ratione culpa assumenda asperiores corporis quidem quasi, voluptates sint. Doloremque, aperiam soluta.
                    </p>
                </div>

    </div>
</div>
<Footer></Footer>
</template>

<script>
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import Modal from '../components/Modal.vue'
import Footer from '../components/Footer.vue'
import {acc} from '../views/accordion.js'

export default {
    name: 'Profile',
    components:{
        Nav,
        SideNav,
        Modal,
        Footer
    },
    mounted() {
        const acc = document.getElementsByClassName("accordion");
        var i;

        for(i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        } });
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/profile.scss';
</style>