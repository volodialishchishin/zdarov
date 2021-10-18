<template>
  <nav>
    <router-link to="/zdarov">home</router-link>
    <router-link to="/todos">todos</router-link>
    <router-link to="/createTodo">createTodo</router-link>
    <router-link to="/createTodo/test">test</router-link>
    <router-link to="/changeName">changeName</router-link>
    <router-link to="/counter">counter</router-link>
    <router-link to="/input">input</router-link>
    <router-link to="/users">users</router-link>
  </nav>
  <div v-for="user of users" :key="user.id">{{ user.name }}</div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  watch: {
    // radio() {
    //   console.log("called", this.radio);
    // }
    // inpVal() {
    //   console.log("called", this.inpVal, typeof this.inpVal);
    // localStorage.setItem("inpValue", this.inpVal);
    // }
    "$store.state.todos": {
      deep: true,
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.$store.state.todos));
      }
    }
  },
  methods: {},
  computed: {
    users() {
      return this.$store.getters.sortedUsers;
    }
  },
  created() {
    this.$store.dispatch("getUsers");
  }
};
</script>

<style>
@import "assets/index.css";

nav {
  display: flex;
  width: 100%;
  height: 40px;
  background: rgba(0, 191, 132, 0.4);
  padding: 7px;
}

nav > a {
  text-decoration: none;
  color: #2c3e50;
  margin-left: 15px;
  font-weight: bold;
  font-size: 20px;
  transition: 0.2s;
  box-shadow: #5683a1;
  border: 3px solid currentColor;
  border-radius: 30px;
  padding: 2px;
}

nav > a:hover {
  box-shadow: 4px 4px;
  transform: scale(1.05, 1.05);
  color: #5683a1;
}

nav > a.router-link-exact-active {
  color: black;
}
</style>
