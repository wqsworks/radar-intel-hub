<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { graphData as graph } from "@/views/charts/data";

const pieEchartRef = ref(null);
const graphEchartRef = ref(null);

onMounted(() => {
  renderPieFunction();
  renderGraphFunction();
});

const renderPieFunction = () => {
  const pieEchart = echarts.init(pieEchartRef.value);
  pieEchart.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "middle",
      left: "right",
      orient: "verticalAlign",
      icon: "circle",
    },
    series: [
      {
        type: "pie",
        center: ["40%", "50%"],
        radius: ["40%", "70%"],
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 58, name: "永臻科技股份有限公司58%" },
          { value: 12, name: "永臻科技股份有限公司12%" },
          { value: 8, name: "永臻科技股份有限公司8%" },
          { value: 16, name: "永臻科技股份有限公司16%" },
        ],
      },
    ],
  });
};
const renderGraphFunction = () => {
  const relativeEchart = echarts.init(graphEchartRef.value);
  relativeEchart.setOption({
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a) {
          return a.name;
        }),
      },
    ],
    series: [
      {
        name: "Les Miserables",
        type: "graph",
        layout: "none",
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          show: true,
          position: "right",
          formatter: "{b}",
        },
        labelLayout: {
          hideOverlap: true,
        },
        scaleLimit: {
          min: 0.4,
          max: 2,
        },
        lineStyle: {
          color: "source",
          curveness: 0.3,
        },
      },
    ],
  });
};
</script>

<template>
  <div class="stock-right">
    <div class="left-content">
      <div class="top-container">
        <div class="card-title-container">
          <img src="@/assets/svg/title-icon.svg" alt="" />
          <span>股权分析</span>
        </div>
        <div ref="pieEchartRef" class="echart-container"></div>
      </div>
      <div class="bottom-container">
        <div class="card-title-container">
          <img src="@/assets/svg/title-icon.svg" alt="" />
          <span>关系图谱</span>
        </div>
        <div ref="graphEchartRef" class="echart-container"></div>
      </div>
    </div>

    <!-- <div class="right-content">
      <div class="card-title-container">
        <img src="@/assets/svg/title-icon.svg" alt="" />
        <span>历史中标</span>
      </div>
      <div ref="lineEchartRef" class="echart-container"></div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.stock-right {
  width: 100%;
  height: 100%;
  display: flex;

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

  .echart-container {
    flex: 1;
    width: 100%;
    height: 0;
  }

  .left-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .top-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 50%;
      border-radius: 12px;
      background-color: #ffffff;
    }
    .bottom-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 50%;
      border-radius: 12px;
      background-color: #ffffff;
      margin-top: 18px;
    }
  }

  .right-content {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-radius: 12px;
    background-color: #ffffff;
    margin-left: 26px;

    .competitor-container {
      flex: 1;
      width: 100%;
      height: 0;
    }
  }
}
</style>
