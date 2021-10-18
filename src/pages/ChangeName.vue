<template>
  <h1>hello world from {{ name }}</h1>

  <div>
    <button class="btn" @click="changeName">change name</button>
  </div>
  <br />

  <button @click="changeVisibilityButton" class="btn">Toggle</button>

  <div>
    <br />
    <Button
      v-if="isVisible"
      :text="`conditional button`"
      @button-click="changeName"
    />
    <!--    <Button :text="`my awesome button`" :onClick="changeName" />-->
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "ChangeName",
  components: {
    Button
  },
  data() {
    return {
      name: "Orest",
      isVisible: false
    };
  },
  methods: {
    changeName() {
      this.name = Math.floor(Math.random() * 1000);
    },
    changeVisibilityButton() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style scoped></style>
