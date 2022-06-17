<template>
  <div class="event-card col-12 col-sm-6 col-md-6 col-lg-4">
    <div class="single-courses">
      <div class="courses_banner_wrapper">
        <div class="courses_banner">
          <a href="#">
            <img
              src="/assets/images/courses/courses_1.jpg"
              alt=""
              class="img-fluid"
            />

            <!-- 
              <img
                :src="
                playlist.images.length > 0 ? playlist.images[0].url : unknownUrl
                "
                class="song-cover"
                alt=""
                />
               -->

            <!-- 
               <img
                :src="`https://ktucectest.herokuapp.com/media/events/${event.image}`"
                alt=""
               /> 
               -->

            <img src="" alt="" />
          </a>
        </div>
      </div>
      <div class="courses_info_wrapper">
        <div class="courses_title">
          <h3>
            <a href="#"> Etkinlik Adı : {{ event.name }} </a>
          </h3>
          <div class="teachers_name">Organizatör - {{ event.organizer }}</div>
          <div class="teachers_name">Konum - {{ event.location }}</div>
        </div>
        <div class="courses_info">
          <ul class="list-unstyled">
            <li>
              Tarih: <i class="fas fa-calendar-alt"></i>
              {{
                new Date(event.events_date).toLocaleString("tr-tr", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            </li>
          </ul>

          <!-- <a href="#" ></a> -->
          <!--  <a href="" class="cart_btn">Ayrıntıları Gör</a> -->

          <NuxtLink
            class="cart_btn"
            :to="{ name: 'events-eventId', params: { eventId: event.id } }"
            >Ayrıntıları Gör</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Ends: . -->
</template>

<script>
export default {
  props: {
    event: {
      // required: true,
      type: Object,
    },
  },
  data: function () {
    return {
      // unknownUrl: require("/assets/images/courses/courses_1.jpg")
    };
  },
};
</script>

<style lang="scss">
.event-card {
  border-radius: 10px !important;
}
.cart_btn {
  width: 150px;
  font-size: 11px !important;
}
</style>