<script>
//import Accordion from "./components/Accordion.vue";
//<Accordion :items="items" />
import Search from "./components/Search.vue";

export default {
  components: { Search },
  data() {
    return {
      items: [
        {
          title: "Title1",
          content: "Content1",
        },
        {
          title: "Title2",
          content: "Content2",
        },
        {
          title: "Title3",
          content: "Content3",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Search />
  </div>
</template>
