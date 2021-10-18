<template>
  <h3>
    {{ buildFullName }}
  </h3>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    u: {
      type: Object,
      required: true
    }
  },
  methods: {},
  computed: {
    buildFullName() {
      return `Name : ${this.u.name} | Surname: ${this.u.username}`;
    }
  }
};
</script>

<style scoped></style>
