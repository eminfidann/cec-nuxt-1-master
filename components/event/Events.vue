<template>
  <section class="popular_courses">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="sub_title">
            <h2>Yakın Tarihli Etkinliklerimiz</h2>
          </div>
        </div>
        <!-- EVENT CARDS -->
        <!--  -->
        <EventCard
          v-for="event in fetchedEvents"
          :key="event.id"
          :event="event"
        />
        <!-- <EventCard v-for="i in 6" :key="i" /> -->
        <!-- Ends: . -->
      </div>
    </div>
  </section>
  <!-- ./ End Courses Area section -->
</template>

<script>
import EventCard from "@/components/event/EventCard.vue";

export default {
  components: {
    EventCard,
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    fetchedEvents() {
      return this.$store.getters.getEvents;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
