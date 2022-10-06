<template>
  <div id="app">
    <div class="header">
      <button v-if="!loading" class="btn" :disabled="loading">
        Загрузить данные
      </button>
      <Loader v-else />
    </div>
    <div v-if="list.length" class="list">
      <User
        v-for="i in list"
        :id="i.id"
        :key="i.id"
        :list="i.list"
        :success="i.success"
        :fails="i.fails"
      />
    </div>
  </div>
</template>

<script>
import User from "@/components/User";
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      list: [
        { id: 1, success: 18, fails: 2, list: ["test", "test"] },
        { id: 2, success: 18, fails: 2, list: ["test", "test"] },
        { id: 3, success: 18, fails: 2, list: ["test", "test"] },
      ],
      loading: false,
    };
  },
  components: { Loader, User },
  methods: {
    getUsers() {
      if (!this.loading) {
        //
      }
    },
  },
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

p {
  margin: 0;
}

.header {
  display: flex;
  margin-bottom: 20px;
}

.btn {
  background: #7979fb;
  border-radius: 3px;
  border: 0;
  color: #fff;
  padding: 20px 30px;
  cursor: pointer;
  margin-right: 20px;

  &:disabled {
    background: #b1b1b1;
    cursor: not-allowed;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
