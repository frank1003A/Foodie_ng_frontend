<template>
<div>
        <!-- Top Navbar-->
        <Nav></Nav>

        <div class="profile-grid-container">
    
           <div class="round-tabs">
                    <button class="is-active">Profile</button>
                    <button>Overview</button>
                </div>
                
        <div class="user">
                <img class="img-1" id="image1" src="@/assets/icons/userbig_48.png" alt="photo">
                <span><img class="shop-badge" id="badge1" src="@/assets/icons/camera_16.png" alt=""></span>
                </div>

                <div class="c-2">
                    <div class="panel">
                    <div class="form-group">
                <label for="">Username</label>
                <input type="text" class="form-control" placeholder="" />
            </div>

             <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" placeholder="" />
            </div>

            <div class="form-group">
                <label for="">Phone</label>
                <input type="text" class="form-control" placeholder="" />
            </div>

            <div class="form-group">
                <label for="">Gender</label>
                <div class="flexg">
                <div class="radioflex">
                     <input type="radio" style="width: 60px; border: 1px solid grey" class="form-control" />
                     <p>Male</p>
                </div>
                <div class="radioflex">
                    <input type="radio" style="width: 60px; border: 1px solid grey" class="form-control" />
                    <p>Female</p>
                </div>
            </div>
            </div>

            <div class="form-group">
                <label for="">Date of birth</label>
                <input type="date" class="form-control" placeholder="" />
            </div>

            <div class="form-group">
                <button class="btn btn-main-gradient btn-block">Save</button>
            </div>
                </div>

                </div>
        
        <div class="cont">
                <button id="pbtn" class="accordion">
                    Profile
                    </button>
                <div class="panel">
                    <div class="form-group">
                <label for="">Username</label>
                <input type="text" class="form-control" placeholder="" />
            </div>

             <div class="form-group">
                <label for="">Email</label>
                <input type="text" class="form-control" placeholder="" />
            </div>

            <div class="form-group">
                <label for="">Phone</label>
                <input type="text" class="form-control" placeholder="" />
            </div>

           <div class="role">
                    <span>Male</span>
                    <input type="checkbox" id="driver" name="role" value="driver" >
                    <label for="driver"/>
                    <span>Female</span>
                    <input type="checkbox" id="driver" name="role" value="driver" >
                    <label for="driver"/>
                    
            </div>

            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" placeholder="" />
            </div>

            <div class="form-group">
                <button class="btn btn-main btn-block">Save</button>
            </div>
            
            <div class="form-group form-link">
                <router-link to="/">Back to home</router-link>
            </div>
                </div>
                <button id="pbtn" class="accordion">
                    Payment Method
                </button>
                <div class="panel">
                    <div class="form-group">
            <label for="amount">Amount</label>
            <input type="text" class="form-control-small" placeholder="&#8358; 2000.00" />
            <br/>
            <span class="under">commision: &#8358; 20.00 </span>
        </div>
                </div>
                <button id="pbtn" class="accordion">
                    Order History
                </button>
                <div class="panel">
                    <p>Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. 
                        Debitis saepe ea optio. 
                        Possimus voluptas beatae maiores harum debitis ratione culpa assumenda asperiores corporis quidem quasi, voluptates sint. Doloremque, aperiam soluta.
                    </p>
                </div>

                <button id="pbtn" class="accordion">
                    Delivery Address
                </button>
                <div class="panel">
                    <p>Lorem ipsum dolor sit, 
                        amet consectetur adipisicing elit. 
                        Debitis saepe ea optio. 
                        Possimus voluptas beatae maiores harum debitis ratione culpa assumenda asperiores corporis quidem quasi, voluptates sint. Doloremque, aperiam soluta.
                    </p>
                </div>

                <button id="pbtn" class="accordion">
                    Settings
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