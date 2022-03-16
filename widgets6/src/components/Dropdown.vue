<script>
export default {
  props: ["options"],
  data() {
    return {
      open: false,
      selected: this.options[0],
    };
  },
  mounted() {
    document.body.addEventListener(
      "click",
      this.closeDropdownOnBodyClick,
      true
    );
  },
  beforeUnmount() {
    document.body.removeEventListener(
      "click",
      this.closeDropdownOnBodyClick,
      true
    );
  },
  methods: {
    openDropdownClass() {
      return this.open ? "visible active" : "";
    },
    openMenuClass() {
      return this.open ? "visible transition" : "";
    },
    openCloseDropdown() {
      this.open = !this.open;
    },
    changeOption(option) {
      this.selected = option;
    },
    closeDropdownOnBodyClick(event) {
      if (this.$refs.dropdown.contains(event.target)) {
        return;
      }

      this.open = false;
    },
  },
  computed: {
    filteredOptions() {
      return this.options.filter(
        (option) => option.value !== this.selected.value
      );
    },
  },
};
</script>

<template>
  <div ref="dropdown" class="ui form">
    <div class="field">
      <label class="label">Select a Color</label>
      <div
        :class="'ui selection dropdown ' + openDropdownClass()"
        @click="openCloseDropdown()"
      >
        <i class="dropdown icon"></i>
        <div class="text">{{ selected.label }}</div>
        <div :class="'menu ' + openMenuClass()">
          <div
            v-for="option in filteredOptions"
            :key="option.value"
            class="item"
            @click="changeOption(option)"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
