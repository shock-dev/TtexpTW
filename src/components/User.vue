<template>
  <div class="wrapper">
    <header class="header">
      <p>User {{ num }}</p>
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
    num: Number,
    success: Number,
    fails: Number,
    list: Array,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  padding: 12px;
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
  padding-left: 25px;
}

.titles > *:not(:last-child) {
  margin-bottom: 5px;
}
</style>
