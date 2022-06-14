<template>
  <div>
    <!--    -->    <Header />
     
    <!--   -->  <About /> 
    <!--   -->  
   
    <!--  -->    <Events />  
     
    <!--    -->   <Footer />  
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Events from "@/components/event/Events.vue";
import About from "@/components/home/About.vue";
import Footer from "@/components/common/Footer.vue";
import ManagerCard from "@/components/management/ManagerCard.vue";

export default {
  name: "IndexPage",
  components: {
    Header,
    Events,
    About,
    Footer,
    ManagerCard
  },

};
</script>

<style lang="scss" scoped>
</style>