<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chart } from "@antv/g2";

const cloudWordData = [
  { value: 10.123456789, text: "车长", name: "测量系统" },
  { value: 9.87654321, text: "自动测量系统", name: "测量系统" },
  { value: 8.765432109, text: "粗击", name: "测量系统" },
  { value: 8.654321098, text: "综合数据处理", name: "测量系统" },
  { value: 6.543210987, text: "测距", name: "测量系统" },
  { value: 5.432109876, text: "运行检测", name: "测量系统" },
  { value: 4.321098765, text: "测地", name: "测量系统" },
  { value: 3.210987654, text: "瞄准镜", name: "测量系统" },
  { value: 2.109876543, text: "轮廓尺寸", name: "测量系统" },
  { value: 1.098765432, text: "数据处理单元", name: "测量系统" },
  { value: 0.987654321, text: "自动测量", name: "测量系统" },
  { value: 0.87654321, text: "测量单元", name: "测量系统" },
  { value: 0.765432109, text: "校正参数", name: "测量系统" },
  { value: 0.654321098, text: "半挂车", name: "测量系统" },
  { value: 0.543210987, text: "车辆", name: "测量系统" },
  { value: 0.432109876, text: "倾斜", name: "测量系统" },
  { value: 0.321098765, text: "实时状态", name: "测量系统" },
  { value: 0.210987654, text: "距离测量", name: "测量系统" },
  { value: 0.109876543, text: "直角坐标系", name: "测量系统" },
  { value: 0.098765432, text: "取证", name: "测量系统" },
];

const containerRef = ref();

onMounted(() => {
  renderFunction();
});

const renderFunction = () => {
  const chart = new Chart({
    container: containerRef.value,
    autoFit: true,
    paddingTop: 40,
  });

  chart
    .wordCloud()
    .data({
      type: "inline",
      value: cloudWordData,
    })
    .layout({
      spiral: "rectangular",
      fontSize: [20, 80],
      rotate: () => {
        return Math.random() < 0.5 ? 0 : 90;
      },
    })
    .encode("color", "text");

  chart.render();
};
</script>

<template>
  <div class="cloud-word-container">
    <div class="cloud-word-title">
      <img src="@/assets/svg/tech-cloud-title-icon.svg" alt="词云" />
      <span>词云图</span>
    </div>

    <div class="cloud-word-content">
      <div ref="containerRef" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cloud-word-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .cloud-word-title {
    flex: none;
    display: flex;
    align-items: center;
    padding: 30px 0 12px 42px;
    img {
      width: 28px;
      height: 28px;
      margin-right: 6px;
    }

    span {
      font-size: 20px;
    }
  }

  .cloud-word-content {
    flex: 1;
    height: 0;
    margin: 0 16px 32px 14px;
  }
}
</style>
