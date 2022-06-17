<template>
  <section class="login_signup_option">
    <div class="l-modal js-modal-shopify">
      <div class="l-modal__shadow js-modal-hide"></div>
      <div class="login_popup login_modal_body">
        <div class="Popup_title d-flex justify-content-between">
          <h2 class="hidden">&nbsp;</h2>
          <!-- Nav tabs -->
          <div class="row">
            <div class="col-12 col-lg-12 col-md-12 col-lg-12 login_option_btn">
              <ul class="nav nav-tabs d-flex" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#login"
                    role="tab"
                    >Giriş Yap</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#panel2"
                    role="tab"
                    >Kayıt Ol</a
                  >
                </li>
                <li>
                  <img
                    class="img position-absolute"
                    src="/assets/images/cec-icon.png"
                    alt="logo"
                  />
                </li>
              </ul>
              <!-- | -->

              <!-- | -->
            </div>
            <div class="col-12 col-lg-12 col-md-12 col-lg-12">
              <!-- Tab panels -->
              <div class="tab-content card">
                <!--Login-->
                <div
                  class="tab-pane fade in show active"
                  id="login"
                  role="tabpanel"
                >
                  <div class="row">
                    <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                      <div class="form-group">
                        <label class="control-label">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          v-model="email"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                      <div class="form-group">
                        <label class="control-label">Şifre</label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          v-model="password"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="col-12 col-lg-12 col-md-12 col-lg-12 d-flex justify-content-between login_option"
                    >
                      <a
                        href="forgot-password.html"
                        title=""
                        class="forget_pass"
                        >Şifrenizi mi unuttunuz?</a
                      >
                      <button
                        class="btn btn-default login_btn"
                        @click="login()"
                      >
                        Giriş Yap
                      </button>
                    </div>
                  </div>
                </div>
                <!--/.Panel 1-->
                <!--Panel 2-->
                <div class="tab-pane fade" id="panel2" role="tabpanel">
                  <form action="#" class="register">
                    <div class="row">
                      <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                        <div class="form-group">
                          <label class="control-label">İsim</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Kullanıcı Adı"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                        <div class="form-group">
                          <label class="control-label">Soyisim</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-lg-12 col-md-12 col-lg-12">
                        <div class="form-group">
                          <label class="control-label">Şifre</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Şifre"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="col-12 col-lg-12 col-md-12 col-lg-12 d-flex justify-content-between login_option"
                      >
                        <button type="submit" class="btn btn-default login_btn">
                          Kayıt Ol
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <!--/.Panel 2-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Login Signup Option -->
</template>

<script>
export default {
  data: function () {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      this.$API.account
        .login({ ...data })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.img {
  position: absolute !important;
  width: 110px;
  margin-bottom: 10px;
  right: 3.5em;
}
</style>
