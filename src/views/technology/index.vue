<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Filters from "../../components/Filters.vue";

const router = useRouter();

const filterSelected = ref([]);
const filtersList = ref([
  {
    id: 2,
    title: "西北工业大学",
    children: [
      { id: 3, title: "无人机" },
      { id: 4, title: "商业航天" },
      { id: 5, title: "航空装备" },
      { id: 6, title: "军用新材料" },
      { id: 7, title: "军用信息化" },
    ],
  },
  {
    id: 8,
    title: "北京航空航天大学",
    children: [
      { id: 9, title: "无人机" },
      { id: 10, title: "商业航天" },
      { id: 11, title: "航空装备" },
      { id: 12, title: "军用新材料" },
      { id: 13, title: "军用信息化" },
    ],
  },
  {
    id: 14,
    title: "南京航空航天大学",
    children: [
      { id: 15, title: "无人机" },
      { id: 16, title: "商业航天" },
      { id: 17, title: "航空装备" },
      { id: 18, title: "军用新材料" },
      { id: 19, title: "军用信息化" },
    ],
  },
  {
    id: 20,
    title: "哈尔滨工业大学",
    children: [
      { id: 21, title: "无人机" },
      { id: 22, title: "商业航天" },
      { id: 23, title: "航空装备" },
      { id: 24, title: "军用新材料" },
      { id: 25, title: "军用信息化" },
    ],
  },
  {
    id: 26,
    title: "清华大学",
    children: [
      { id: 27, title: "无人机" },
      { id: 28, title: "商业航天" },
      { id: 29, title: "航空装备" },
      { id: 30, title: "军用新材料" },
      { id: 31, title: "军用信息化" },
    ],
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
    title: "南京理工大学-李明教授团队",
    people: "王强",
    amount: "5000万元",
    date: "2012-05-10",
  },
  {
    id: 2,
    title: "清华大学-陈华教授团队",
    people: "刘伟",
    amount: "3000万元",
    date: "2015-08-15",
  },
  {
    id: 3,
    title: "北京航空航天大学-赵杰教授团队",
    people: "张宏",
    amount: "8000万元",
    date: "2010-11-20",
  },
  {
    id: 4,
    title: "上海交通大学-孙志远教授团队",
    people: "陈刚",
    amount: "6000万元",
    date: "2013-09-05",
  },
  {
    id: 5,
    title: "复旦大学-王伟教授团队",
    people: "李明",
    amount: "7000万元",
    date: "2011-04-12",
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
  router.push(`/technology/${item.id}`);
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
              <span class="table-title">法定代表人：</span>
              <span class="table-inner">
                {{ item.people }}
              </span>
              <span class="table-title">注册资本：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.amount)"
                style="width: auto"
              >
              </span>
            </div>
            <div class="item-row">
              <span class="table-title">成立日期：</span>
              <span class="table-inner" v-html="renderColor(item.date)"> </span>
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
