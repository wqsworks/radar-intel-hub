<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Filters from "@/components/Filters.vue";
import useCompanyStore, { CompanyInfo } from "@/store/modules/company";

const router = useRouter();
const companyStore = useCompanyStore();

const filterSelected = ref([]);
const filtersList = ref([
  {
    id: 2,
    title: "无人机",
    children: [
      {
        id: 3,
        title: "无人机整机",
        children: [
          {
            id: 4,
            title: "行业无人机",
            children: [
              { id: 5, title: "勘探测绘无人机" },
              { id: 6, title: "警用安防无人机" },
              { id: 7, title: "灭火消防无人机" },
              { id: 8, title: "农业植保无人机" },
              { id: 9, title: "氢燃料电池无人机" },
              { id: 10, title: "水质空气检测及气象无人机" },
              { id: 11, title: "物流运输无人机" },
              { id: 12, title: "系留无人机" },
              { id: 13, title: "巡检无人机" },
              { id: 14, title: "应急救援无人机" },
              { id: 15, title: "影视摄像无人机" },
              { id: 16, title: "油电混合无人机" },
            ],
          },
          {
            id: 17,
            title: "太阳能无人机",
            children: [{ id: 18, title: "太阳能无人机" }],
          },
          {
            id: 19,
            title: "军用无人机",
            children: [
              { id: 20, title: "靶机" },
              { id: 21, title: "通信中继无人机" },
              { id: 22, title: "战斗无人机" },
              { id: 23, title: "侦查无人机" },
            ],
          },
          {
            id: 24,
            title: "教育编程无人机",
            children: [{ id: 25, title: "教育编程无人机" }],
          },
          {
            id: 26,
            title: "eVTOL",
            children: [{ id: 27, title: "eVTOL" }],
          },
        ],
      },
      {
        id: 28,
        title: "无人机解决方案",
        children: [{ id: 29, title: "无人机解决方案" }],
      },
      {
        id: 30,
        title: "无人机服务",
        children: [
          {
            id: 31,
            title: "测绘服务",
            children: [
              { id: 32, title: "电力巡检" },
              { id: 33, title: "环保监测" },
            ],
          },
        ],
      },
      {
        id: 34,
        title: "无人机部件",
        children: [
          { id: 35, title: "云台" },
          { id: 36, title: "遥控器" },
          { id: 37, title: "图传数据" },
          { id: 38, title: "螺旋桨" },
          { id: 39, title: "机架" },
          { id: 40, title: "光电载荷" },
          { id: 41, title: "飞控" },
          { id: 42, title: "发动机" },
          { id: 43, title: "定位模块" },
          { id: 44, title: "电机" },
          { id: 45, title: "电调" },
          { id: 46, title: "电池" },
          { id: 47, title: "地面站" },
          { id: 48, title: "成像系统" },
        ],
      },
      {
        id: 49,
        title: "水下无人机",
        children: [{ id: 50, title: "水下无人机" }],
      },
      {
        id: 51,
        title: "反无人机",
        children: [{ id: 52, title: "反无人机" }],
      },
    ],
  },
  {
    id: 53,
    title: "商业航天",
    children: [{ id: 54, title: "商业航天" }],
  },
  {
    id: 55,
    title: "航空装备",
    children: [{ id: 56, title: "航空装备" }],
  },
  {
    id: 57,
    title: "军用新材料",
    children: [{ id: 58, title: "军用新材料" }],
  },
  {
    id: 59,
    title: "军用信息化",
    children: [{ id: 60, title: "军用信息化" }],
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
    companyName: "星辰科技有限公司",
    establishmentTime: "2010-05-12",
    registeredCapital: "15000 万元人民币",
    actualController: "李四",
    financingRounds: "A轮",
    companyWebsite: "https://www.starch.com",
    companyDescription:
      "星辰科技有限公司成立于2010年，专注于人工智能和大数据技术的研发与应用，致力于为客户提供智能化解决方案，推动行业数字化转型。",
  },
  {
    id: 3,
    companyName: "未来创新有限公司",
    establishmentTime: "2015-11-23",
    registeredCapital: "8000 万元人民币",
    actualController: "王五",
    financingRounds: "B轮",
    companyWebsite: "https://www.futureinnov.com",
    companyDescription:
      "未来创新有限公司成立于2015年，主要从事智能硬件和物联网技术的研发与生产，致力于为客户提供高效、便捷的智能生活解决方案。",
  },
  {
    id: 4,
    companyName: "智联科技有限公司",
    establishmentTime: "2012-03-18",
    registeredCapital: "12000 万元人民币",
    actualController: "赵六",
    financingRounds: "C轮",
    companyWebsite: "https://www.smartlink.com",
    companyDescription:
      "智联科技有限公司成立于2012年，专注于云计算和区块链技术的研发与应用，致力于为客户提供安全、可靠的云服务和区块链解决方案。",
  },
  {
    id: 5,
    companyName: "蓝海科技有限公司",
    establishmentTime: "2018-07-19",
    registeredCapital: "5000 万元人民币",
    actualController: "张三",
    financingRounds: "天使轮",
    companyWebsite: "https://www.blueocean.com",
    companyDescription:
      "蓝海科技有限公司成立于2018年，专注于海洋科技的研发与应用，致力于为客户提供创新的海洋解决方案，推动海洋经济的发展。",
  },
  {
    id: 6,
    companyName: "绿能环保有限公司",
    establishmentTime: "2013-04-22",
    registeredCapital: "10000 万元人民币",
    actualController: "李四",
    financingRounds: "A轮",
    companyWebsite: "https://www.greenenergy.com",
    companyDescription:
      "绿能环保有限公司成立于2013年，致力于环保技术的研发与推广，提供全面的环保解决方案，推动绿色经济的发展。",
  },
  {
    id: 7,
    companyName: "未来科技有限公司",
    establishmentTime: "2016-09-30",
    registeredCapital: "8000 万元人民币",
    actualController: "王五",
    financingRounds: "B轮",
    companyWebsite: "https://www.futuretech.com",
    companyDescription:
      "未来科技有限公司成立于2016年，专注于未来科技的研发与应用，致力于为客户提供前沿的科技解决方案，推动科技进步。",
  },
  {
    id: 8,

    companyName: "智联网络有限公司",
    establishmentTime: "2011-11-11",
    registeredCapital: "12000 万元人民币",
    actualController: "赵六",
    financingRounds: "C轮",
    companyWebsite: "https://www.smartnet.com",
    companyDescription:
      "智联网络有限公司成立于2011年，专注于网络技术的研发与应用，致力于为客户提供安全、可靠的网络解决方案，推动网络技术的发展。",
  },
  {
    id: 9,
    companyName: "光速科技有限公司",
    establishmentTime: "2014-02-14",
    registeredCapital: "6000 万元人民币",
    actualController: "孙七",
    financingRounds: "天使轮",
    companyWebsite: "https://www.lightspeed.com",
    companyDescription:
      "光速科技有限公司成立于2014年，专注于光电技术的研发与应用，致力于为客户提供高效的光电解决方案，推动光电产业的发展。",
  },
  {
    id: 10,
    companyName: "未来智能有限公司",
    establishmentTime: "2017-08-08",
    registeredCapital: "9000 万元人民币",
    actualController: "周八",
    financingRounds: "A轮",
    companyWebsite: "https://www.futureai.com",
    companyDescription:
      "未来智能有限公司成立于2017年，专注于人工智能技术的研发与应用，致力于为客户提供智能化解决方案，推动人工智能的发展。",
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

const toDetail = (item: CompanyInfo) => {
  companyStore.setCompanyInfo(item);
  router.push(`/supply/${item.id}`);
};
</script>

<template>
  <div class="supply">
    <Filters
      class="filters"
      v-model="filterSelected"
      :filtersList="filtersList"
    />
    <div class="supply-content">
      <div class="supply-search">
        <el-input
          v-model="searchValue"
          placeholder="请输入搜索内容"
          class="supply-search-input"
          @keyup.enter="searchData"
        />
        <div class="supply-search-button" @click="searchData">
          <img src="@/assets/svg/search.svg" alt="" />
        </div>
      </div>
      <div class="supply-search-result" v-show="isShowSearchResult">
        为您找到 <span>2888</span> 个结果，检索耗时 <span>8</span> ms
      </div>
      <div class="supply-inner">
        <div class="supply-inner-select">
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
          class="supply-inner-table"
          v-for="item in tableData"
          @click="toDetail(item)"
        >
          <div class="supply-inner-table-item">
            <div
              class="item-title"
              v-html="renderColor(item.companyName)"
            ></div>
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
              <div
                class="table-inner"
                v-html="renderColor(item.companyDescription)"
                style="width: 100%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.supply {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #f8f9fd;

  .filters {
    flex: none;
    background-color: #fff;
  }

  .supply-content {
    flex: 1;
    width: 0;
    padding: 36px 60px 0 34px;

    .supply-search {
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

      .supply-search-button {
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

    .supply-search-result {
      margin-top: 20px;
      margin-left: 26px;
      font-size: 16px;
      color: #232323;

      span {
        font-weight: 600;
      }
    }

    .supply-inner {
      display: flex;
      flex-direction: column;
      margin-top: 22px;
      padding-top: 24px;
      border-radius: 8px;
      background-color: #fff;

      .supply-inner-select {
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

      .supply-inner-table {
        padding: 0 44px 24px 32px;

        &:hover {
          background: #f3f8fc;
        }

        & + .supply-inner-table {
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

      .supply-inner-table:first-child {
        padding: 32px 44px 24px 32px;
      }
    }
  }
}
</style>
