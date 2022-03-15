<script>
import SeasonDisplay from "./SeasonDisplay.vue";

export default {
  components: { SeasonDisplay },

  data() {
    return {
      lat: 0,
      errorMessage: "",
    };
  },

  beforeMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.lat = position.coords.latitude;
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
      }
    );
  },
};
</script>

<template>
  <div v-if="lat && !errorMessage">
    <SeasonDisplay :lat="lat" />
  </div>
  <div v-if="!lat && errorMessage">Error: {{ errorMessage }}</div>
  <div v-if="!lat && !errorMessage">Loading...</div>
</template>
