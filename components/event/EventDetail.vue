<template>
  <div class="container">
    <div class="container__event-header text-center">
      <h3 class="container__event-header__header"><!-- {{singleEvent.name}} --></h3>
    </div>

    <div class="container__event-video"></div>
    <div class="container__event-info"><!-- {{singleEvent.organizer}} --></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
    };
  },
  props: {
    /*
    singleEvent: {
        required: true,
        type: Object
    }
    */
  }
  
};
</script>

<style lang="scss" scoped>
.container {
  &__event-header {
    &__header {
    }
  }
}
</style>