<script lang="ts" setup>
import { ref } from "vue";
import Aside from "@/components/Aside.vue";
import CloudWord from "@/views/analysis/components/CloudWord.vue";
import Graph from "@/views/analysis/components/Graph.vue";
import TechRating from "@/views/analysis/components/TechRating.vue";
import TeamRating from "@/views/analysis/components/TeamRating.vue";
import techCloud from "@/assets/svg/tech-cloud.svg";
import graph from "@/assets/svg/graph.svg";
import techRating from "@/assets/svg/tech-rating.svg";
import teamRating from "@/assets/svg/team-rating.svg";

const activeIndex = ref(0);
const asideList = ref([
  {
    label: "技术云图",
    icon: "tech-cloud",
    url: techCloud,
  },
  {
    label: "图谱展示",
    icon: "graph",
    url: graph,
  },
  {
    label: "技术评级展示",
    icon: "tech-rating",
    url: techRating,
  },
  {
    label: "团队评级展示",
    icon: "team-rating",
    url: teamRating,
  },
]);
</script>

<template>
  <div class="analysis-container">
    <Aside v-model:activeIndex="activeIndex" :asideList="asideList"></Aside>
    <div class="analysis-main-content">
      <CloudWord v-if="activeIndex === 0"></CloudWord>
      <Graph v-if="activeIndex === 1"></Graph>
      <TechRating v-if="activeIndex === 2"></TechRating>
      <TeamRating v-if="activeIndex === 3"></TeamRating>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.analysis-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f8f9fd;
}
.analysis-main-content {
  width: 100%;
  background-color: #fff;
  margin: 38px 60px 68px 34px
}
</style>
