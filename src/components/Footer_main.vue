<template>
  <div class="footer-main">
                    <div class="icons">
                        <img src="@/assets/footer_icons/facebook_32.png" alt="">
                        <img src="@/assets/footer_icons/google_plus_32.png" alt="">
                        <img src="@/assets/footer_icons/twitter_32.png" alt="">
                        <img src="@/assets/footer_icons/instagram_32.png" alt="">
                    </div>
                    <div class="copyright">2021 copyright &copy;Protek Ltd. All Rights Reserved</div>
    </div>
</template>

<script>
export default {
    name: 'Footer-main',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.footer-main{
  justify-content: center;
  text-align: center;
  padding: 10px;
  background: $primary-color;
  height: 126px;
  position: relative;
  width: 100%;
  bottom:0;
}

.icons{
  display: inline-flex;
}

.copyright {
      color: white;
      padding: 10px 15px;
      font-size: 14px;
      white-space: nowrap;
      margin: 15px 3px;
      line-height: 20px;
    }
</style>