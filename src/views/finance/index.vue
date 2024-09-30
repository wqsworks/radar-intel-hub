<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Filters from "../../components/Filters.vue";

const router = useRouter();

const filterSelected = ref([]);
const filtersList = ref([
  {
    id: 2,
    title: "深创投",
    children: [{ id: 3, title: "深创投" }],
  },
  {
    id: 4,
    title: "国鼎资本",
    children: [{ id: 5, title: "国鼎资本" }],
  },
  {
    id: 6,
    title: "国投创合",
    children: [{ id: 7, title: "国投创合" }],
  },
  {
    id: 8,
    title: "中科创星",
    children: [{ id: 9, title: "中科创星" }],
  },
  {
    id: 10,
    title: "中电基金",
    children: [{ id: 11, title: "中电基金" }],
  },
  {
    id: 12,
    title: "联创资本",
    children: [{ id: 13, title: "联创资本" }],
  },
]);

const isShowSearchResult = ref(false);
// 搜索关键词
const searchValue = ref("");
const searchData = () => {
  keyword.value = searchValue.value.trim();
  isShowSearchResult.value = true;
};

const isRelativeUp = ref(false);
const isNameUp = ref(false);

const tableData = ref([
  {
    id: 1,
    title: "小米集团C轮融资",
    date: "2014-12-29",
    investor: "DST Global",
    introduction:
      "小米集团在C轮融资中筹集了11亿美元，估值达450亿美元，成为全球增长最快的科技公司之一。",
  },
  {
    id: 2,
    title: "滴滴出行D轮融资",
    date: "2015-09-08",
    investor: "腾讯、阿里巴巴",
    introduction:
      "滴滴出行在D轮融资中获得了超过30亿美元的资金支持，助力其在网约车市场的快速扩张。",
  },
  {
    id: 3,
    title: "蚂蚁金服B轮融资",
    date: "2016-04-26",
    investor: "中国投资有限责任公司",
    introduction:
      "蚂蚁金服在B轮融资中筹集了45亿美元，资金主要用于全球化扩展以及金融科技创新。",
  },
  {
    id: 4,
    title: "美团点评F轮融资",
    date: "2017-10-19",
    investor: "腾讯",
    introduction:
      "美团点评在F轮融资中获得40亿美元，用于巩固其在本地生活服务市场的领先地位并加快业务多元化。",
  },
  {
    id: 5,
    title: "字节跳动Pre-IPO轮融资",
    date: "2020-03-10",
    investor: "软银愿景基金",
    introduction:
      "字节跳动在上市前的融资中筹集了30亿美元，用于支持TikTok的全球扩展以及旗下产品的技术升级。",
  },
]);

const keyword = ref("");
// 处理搜索标红
const renderColor = (item: string) => {
  if (keyword.value !== "" && item.indexOf(keyword.value) !== -1) {
    return item.replace(
      keyword.value,
      `<span style="color: #dd4f48">${keyword.value}</span>`
    );
  }
  return item;
};

const toDetail = (item: any) => {
  router.push(`/finance/${item.id}`);
};
</script>

<template>
  <div class="technology">
    <Filters
      class="filters"
      v-model="filterSelected"
      :filtersList="filtersList"
    />
    <div class="technology-content">
      <div class="technology-search">
        <el-input
          v-model="searchValue"
          placeholder="请输入搜索内容"
          class="technology-search-input"
          @keyup.enter="searchData"
        />
        <div class="technology-search-button" @click="searchData">
          <img src="@/assets/svg/search.svg" alt="" />
        </div>
      </div>
      <div class="technology-search-result" v-show="isShowSearchResult">
        为您找到 <span>2888</span> 个结果，检索耗时 <span>8</span> ms
      </div>
      <div class="technology-inner">
        <div class="technology-inner-select">
          <div class="select-item" @click="isRelativeUp = !isRelativeUp">
            <span>相关度排序</span>
            <template v-if="isRelativeUp">
              <img class="arrow-icon" src="@/assets/svg/arrow-up.svg" alt="" />
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
              <img class="arrow-icon" src="@/assets/svg/arrow-up.svg" alt="" />
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
          class="technology-inner-table"
          v-for="item in tableData"
          @click="toDetail(item)"
        >
          <div class="technology-inner-table-item">
            <div class="item-title" v-html="renderColor(item.title)"></div>
            <div class="item-row">
              <span class="table-title">时间：</span>
              <span class="table-inner">
                {{ item.date }}
              </span>
              <span class="table-title">领投方：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.investor)"
                style="width: auto"
              >
              </span>
            </div>
            <div class="item-row">
              <span class="table-title">简介：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.introduction)"
                style="width: auto"
              >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.technology {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #f8f9fd;

  .filters {
    flex: none;
    background-color: #fff;
  }

  .technology-content {
    flex: 1;
    width: 0;
    min-height: 100%;
    padding: 36px 60px 0 34px;

    .technology-search {
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

      .technology-search-button {
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

    .technology-search-result {
      margin-top: 20px;
      margin-left: 26px;
      font-size: 16px;
      color: #232323;

      span {
        font-weight: 600;
      }
    }

    .technology-inner {
      display: flex;
      flex-direction: column;
      margin-top: 22px;
      padding-top: 24px;
      border-radius: 8px;
      background-color: #fff;

      .technology-inner-select {
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

      .technology-inner-table {
        padding: 0 44px 32px 32px;

        &:hover {
          background: #f3f8fc;
        }

        & + .technology-inner-table {
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
          width: 30%;
          min-width: 200px;
          font-size: 16px;
          color: #444444;
        }

        a:link {
          color: #448ef7;
        }
      }

      .technology-inner-table:first-child {
        padding: 32px 44px 24px 32px;
      }
    }
  }
}
</style>
