<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { graphData as graph } from "./data";

const containerRef = ref();

onMounted(() => {
  renderFunction();
});

const renderFunction = () => {
  const relativeEchart = echarts.init(containerRef.value);
  relativeEchart.setOption({
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}'
        },
        labelLayout: {
          hideOverlap: true
        },
        scaleLimit: {
          min: 0.4,
          max: 2
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        }
      }
    ]
  });
};
</script>

<template>
  <div class="graph-container">
    <div class="graph-title">
      <img src="@/assets/svg/graph-title-icon.svg" alt="关系图谱" />
      <span>关系图谱</span>
    </div>

    <div class="graph-content">
      <div ref="containerRef"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.graph-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .graph-title {
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

  .graph-content {
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
