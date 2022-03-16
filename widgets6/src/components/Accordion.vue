<script>
export default {
  props: ["items"],
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    onTitleClick(index) {
      this.activeIndex = index;
    },
    active(index) {
      return this.activeIndex === index ? "active" : "";
    },
  },
};
</script>

<template>
  <div className="ui styled accordion">
    <main v-for="(item, index) in items" :key="item.title">
      <div :class="'title ' + active(index)" @click="onTitleClick(index)">
        <i className="dropdown icon"></i>
        {{ item.title }}
      </div>
      <div :class="'content ' + active(index)">
        <p>{{ item.content }}</p>
      </div>
    </main>
  </div>
</template>
