<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Introduction from "./components/Introduction.vue";
import TechnologyKeywords from "./components/TechnologyKeywords.vue";
import TechnologyEvaluation from "./components/TechnologyEvaluation.vue";
const router = useRouter();

const personalInfo = ref({
  leaderName: "张三峰",
  idCard: "3440470140701414078",
  thesisWorks:
    "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
  patentInformation: "一种专利自助撰写方法及系统",
});

const goBack = () => {
  router.push("/policy");
};

const titleList = ref([
  { title: "政策文件AI摘要", id: 1 },
  { title: "政策文件关键词", id: 2 },
  { title: "政策文件AI分析与历次政策的区别", id: 3 },
]);
const activeId = ref(1);

</script>

<template>
  <div class="technology-detail">
    <div class="personal-info">
      <div class="back" @click="goBack">
        <img src="@/assets/svg/back.svg" alt="" />
      </div>

      <div class="personal-info-content">
        <div class="personal-logo">
          <img src="@/assets/img/user.png" alt="" />
        </div>
        <div class="personal-name">{{ personalInfo.leaderName }}</div>
        <div class="personal-item">
          <div class="personal-item-label">论文：</div>
          <div class="personal-item-value">{{ personalInfo.thesisWorks }}</div>
        </div>
        <div class="personal-item">
          <div class="personal-item-label">专利：</div>
          <div class="personal-item-value">
            {{ personalInfo.patentInformation }}
          </div>
        </div>
      </div>
    </div>
    <div class="personal-content">
      <div class="title-container">
        <div
          class="title-item"
          :class="{ active: activeId === item.id }"
          v-for="item in titleList"
          :key="item.id"
          @click="activeId = item.id"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="content-container">
        <Introduction v-if="activeId === 1" />
        <!-- <TechnologyKeywords v-if="activeId === 2"  /> -->
        <TechnologyEvaluation v-if="activeId === 3" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.technology-detail {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f8f9fd;

  .personal-info {
    flex: none;
    position: relative;
    width: 314px;
    height: 100%;

    .back {
      position: absolute;
      top: 32px;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 68px;
      background: #273075;
      border-radius: 0px 8px 8px 0px;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
        padding-right: 6px;
      }
    }

    .personal-info-content {
      margin-top: 160px;
      margin-right: 16px;

      .personal-logo {
        width: 92px;
        height: 92px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        margin-left: 96px;
        border-radius: 10px;

        img {
          height: 89px;
          margin: 0 auto;
        }
      }

      .personal-name {
        margin: 33px 20px 40px 0;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        color: #000000;
      }

      .personal-item {
        display: flex;
        margin: 0 20px 14px 24px;

        .personal-item-label {
          flex: none;
          width: 92px;
          font-size: 16px;
          color: #999999;
        }
        .personal-item-value {
          flex: 1;
          font-size: 16px;
          color: #444444;
        }

        a:link {
          color: #448ef7;
        }
      }
    }
  }

  .personal-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 0;
    height: 100%;
    margin-right: 80px;

    .title-container {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      margin-top: 32px;
      padding: 0 4px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0px 0px 8.2px 0px #0000001f;

      .title-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(33% - 12px);
        height: 60px;
        border-radius: 15px;
        font-size: 20px;
        color: #000000;
        background-color: #fff;
        border-radius: 8px;
        cursor: pointer;

        &.active {
          background: #273075;
          color: #fff;
          font-weight: 600;
        }
      }
    }

    .content-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 0;
      margin-top: 18px;

      
    }
  }
}
.green {
  color: #08ad36;
}
</style>
