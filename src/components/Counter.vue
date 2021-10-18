<template>
  <br />
  <button class="btn" @click="inc">counter inc</button>
  <h1>{{ counter }}</h1>
  <h3 v-if="counter === 1">it's one</h3>
  <h3 v-else-if="counter === 2">it's two</h3>
  <h3 v-else-if="counter >= 3">oh shiiissshhh there are too many</h3>
  <h3 v-else>oh shiiissshhh where your's numbers</h3>
  <button class="btn" @click="dec">counter dec</button>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
    }
  }
};
</script>

<style scoped></style>
