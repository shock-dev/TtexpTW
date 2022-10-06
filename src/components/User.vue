<template>
  <div class="wrapper">
    <header class="header">
      <p>User {{ id }}</p>
      <p>
        <span class="success">{{ success }}</span>
        /
        <span class="fail">{{ fails }}</span>
      </p>
    </header>
    <ul class="titles">
      <li v-for="(i, index) in list" :key="index">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    id: Number,
    success: Number,
    fails: Number,
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.success {
  color: green;
}

.fail {
  color: red;
}

.titles {
  margin: 15px 0 0 0;
}

.titles > *:not(:last-child) {
  margin-bottom: 5px;
}
</style>
