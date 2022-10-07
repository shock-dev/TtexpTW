<template>
  <Bar
    chart-id="stats"
    dataset-id-key="label"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :css-classes="cssClasses"
    :width="400"
    :height="400"
  />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartData: Object,
    cssClasses: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
