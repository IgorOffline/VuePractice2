<script>
export default {
  props: ["lat"],
  data() {
    return {
      seasonConfig: {
        summer: {
          text: "Let's hit the beach!",
          iconName: "sun",
        },
        winter: {
          text: "Burr it is cold!",
          iconName: "snowflake",
        },
      },
    };
  },
  methods: {
    getSeason(lat, month) {
      if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
      } else {
        return lat > 0 ? "winter" : "summer";
      }
    },
  },
  computed: {
    season() {
      return this.getSeason(this.lat, new Date().getMonth());
    },
    text() {
      return this.seasonConfig[this.season].text;
    },
    iconName() {
      return this.seasonConfig[this.season].iconName;
    },
  },
};
</script>

<template>
  <div class="season-display" :class="season">
    <i class="icon-left massive" :class="iconName + ' icon'" />
    <h1>{{ text }}</h1>
    <i class="icon-right massive" :class="iconName + ' icon'" />
  </div>
</template>

<style scoped>
.icon-left {
  position: absolute;
  top: 10px;
  left: 10px;
}

.icon-right {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.season-display {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.season-display.winter i {
  color: blue;
}

.season-display.summer i {
  color: red;
}

.winter {
  background-color: aliceblue;
}

.summer {
  background-color: orange;
}
</style>
