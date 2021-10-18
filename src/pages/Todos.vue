<template>
  <div
    v-for="({ id, body, title, createdAt, completed }, index) of todos"
    :key="id"
    :style="{
      textDecoration: completed ? 'line-through' : 'none'
    }"
  >
    <br />
    <p>{{ index }}</p>
    <h3>{{ title }} - Completed: {{ completed }}</h3>
    <p>{{ body }}</p>
    <span>Created at: {{ new Date(createdAt) }}</span>
    <br />
    <button @click="markAsCompleted(id)" class="btn">
      Mark as {{ completed ? "in-progress" : "completed" }}
    </button>
    <br />
    <br />
    <button @click="deleteTodos(id)" class="btn">Delete</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    deleteTodos(id) {
      this.$store.dispatch("deleteTodos", id);
    },
    markAsCompleted(id) {
      this.$store.dispatch("toggleCompleted", id);
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style scoped></style>
