<template>
  <div id="app">
    <BarChart
      v-show="list.length > 0"
      css-classes="bar"
      :chart-data="chartData"
    />
    <div class="header">
      <button class="btn" @click="getUsers" :disabled="loading">
        Загрузить данные
      </button>
      <Loader v-show="loading" />
    </div>
    <div v-if="list.length > 0" class="list">
      <User
        v-for="i in list"
        :key="i.userId"
        :num="i.userId"
        :list="i.titles"
        :success="i.success"
        :fails="i.fails"
      />
    </div>
  </div>
</template>

<script>
import BarChart from "./components/Bar.vue";
import User from "@/components/User";
import Loader from "@/components/Loader";
import UsersApi from "@/api/users";
import { groupByKey } from "@/utils/groupByKey";

export default {
  name: "App",
  data() {
    return {
      list: [],
      loading: false,
    };
  },
  components: { BarChart, Loader, User },
  computed: {
    chartData() {
      return {
        labels: this.list.map((i) => `User ${i.userId}`),
        datasets: [
          {
            label: "Completed",
            backgroundColor: "#476eab",
            data: this.list.map((i) => i.success),
          },
        ],
      };
    },
  },
  methods: {
    prepareTemplateData(list) {
      return Object.values(list).map((i) =>
        i.reduce((r, a) => {
          r.userId = a.userId;
          r.success = r.success || 0;
          r.success += +a.completed;
          r.fails = r.fails || 0;
          r.fails += Number(!a.completed);
          r.titles = r.titles || [];
          r.titles.push(a.title);

          return r;
        }, {})
      );
    },
    async getUsers() {
      if (!this.loading) {
        try {
          if (this.error) this.error = false;
          this.loading = true;
          const data = await UsersApi.get();
          const groupedList = groupByKey(data, "userId");
          this.list = this.prepareTemplateData(groupedList);
        } catch (e) {
          this.error = true;
        } finally {
          this.loading = false;
        }
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
  margin: 30px auto;
  max-width: 1110px;
  padding: 0 5px;
}

p {
  margin: 0;
}

.bar {
  margin-bottom: 20px;
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
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: #5d5dff;
  }

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

@media (max-width: 820px) {
  #app {
    margin: 5px auto;
  }

  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .list {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}
</style>
