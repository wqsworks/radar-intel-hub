<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import useCompanyStore, { CompanyInfo } from "@/store/modules/company";
import StockRight from "./components/StockRight.vue";
import WinBidding from "./components/WinBidding.vue";
import IntellectualProperty from "./components/IntellectualProperty.vue";
import CompetitivenessRating from "./components/CompetitivenessRating.vue";

const router = useRouter();
const companyStore = useCompanyStore();

const companyInfo = ref({ ...companyStore.companyInfo });

const goBack = () => {
  router.push("/supply");
};

const titleList = ref([
  { title: "股权信息", id: 1 },
  { title: "中标信息", id: 2 },
  { title: "知识产权", id: 3 },
  { title: "竞争力评级", id: 4 },
]);
const activeId = ref(1);
</script>

<template>
  <div class="supply-detail">
    <div class="company-info">
      <div class="back" @click="goBack">
        <img src="@/assets/svg/back.svg" alt="" />
      </div>

      <div class="company-info-content">
        <img class="company-logo" src="@/assets/img/company.png" alt="" />
        <div class="company-name">{{ companyInfo.companyName }}</div>
        <div class="company-item">
          <span class="company-item-label">成立日期：</span>
          <span class="company-item-value">{{
            companyInfo.establishmentTime
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">实控人：</span>
          <span class="company-item-value">{{
            companyInfo.actualController
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">注册资本：</span>
          <span class="company-item-value">{{
            companyInfo.registeredCapital
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">融资轮次：</span>
          <span class="company-item-value">{{
            companyInfo.financingRounds
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">公司官网：</span>
          <span>
            <a :href="companyInfo.companyWebsite" class="company-item-value">{{
              companyInfo.companyWebsite
            }}</a>
          </span>
        </div>
      </div>
    </div>
    <div class="company-content">
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
        <StockRight v-if="activeId === 1" />
        <WinBidding v-if="activeId === 2" />
        <IntellectualProperty v-if="activeId === 3" />
        <CompetitivenessRating v-if="activeId === 4" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.supply-detail {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f8f9fd;

  .company-info {
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

    .company-info-content {
      margin-top: 160px;
      margin-right: 16px;

      .company-logo {
        width: 92px;
        height: 92px;
        margin-left: 96px;
      }

      .company-name {
        margin: 45px 0 40px 36px;
        font-size: 20px;
        font-weight: 600;
        color: #000000;
      }

      .company-item {
        margin-left: 24px;
        margin-bottom: 12px;
        span {
          display: inline-block;
        }
        .company-item-label {
          width: 92x;
          font-size: 16px;
          color: #999999;
        }
        .company-item-value {
          font-size: 16px;
          color: #444444;
        }

        a:link {
          color: #448ef7;
        }
      }
    }
  }

  .company-content {
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
        width: calc(25% - 12px);
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
      width: 100%;
      height: 0;
      margin-top: 18px;
    }
    //   .card-title-container {
    //     flex: none;
    //     display: flex;
    //     align-items: center;
    //     width: 100%;
    //     height: 60px;
    //     border-bottom: 1px solid #cccccc;

    //     img {
    //       width: 26px;
    //       height: 26px;
    //       padding-left: 24px;
    //       padding-right: 8px;
    //     }
    //     span {
    //       font-size: 20px;
    //       font-weight: 600;
    //       color: #000000;
    //     }
    //   }

    //   .echart-container {
    //     flex: 1;
    //     width: 100%;
    //     height: 0;
    //   }

    //   .left-content {
    //     display: flex;
    //     flex-direction: column;
    //     width: 60%;
    //     height: 100%;
    //     .top-container {
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       width: 100%;
    //       height: 50%;
    //       border-radius: 12px;
    //       background-color: #ffffff;
    //     }
    //     .bottom-container {
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       width: 100%;
    //       height: 50%;
    //       border-radius: 12px;
    //       background-color: #ffffff;
    //       margin-top: 18px;
    //     }
    //   }

    //   .right-content {
    //     display: flex;
    //     flex-direction: column;
    //     width: 40%;
    //     height: 100%;
    //     border-radius: 12px;
    //     background-color: #ffffff;
    //     margin-left: 26px;

    //     .competitor-container {
    //       flex: 1;
    //       width: 100%;
    //       height: 0;
    //     }
    //   }
    // }
  }
}
.green {
  color: #08ad36;
}
</style>
