<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { techRatingData } from "@/views/charts/data";

onMounted(() => {
  renderFunction();
});

const containerRef = ref();
const radarEchart = ref();

const renderFunction = () => {
  radarEchart.value = echarts.init(containerRef.value);
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

  radarEchart.value.setOption(option);
};
</script>

<template>
  <div class="competitiveness-rating-container">
    <div class="card-title-container">
      <img src="@/assets/svg/title-icon.svg" alt="" />
      <span>竞争力评级</span>
    </div>
    <div class="tech-rating-content">
      <div ref="containerRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.competitiveness-rating-container {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: #ffffff;
  .card-title-container {
    flex: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cccccc;

    img {
      width: 26px;
      height: 26px;
      padding-left: 24px;
      padding-right: 8px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
    }

    .count {
      margin-left: 6px;
      font-size: 16px;
      font-weight: 400;
      color: #cccccc;
    }
  }

  .echart-container {
    flex: 1;
    width: 100%;
    height: 0;
  }

  .card-title-container {
    flex: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cccccc;

    img {
      width: 26px;
      height: 26px;
      padding-left: 24px;
      padding-right: 8px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
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
