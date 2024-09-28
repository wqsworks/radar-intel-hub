<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { techRatingData } from "../data";

const containerRef = ref();

onMounted(() => {
  renderFunction();
});

const renderFunction = () => {
  const radarEchart = echarts.init(containerRef.value);
  const option = {
    title: {
      // text: "Basic Radar Chart",
    },
    legend: {
      data: ["Allocated Budget", "Actual Spending"],
    },
    radar: {
      indicator: [
        { name: "Sales", max: 6500 },
        { name: "Administration", max: 16000 },
        { name: "Information Technology", max: 30000 },
        { name: "Customer Support", max: 38000 },
        { name: "Development", max: 52000 },
        { name: "Marketing", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: techRatingData,
      },
    ],
  };

  radarEchart.setOption(option);
};
</script>

<template>
  <div class="tech-rating-container">
    <div class="tech-rating-title">
      <img src="@/assets/svg/tech-rating-title-icon.svg" alt="技术评级" />
      <span>技术评级</span>
    </div>

    <div class="tech-rating-content">
      <div ref="containerRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tech-rating-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .tech-rating-title {
    flex: none;
    display: flex;
    align-items: center;
    padding: 30px 0 12px 42px;
    img {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }

    span {
      font-size: 20px;
    }
  }

  .tech-rating-content {
    flex: 1;
    height: 0;
    margin: 0 16px 32px 14px;
    div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
