<script>
import axios from "axios";

export default {
  data() {
    return {
      term: "programming",
      results: [],
    };
  },
  methods: {
    inputChange() {
      axios
        .get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: this.term,
          },
        })
        .then((response) => {
          console.log(response);
          this.results = response.data.query.search;
        });
    },
  },
};
</script>

<template>
  <div>
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input class="input" v-model="term" @change="inputChange()" />
      </div>
    </div>
    <div v-if="results" class="ui celled list">
      <div class="item" v-for="result in results" :key="result.pageid">
        <div className="content">
          <div className="header">{{ result.header }}</div>
          {{ result.snippet }}
        </div>
      </div>
    </div>
  </div>
</template>
