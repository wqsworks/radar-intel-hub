<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Filters from "../../components/Filters.vue";

const router = useRouter();

const filterSelected = ref([]);
const filtersList = ref([
  {
    id: 2,
    title: "党中央会议(定方向)",
    children: [
      { id: 3, title: "五中全会 (五年规划纲要)" },
      { id: 4, title: "中央经济工作会议" },
      { id: 5, title: "政治局会议" },
      { id: 6, title: "政治局集体学习" },
      { id: 7, title: "中央财经委员会会议" },
      { id: 8, title: "中央金融委员会会议" },
      { id: 9, title: "中央深改委员会会议" },
      { id: 10, title: "中央科技委员会会议" },
      { id: 11, title: "中央网络安全和信息化委员会" },
      { id: 12, title: "中央国家安全委员会" },
      { id: 13, title: "中共中央办公厅" },
    ],
  },
  {
    id: 14,
    title: "国务院(研究、制定)",
    children: [
      { id: 15, title: "国务院 (研究、制定)" },
      { id: 16, title: "两会" },
      { id: 17, title: "财政部" },
      { id: 18, title: "央行" },
      { id: 19, title: "生态环境部" },
      { id: 20, title: "发改委" },
      { id: 21, title: "科技部" },
      { id: 22, title: "工信部" },
      { id: 23, title: "国防部" },
      { id: 24, title: "国家安全部" },
      { id: 25, title: "交通运输部" },
      { id: 26, title: "住建部" },
      { id: 27, title: "商务部" },
      { id: 28, title: "农业农村部" },
      { id: 29, title: "文旅部" },
      { id: 30, title: "水利部" },
    ],
  },
  {
    id: 31,
    title: "地方政府(落地、执行)",
    children: [{ id: 32, title: "地方政府(落地、执行)" }],
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
    title: "双减政策",
    policyIntroduction:
      "严格控制校外培训机构的课程数量与时长，减少学生课后负担。",
    publishInstitution: "教育部",
    publishDate: "2021-07-24",
  },
  {
    id: 2,
    title: "碳达峰碳中和行动计划",
    policyIntroduction:
      "加快非化石能源发展，推进风电、光伏发电等绿色能源建设。",
    publishInstitution: "国家发改委",
    publishDate: "2020-09-22",
  },
  {
    id: 3,
    title: "乡村振兴战略",
    policyIntroduction:
      "提高农村基础设施建设，推动乡村公路、饮水、网络等基础设施的全面提升。",
    publishInstitution: "国务院",
    publishDate: "2017-10-18",
  },
  {
    id: 4,
    title: "个人所得税专项附加扣除政策",
    policyIntroduction:
      "明确赡养老人、子女教育、住房贷款等方面的专项附加扣除标准。",
    publishInstitution: "财政部",
    publishDate: "2018-12-22",
  },
  {
    id: 5,
    title: "新能源汽车补贴政策",
    policyIntroduction:
      "对符合技术标准的新能源汽车提供购车补贴，促进新能源汽车消费。",
    publishInstitution: "工业和信息化部",
    publishDate: "2020-06-15",
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
  router.push(`/policy/${item.id}`);
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
              <span class="table-title">发布机构：</span>
              <span class="table-inner">
                {{ item.publishInstitution }}
              </span>
              <span class="table-title">政策简介：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.policyIntroduction)"
                style="width: auto"
              >
              </span>
            </div>
            <div class="item-row">
              <span class="table-title">发布日期：</span>
              <span
                class="table-inner"
                v-html="renderColor(item.publishDate)"
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
