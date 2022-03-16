<script>
export default {
  emits: ["sizeChange"],
  data() {
    return {
      size: "200",
    };
  },
  methods: {
    onFormSubmit() {
      this.$emit("sizeChange", this.size);
    },
  },
};
</script>

<template>
  <div class="ui segment">
    <form class="ui form" @submit.prevent="onFormSubmit()">
      <div class="field">
        <label>Image Size</label>
        <input type="text" v-model="size" />
      </div>
    </form>
  </div>
</template>
