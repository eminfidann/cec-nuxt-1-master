<template>
  <div class="">
    <EventDetail :singleEvent="singleEvent" />
  </div>
</template>

<script>
import axios from "axios";
import EventDetail from "@/components/event/EventDetail.vue";

export default {
  asyncData(context) {
    return axios
      .get(
        process.env.baseURL +
          "events/" +
          context.params.eventId +
          ".json" /*this.$route.params.eventId */
      ) 
      .then((response) => {
        return {
          singleEvent: response.data,
        };
      });
  },
  components: {
    EventDetail,
  },
};
</script>

<style scoped>
</style>