<script>
import SearchBar from "./SearchBar.vue";
import axios from "axios";

export default {
  components: { SearchBar },
  data() {
    return {
      imageSource: "",
    };
  },
  methods: {
    sizeChange(size) {
      console.log(`size: ${size}`);
      axios
        .get("https://picsum.photos/" + size)
        .then((response) => {
          console.log(response);
          this.imageSource = response.request.responseURL;
        })
        .then((err) => console.log(err));
    },
  },
};
</script>

<template>
  <div className="ui container" style="margin-top: 10px">
    <SearchBar @sizeChange="sizeChange" />
    <img v-if="imageSource" alt="Lorem Picsum" :src="imageSource" />
  </div>
</template>
