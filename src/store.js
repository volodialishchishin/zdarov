import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) ?? [],
      users: []
    };
  },
  mutations: {
    createTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(el => el.id !== id);
    },
    toggleCompleted(state, id) {
      const todoToToggle = state.todos.find(el => el.id === id);
      todoToToggle.completed = !todoToToggle.completed;
    },
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    toggleCompleted(context, id) {
      context.commit("toggleCompleted", id);
    },
    deleteTodos(context, id) {
      context.commit("deleteTodo", id);
    },
    createTodo(context, payload) {
      const { title, body } = payload;
      const newTodo = {
        title,
        body,
        id: Date.now() + Math.random(),
        createdAt: new Date(),
        completed: false
      };

      context.commit("createTodo", newTodo);
    },
    async getUsers(context) {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await resp.json();

      context.commit("setUsers", users);
    }
  },
  getters: {
    sortedUsers(state) {
      const usersCopy = [...state.users];
      return usersCopy.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
  }
});
