<template>
  <div>
    <h1>{{ inpVal }} {{ checkBox }} {{ select }} {{ radio }}</h1>
    <input type="text" placeholder="Enter your value" v-model.trim="inpVal" />
    <br />
    <input type="checkbox" v-model="checkBox" />
    <br />
    <select id="select" v-model="select">
      <option value="null"></option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br />
    <input type="radio" name="1" value="one" v-model="radio" />
    <input type="radio" name="1" value="two" v-model="radio" />
    <input type="radio" name="1" value="three" v-model="radio" />
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      inpVal: /*localStorage.getItem("inpValue") ??*/ "",
      checkBox: false,
      select: null,
      radio: null
    };
  }
};
</script>

<style scoped></style>
