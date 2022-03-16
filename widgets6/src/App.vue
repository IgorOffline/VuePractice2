<script>
import Accordion from "./components/Accordion.vue";

export default {
  components: { Accordion },
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
    <Accordion :items="items" />
  </div>
</template>
