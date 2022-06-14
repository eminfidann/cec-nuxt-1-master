<template>
  <!-- Footer -->
  <div class="footer text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Twitter -->
        <a
          class="icon-box btn btn-outline-light btn-floating mx-3"
          :href="cecTwitter"
          target="_blank"
          role="button"
          ><i class="fab fa-twitter"></i
        ></a>

        <!-- Instagram -->
        <a
          class="icon-box btn btn-outline-light btn-floating mx-3"
          :href="cecInstagram"
          target="_blank"
          role="button"
          ><i class="fab fa-instagram"></i
        ></a>

        <!-- Linkedin -->
        <a
          class="icon-box btn btn-outline-light btn-floating mx-3"
          :href="cecLinkedin"
          target="_blank"
          role="button"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </section>
      <!-- Section: Social media -->

      <!-- Section: Form -->

      <!-- Section: Text -->
      <section class="mb-4">
        <p class="footer-text">
         Bize sosyal medya hesaplarımızdan rahatlıkla ulaşabilirsiniz.
        </p>
      </section>
      <!-- Section: Text -->

      <hr class="line" />
     
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      <a class="text-white" href="#">ktucec@ceng.ktu.edu.tr</a>
    </div>
    <!-- Copyright -->
  </div>
  <!-- Footer -->
</template>

<script>
export default {
  data() {
    return {
      cecTwitter: "https://twitter.com/ktucec",
      cecInstagram: "https://www.instagram.com/ktucec/",
      cecLinkedin: "https://www.linkedin.com/in/ktucec/",
    };
  },
};
</script>

<style scoped>
.footer {
  background: linear-gradient(65deg, #d81312 0%, #302d2d 100%);
  height: 40vh;
}

.footer-text {
  color: white;
}


.icon-box:hover{
  color: #d81312;
  background-color: white;
}

.sponsorship-header {
  color: white;
}
</style>