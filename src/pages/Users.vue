<template>
  <h1 v-if="!usersIsLoading">LOADING.....</h1>
  <UserItem v-for="u of users" :key="u.id" :u="u"></UserItem>
</template>

<script>
import UserItem from "../components/UserItem";

export default {
  name: "Users",
  data() {
    return {
      users: [],
      usersIsLoading: false,
      linkUser: "https://jsonplaceholder.typicode.com/users"
    };
  },
  methods: {
    setUsers(users) {
      this.users = users;
    },
    async fetchUsers() {
      const resp = await fetch(this.linkUser);
      this.usersIsLoading = true;
      return await resp.json();
    }
  },
  async created() {
    const users = await this.fetchUsers();
    this.setUsers(users);
  },
  components: {
    UserItem
  }
};
</script>

<style scoped></style>
