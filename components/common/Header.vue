<template>
  <header class="header_four">
    <!-- Preloader -->
    <div class="header_top">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-12">
            <div class="info_wrapper">
              <div class="contact_info">
                <ul class="list-unstyled">
                  <li>
                    <i class="flaticon-mail-black-envelope-symbol"></i
                    >{{ cecEmail }}
                  </li>
                </ul>
              </div>
              <div class="login_info">
                <nuxt-link to="/signUp" tag="li" class="apply_btn">
                Giriş Yap
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="edu_nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light bg-faded">
          <a class="navbar-brand" href="index-2.html"
            ><img src="/assets/images/cec-icon.png" alt="logo"
          /></a>
          <div
            class="collapse navbar-collapse main-menu"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav nav lavalamp ml-auto menu">
              <li class="nav-item">
                <a href="#" class="nav-link">ANASAYFA</a>
              </li>


               <nuxt-link to="/events" tag="li" class="nav-item">
                  <a class="nav-link" href="#">ETKİNLİKLER</a>
               </nuxt-link>
        



              <li class="nav-item">
                <a href="#" class="nav-link">İLETİŞİM</a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- END NAVBAR -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      cecEmail: "ktucec@ceng.ktu.edu.tr",
    };
  },
};
</script>

<style>
.flaticon-mail-black-envelope-symbol {
  font-size: 24px !important;
}
header {
  position: absolute !important;
  right: 0;
  left: 0;
  top: 0;
  z-index: 25;
  border-radius: 20px 20px 0px 0px !important;
}
.apply_btn {
  text-decoration: none;
}
</style>



