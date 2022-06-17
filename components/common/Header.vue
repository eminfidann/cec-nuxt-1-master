<template>
  <header class="header_four">
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

              <li class="">
                <nuxt-link to="/signUp" class="apply_btn">
                  Giriş Yap
                </nuxt-link>
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
.header_four {
  position: absolute !important;
  right: 0;
  left: 0;
  top: 0;
  z-index: 25;
  border-radius: 0px 0px 20px 20px !important;
  height: 5vh !important;
}
.apply_btn {
  text-decoration: none;
  position: absolute;
}
</style>



