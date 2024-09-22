<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Filters from "@/components/Filters.vue";

const router = useRouter();

const filterSelected = ref([]);
const filtersList = ref([
  {
    title: "行业",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "地区",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "成立时间",
    options: [
      {
        label: "2024年",
        value: "2024",
      },
      {
        label: "2023年",
        value: "2023",
      },
      {
        label: "2022年",
        value: "2022",
      },
      {
        label: "2021年",
        value: "2021",
      },
      {
        label: "2020年",
        value: "2020",
      },
    ],
    disabled: false,
    isExpand: false,
  },
  {
    title: "中标金额",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "投标单位",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "竞标公司",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "注册资本",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "注册地",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "企业称号",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "发明专利",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "融资轮次",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "最近融资时间",
    options: [],
    disabled: true,
    isExpand: false,
  },
]);

const isShowSearchResult = ref(false);
const searchValue = ref("");
const searchData = () => {
  isShowSearchResult.value = true;
};

const isRelativeUp = ref(false);
const isNameUp = ref(false);

const tableData = ref([
  {
    id: 1,
    companyName: "永臻科技股份有限公司",
    establishmentTime: "2016-08-03",
    registeredCapital: "17794.2226 万元人民币",
    actualController: "章三",
    financingRounds: "天使轮",
    companyWebsite: "https://www.yongz.com",
    companyDescription:
      "永臻科技股份有限公司成立于2016年，公司主要从事绿色能源结构材料的研发、生产、销售及应用，主营产品包括光伏边框产品、光伏建筑一体化产品（BIPV）、光伏支架结构件，产品主要应用于光伏领域。自设立以来，公司始终秉承“成为绿色能源结构材料应用解决方案领导者”的企业愿景，经过多年的精耕细作，目前已成为国内领先的铝合金光伏结构件制造商之一。股票简称：永臻股份，股票代码：603381。",
  },
  {
    id: 2,
    companyName: "永臻科技股份有限公司",
    establishmentTime: "2016-08-03",
    registeredCapital: "17794.2226 万元人民币",
    actualController: "章三",
    financingRounds: "天使轮",
    companyWebsite: "https://www.yongz.com",
    companyDescription:
      "永臻科技股份有限公司成立于2016年，公司主要从事绿色能源结构材料的研发、生产、销售及应用，主营产品包括光伏边框产品、光伏建筑一体化产品（BIPV）、光伏支架结构件，产品主要应用于光伏领域。自设立以来，公司始终秉承“成为绿色能源结构材料应用解决方案领导者”的企业愿景，经过多年的精耕细作，目前已成为国内领先的铝合金光伏结构件制造商之一。股票简称：永臻股份，股票代码：603381。",
  },
  {
    id: 3,
    companyName: "永臻科技股份有限公司",
    establishmentTime: "2016-08-03",
    registeredCapital: "17794.2226 万元人民币",
    actualController: "章三",
    financingRounds: "天使轮",
    companyWebsite: "https://www.yongz.com",
    companyDescription:
      "永臻科技股份有限公司成立于2016年，公司主要从事绿色能源结构材料的研发、生产、销售及应用，主营产品包括光伏边框产品、光伏建筑一体化产品（BIPV）、光伏支架结构件，产品主要应用于光伏领域。自设立以来，公司始终秉承“成为绿色能源结构材料应用解决方案领导者”的企业愿景，经过多年的精耕细作，目前已成为国内领先的铝合金光伏结构件制造商之一。股票简称：永臻股份，股票代码：603381。",
  },
]);

const toDetail = (item: any) => {
  router.push(`/enterprise/${item.id}`);
};
</script>

<template>
  <div class="enterprise">
    <Filters
      class="filters"
      v-model="filterSelected"
      :filtersList="filtersList"
    />
    <div class="enterprise-content">
      <div class="enterprise-search">
        <el-input
          v-model="searchValue"
          placeholder="请输入企业名称"
          class="enterprise-search-input"
        />
        <div class="enterprise-search-button" @click="searchData">
          <img src="@/assets/svg/search.svg" alt="" />
        </div>
      </div>
      <div class="enterprise-search-result" v-show="isShowSearchResult">
        为您找到 <span>2888</span> 个结果，检索耗时 <span>8</span> ms
      </div>
      <div class="enterprise-inner">
        <div class="enterprise-inner-select">
          <div class="select-item" @click="isRelativeUp = !isRelativeUp">
            <span>相关度排序</span>
            <template v-if="isRelativeUp">
              <img
                class="arrow-icon"
                src="@/assets/svg/arrow-up.svg"
                alt=""
              />
            </template>
            <template v-else>
              <img
                class="arrow-icon"
                src="@/assets/svg/arrow-down.svg"
                alt=""
              />
            </template>
          </div>
          <div class="select-item" @click="isNameUp = !isNameUp">
            <span>名称排序a-z</span>
            <template v-if="isNameUp">
              <img
                class="arrow-icon"
                src="@/assets/svg/arrow-up.svg"
                alt=""
              />
            </template>
            <template v-else>
              <img
                class="arrow-icon"
                src="@/assets/svg/arrow-down.svg"
                alt=""
              />
            </template>
          </div>
        </div>
        <div
          class="enterprise-inner-table"
          v-for="item in tableData"
          @click="toDetail(item)"
        >
          <div class="enterprise-inner-table-item">
            <div class="item-title">{{ item.companyName }}</div>
            <div class="item-row">
              <span class="table-title">成立日期：</span>
              <span class="table-inner">
                {{ item.establishmentTime }}
              </span>
              <span class="table-title">注册资本：</span>
              <span class="table-inner">
                {{ item.registeredCapital }}
              </span>
            </div>
            <div class="item-row">
              <span class="table-title">实控人：</span>
              <span class="table-inner">
                {{ item.actualController }}
              </span>
              <span class="table-title">融资轮次：</span>
              <span class="table-inner">
                {{ item.financingRounds }}
              </span>
            </div>
            <div class="item-row">
              <span class="table-title">公司官网：</span>
              <a :href.self="item.companyWebsite" target="_blank">
                {{ item.companyWebsite }}
              </a>
            </div>
            <div class="item-row">
              <div class="table-title" style="margin-bottom: 8px">
                公司简介：
              </div>
              <div class="table-inner" style="width: 100%">
                {{ item.companyDescription }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.enterprise {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #f8f9fd;

  .filters {
    flex: none;
    background-color: #fff;
  }

  .enterprise-content {
    flex: 1;
    width: 0;
    padding: 36px 60px 0 34px;

    .enterprise-search {
      position: relative;
      height: 60px;
      margin-right: 100px;

      :deep(.el-input) {
        width: 100%;
        height: 100%;
        .el-input__wrapper {
          padding-left: 26px;
          font-size: 20px;
          box-shadow: 0px 0px 8.2px 0px #0000001f;
          border-radius: 60px;

          &.is-focus,
          &:hover {
            box-shadow: 0px 0px 8.2px 0px #0000001f;
          }
        }
      }

      .enterprise-search-button {
        position: absolute;
        right: 4px;
        top: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 52px;
        color: #fff;
        background-color: #0f1c51;
        border-radius: 52px;
        cursor: pointer;

        &:hover {
          background-color: #4955b3;
        }

        img {
          width: 32px;
          height: 32px;
        }
      }
    }

    .enterprise-search-result {
      margin-top: 20px;
      margin-left: 26px;
      font-size: 16px;
      color: #232323;

      span {
        font-weight: 600;
      }
    }

    .enterprise-inner {
      display: flex;
      flex-direction: column;
      margin-top: 22px;
      padding-top: 24px;
      border-radius: 8px;
      background-color: #fff;

      .enterprise-inner-select {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding-left: 12px;

        .select-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 124px;
          height: 32px;
          font-size: 14px;
          color: #4c4c51;
          background: #f6f6f6;
          border-radius: 32px;
          cursor: pointer;

          & + .select-item {
            margin-left: 16px;
          }

          .arrow-icon {
            margin-left: 10px;
            width: 9px;
            height: 5px;
          }
        }
      }

      .enterprise-inner-table {
        padding: 0 44px 24px 32px;

        &:hover {
          background: #f3f8fc;
        }

        & + .enterprise-inner-table {
          &:before {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            background-color: #cccccc;
          }
        }

        span {
          display: inline-block;
        }

        .item-title {
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-top: 32px;
          margin-bottom: 18px;
        }

        .item-row + .item-row {
          margin-top: 12px;
        }

        .table-title {
          width: 100px;
          font-size: 16px;
          color: #999999;
        }

        .table-inner {
          width: 20%;
          min-width: 200px;
          font-size: 16px;
          color: #444444;
        }

        a:link {
          color: #448ef7;
        }
      }

      .enterprise-inner-table:first-child {
        padding: 32px 44px 24px 32px;
      }
    }
  }
}
</style>
