<script lang="ts" setup>
import { ref, onMounted, watch, nextTick } from "vue";
import * as echarts from "echarts";
import { teamRatingData } from "@/views/charts/data";

// const props = defineProps({
//   isShow: {
//     type: Boolean,
//     default: false,
//   },
// });

// watch(
//   () => props.isShow,
//   (newVal) => {
//     if (newVal === true) {
//       if (radarEchart.value) {
//         return;
//       }
//       nextTick(() => {
//         renderFunction();
//       });
//     }
//   }
// );

const containerRef = ref();
const columnEchart = ref();

onMounted(() => {
  renderFunction();
});

const renderFunction = () => {
  columnEchart.value = echarts.init(containerRef.value);
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

  columnEchart.value.setOption(option);
  columnEchart.value.on("brushSelected", function (params: any) {
    let brushed = [];
    let brushComponent = params.batch[0];
    for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
      let rawIndices = brushComponent.selected[sIdx].dataIndex;
      brushed.push("[Series " + sIdx + "] " + rawIndices.join(", "));
    }
    columnEchart.value.setOption({
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
  <div class="competitiveness-rating-container">
    <div class="card-title-container">
      <img src="@/assets/svg/title-icon.svg" alt="" />
      <span>市场科技评价</span>
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
    margin: 10px 20px;
    div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
