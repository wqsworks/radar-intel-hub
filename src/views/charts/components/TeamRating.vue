<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { teamRatingData } from "../data";

const containerRef = ref();

onMounted(() => {
  renderFunction();
});

const renderFunction = () => {
  const columnEchart = echarts.init(containerRef.value);
  const { xAxisData, data1, data2, data3, data4 } = teamRatingData;
  let emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: "rgba(0,0,0,0.3)",
    },
  };
  const option = {
    legend: {
      data: ["bar", "bar2", "bar3", "bar4"],
      left: "10%",
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      name: "X Axis",
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false },
    },
    yAxis: {},
    grid: {
      bottom: 100,
    },
    series: [
      {
        name: "bar",
        type: "bar",
        stack: "one",
        emphasis: emphasisStyle,
        data: data1,
      },
      {
        name: "bar2",
        type: "bar",
        stack: "one",
        emphasis: emphasisStyle,
        data: data2,
      },
      {
        name: "bar3",
        type: "bar",
        stack: "two",
        emphasis: emphasisStyle,
        data: data3,
      },
      {
        name: "bar4",
        type: "bar",
        stack: "two",
        emphasis: emphasisStyle,
        data: data4,
      },
    ],
  };

  columnEchart.setOption(option);
  columnEchart.on("brushSelected", function (params: any) {
    let brushed = [];
    let brushComponent = params.batch[0];
    for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
      let rawIndices = brushComponent.selected[sIdx].dataIndex;
      brushed.push("[Series " + sIdx + "] " + rawIndices.join(", "));
    }
    columnEchart.setOption({
      title: {
        backgroundColor: "#333",
        text: "SELECTED DATA INDICES: \n" + brushed.join("\n"),
        bottom: 0,
        right: "10%",
        width: 100,
        textStyle: {
          fontSize: 12,
          color: "#fff",
        },
      },
    });
  });
};
</script>

<template>
  <div class="team-rating-container">
    <div class="team-rating-title">
      <img src="@/assets/svg/team-rating-title-icon.svg" alt="团队评级" />
      <span>团队评级</span>
    </div>

    <div class="team-rating-content">
      <div ref="containerRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-rating-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .team-rating-title {
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

  .team-rating-content {
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
