<template>
    <div>
        <footer>
               <div class="nav">
                   <h3>Foodie</h3>
                   <small>Awesome Food and beverages</small>
                   <br/>
                    <h4>About Us</h4>
                    <ul>
                        <span>We are dedicated to providing food for all, anywhere and aytime.</span>
                    </ul>
                    <br/>
                    <h4>Contact Us</h4>
                    <ul>
                        <li><span><a href="#"><img src="@/assets/footer_icons/phone_16.png" alt=""> +234 080 6460 9401</a></span></li>
                        <li><span><a href="#"><img src="@/assets/footer_icons/gmail_16.png" alt=""> foodie@gmail.com</a></span></li>
                    </ul>
               </div>
            <div class="nav">
                <h4>Information</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">More Search</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
                </div>
                <div class="nav">
                    <h4>Helpful Links</h4>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Email Us </a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
                </div>
                <div class="nav">
                    <span>Subscribe for More Info</span>
                    <br/><br/>
                    <div class="txt-pad">
                        <img src="@/assets/footer_icons/gmail_32.png" alt="">
                        <input type="text" class="form-control-outline" placeholder="Enter your Email"/>
                    </div>
                    <br/>
                    <button class="btn btn-small btn-main-gradient">Subscribe</button>
                </div>
                <div class="footer-footer">
                    <div class="icons">
                        <img src="@/assets/footer_icons/facebook_32.png" alt="">
                        <img src="@/assets/footer_icons/google_plus_32.png" alt="">
                        <img src="@/assets/footer_icons/twitter_32.png" alt="">
                        <img src="@/assets/footer_icons/instagram_32.png" alt="">
                    </div>
                    <div class="copyright">2021 copyright &copy;Protek Ltd. All Rights Reserved</div>
                </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {

    },
    data(){
        return{
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/footer.scss';
</style>