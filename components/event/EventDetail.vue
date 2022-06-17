<template>
  <div class="container single-event">
    <NuxtLink class="btn btn-danger button" :to="{ name: 'index' }"
      >Geri Dön</NuxtLink
    >
    <div class="event-info">
      <div class="event-img">
        <!--
        <img
          :src="`https://image.tmdb.org/t/p/w500/${singleEvent.poster_path}`"
          alt=""
        />
      --></div>
      <div class="event-content">
        <h1>Etkinlik Adı : {{ singleEvent.name }}</h1>
        <p class="event-fact tagline">
          <span class="line-header">Organizatör-Misafir : </span>"{{
            singleEvent.organizer
          }}"
        </p>
        <p class="event-fact">
          <span class="line-header">Tarih :</span>
          {{
            new Date(singleEvent.events_date).toLocaleString("en-us", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          }}
        </p>
        <p class="event-fact">
          <span class="line-header">Konum :</span> {{ singleEvent.location }}
        </p>
        <p class="event-fact"></p>
        <p class="event-fact">
          <span class="line-header">Etkinlik Hakkında :</span>
          {{ singleEvent.statement }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: {
    singleEvent: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
$light-blue: #d81312;

.single-event {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  width: 75%;
  .button {
    align-self: flex-start;
    margin-bottom: 32px;
    width: 85px !important;
  }
  .event-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .event-img {
      img {
        max-height: 500px;
        width: 100%;
        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }
    .event-content {
      h1 {
        font-size: 56px;
        font-weight: 400;
      }
      .event-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;
        span {
          font-weight: 600;
          text-decoration: underline;
        }
        .line-header {
          color: $light-blue;
        }
      }
      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>