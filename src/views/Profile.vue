<template>
<div>
        <!-- Top Navbar-->
        <Nav></Nav>

        <!-- Side Navbar -->
        <SideNav></SideNav>

    <div class="profile-grid-container">
        <div class="user">
            <div class="photo">
                <img src="@/assets/icons/userbig_48.png" alt="photo">
            </div>
            <div class="information">
                <h5>Chidiebere Ezene</h5>
                <p>User</p>
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
    </div>
</div>
</template>
<script>
import Nav from '../components/Nav.vue'
import SideNav from '../components/SideNav.vue'
import Modal from '../components/Modal.vue'
export default {
    name: 'Profile',
    components:{
        Nav,
        SideNav,
        Modal
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/profile.scss';
</style>