<template>
  <div class="">
    <EventDetail :singleEvent="singleEvent" />
  </div>
</template>

<script>
// import axios from "axios";

export default {
  asyncData(context) {
    return context.app.$axios
      .get(
        process.env.baseURL + "events/" + context.params.eventId
        /* ".json"  */
        /*this.$route.params.eventId */
      )
      .then((response) => {
        console.log(response);
        return {
          singleEvent: response.data,
        };
      });
  },
};
</script>

<style scoped>
</style>