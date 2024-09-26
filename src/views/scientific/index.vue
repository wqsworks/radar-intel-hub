<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Filters from "../../components/Filters.vue";

const router = useRouter();

const filterSelected = ref([]);
const filtersList = ref([
  {
    id: 1,
    title: "身份ID",
    children: [],
    disabled: true,
    isClickable: false,
    isExpand: false,
  },
  {
    id: 2,
    title: "所属高校/企业",
    children: [
      {
        id: 5,
        title: "企业",
        children: [],
      },
      {
        id: 3,
        title: "高校",
        children: [
          {
            id: 4,
            title: "高校1",
            value: "高校1",
          },
          
        ],
      },
    
    ],
    disabled: false,
    isClickable: false,
    isExpand: false,
  },
  {
    id: 6,
    title: "年龄",
    children: [
      {
        id: 7,
        title: "0-10",
      },
      {
        id: 8,
        title: "10-18",
      },
      {
        id: 9,
        title: "18-28",
      },
      {
        id: 10,
        title: "28-40",
      },
      {
        id: 11,
        title: "40-60",
      },
    ],
    disabled: false,
    isExpand: false,
  },
  {
    id: 12,
    title: "职称",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 13,
    title: "荣誉奖项",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 14,
    title: "研究方向",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 15,
    title: "论文名称",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 16,
    title: "发表时间",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 17,
    title: "期刊名称",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 18,
    title: "论文研究方向",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 19,
    title: "联合单位",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 20,
    title: "专利数量",
    children: [],
    disabled: true,
    isExpand: false,
  },
  {
    id: 21,
    title: "专利名称",
    children: [],
    disabled: true,
    isExpand: false,
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
    leaderName: "张三峰",
    idCard: "3440470140701414078",
    thesisWorks:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    patentInformation: "一种专利自助撰写方法及系统",
  },
  {
    id: 2,
    leaderName: "张三峰",
    idCard: "2016-08-03",
    thesisWorks:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    patentInformation: "一种专利自助撰写方法及系统",
  },
  {
    id: 3,
    leaderName: "张三峰",
    idCard: "2016-08-03",
    thesisWorks:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    patentInformation: "一种专利自助撰写方法及系统",
  },
  {
    id: 4,
    leaderName: "张三峰",
    idCard: "2016-08-03",
    thesisWorks:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    patentInformation: "一种专利自助撰写方法及系统",
  },
  {
    id: 5,
    leaderName: "张三峰",
    idCard: "2016-08-03",
    thesisWorks:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    patentInformation: "一种专利自助撰写方法及系统",
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
  router.push(`/scientific/${item.id}`);
};
</script>

<template>
  <div class="scientific">
    <Filters
      class="filters"
      v-model="filterSelected"
      :filtersList="filtersList"
    />
    <div class="scientific-content">
      <div class="scientific-search">
        <el-input
          v-model="searchValue"
          placeholder="请输入科技带头人名称"
          class="scientific-search-input"
          @keyup.enter="searchData"
        />
        <div class="scientific-search-button" @click="searchData">
          <img src="@/assets/svg/search.svg" alt="" />
        </div>
      </div>
      <div class="scientific-search-result" v-show="isShowSearchResult">
        为您找到 <span>2888</span> 个结果，检索耗时 <span>8</span> ms
      </div>
      <div class="scientific-inner">
        <div class="scientific-inner-select">
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
          class="scientific-inner-table"
          v-for="item in tableData"
          @click="toDetail(item)"
        >
          <div class="scientific-inner-table-item">
            <div class="item-title" v-html="renderColor(item.leaderName)"></div>
            <div class="item-row">
              <span class="table-title">身份ID：</span>
              <span class="table-inner">
                {{ item.idCard }}
              </span>
              <span class="table-title">论文著作：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.thesisWorks)"
                style="width: auto"
              >
              </span>
            </div>
            <div class="item-row">
              <span class="table-title">专利信息：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.patentInformation)"
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
.scientific {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #f8f9fd;

  .filters {
    flex: none;
    background-color: #fff;
  }

  .scientific-content {
    flex: 1;
    width: 0;
    min-height: 100%;
    padding: 36px 60px 0 34px;

    .scientific-search {
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

      .scientific-search-button {
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

    .scientific-search-result {
      margin-top: 20px;
      margin-left: 26px;
      font-size: 16px;
      color: #232323;

      span {
        font-weight: 600;
      }
    }

    .scientific-inner {
      display: flex;
      flex-direction: column;
      margin-top: 22px;
      padding-top: 24px;
      border-radius: 8px;
      background-color: #fff;

      .scientific-inner-select {
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

      .scientific-inner-table {
        padding: 0 44px 32px 32px;

        &:hover {
          background: #f3f8fc;
        }

        & + .scientific-inner-table {
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

      .scientific-inner-table:first-child {
        padding: 32px 44px 24px 32px;
      }
    }
  }
}
</style>
