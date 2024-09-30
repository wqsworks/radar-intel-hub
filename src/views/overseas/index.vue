<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Filters from "../../components/Filters.vue";

const router = useRouter();

const filterSelected = ref([]);
const filtersList = ref([
  {
    id: 2,
    title: "供应链数据情报",
    children: [{ id: 3, title: "供应链数据情报" }],
  },
  {
    id: 4,
    title: "技术链数据情报",
    children: [{ id: 5, title: "技术链数据情报" }],
  },
  {
    id: 6,
    title: "政策链数据情报",
    children: [{ id: 7, title: "政策链数据情报" }],
  },
  {
    id: 8,
    title: "金融链数据情报",
    children: [{ id: 9, title: "金融链数据情报" }],
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
    title: "美国半导体供应链现状报告",
    date: "2023-06-15",
    category: "供应链数据情报",
    introduction:
      "该报告详细分析了美国半导体产业的供应链现状，涵盖芯片生产、原材料供应以及关键设备的全球布局。",
  },
  {
    id: 2,
    title: "德国新能源技术发展趋势",
    date: "2022-11-05",
    category: "技术链数据情报",
    introduction:
      "报告介绍了德国在新能源技术方面的最新进展，涵盖风能、太阳能、氢能等多个领域的创新技术与应用前景。",
  },
  {
    id: 3,
    title: "欧盟碳排放政策分析",
    date: "2021-09-20",
    category: "政策链数据情报",
    introduction:
      "该情报提供了对欧盟最新碳排放政策的深入分析，重点讨论了碳交易市场的监管以及对企业的影响。",
  },
  {
    id: 4,
    title: "日本汽车产业融资动态",
    date: "2023-03-12",
    category: "金融链数据情报",
    introduction:
      "情报总结了日本汽车产业的最新融资动态，涵盖电动车、智能驾驶等领域的融资趋势与主要投资方。",
  },
  {
    id: 5,
    title: "韩国5G产业供应链分析",
    date: "2022-07-18",
    category: "供应链数据情报",
    introduction:
      "该分析报告探讨了韩国5G产业的供应链布局，涵盖设备制造商、运营商以及5G技术的国际合作情况。",
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
  router.push(`/overseas/${item.id}`);
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
              <span class="table-title">日期：</span>
              <span class="table-inner">
                {{ item.date }}
              </span>
              <span class="table-title">分类：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.category)"
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
