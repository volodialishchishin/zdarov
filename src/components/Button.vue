<template>
  <button :class="`btn`" id="test" @click="onClickHandler()">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  emits: ["button-click"],
  props: {
    text: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: false
    }
  },
  methods: {
    onClickHandler() {
      this.$emit("button-click");
    }
  },
  beforeUnmount() {
    const btn = document.getElementById("test");
    console.log("beforeDestroy", btn);
  },
  unmounted() {
    const btn = document.getElementById("test");
    console.log("Destroy", btn);
  }
};
</script>

<style scoped></style>
