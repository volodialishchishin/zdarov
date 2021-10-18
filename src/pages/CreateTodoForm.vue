<template>
  <form @submit.prevent="createTodo">
    <button class="btn" type="submit">Save todo</button>
    <br />
    <br />
    <input type="text" name="title" v-model.trim="title" placeholder="Title" />
    <br />
    <input type="text" name="body" v-model.trim="body" placeholder="Body" />
  </form>
  <router-view></router-view>
</template>

<script>
export default {
  name: "CreateTodoForm",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    onSubmitSuccess() {
      this.$router.push("/todos");
    },
    createTodo() {
      this.$store.dispatch("createTodo", {
        title: this.title,
        body: this.body
      });
      this.onSubmitSuccess();
      this.title = "";
      this.body = "";
    }
  }
};
</script>

<style scoped></style>
