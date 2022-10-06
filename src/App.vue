<template>
  <div id="app">
    <div class="header">
      <button class="btn">Загрузить данные</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 1110px;
  padding: 0 5px;
}

.btn {
  background: #7979fb;
  border-radius: 3px;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
