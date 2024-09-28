<script lang="ts" setup>
import { ref } from "vue";
const competitorData = ref([
  {
    id: 1,
    publishDate: "2024-01-01",
    title: "某市政府办公大楼改造项目",
    tenderingCompany: "市政府采购中心",
    winningCompany: "城市建设集团",
  },
  {
    id: 2,
    publishDate: "2024-01-15",
    title: "高速公路扩建工程",
    tenderingCompany: "省交通厅",
    winningCompany: "路桥建设股份有限公司",
  },
  {
    id: 3,
    publishDate: "2024-02-05",
    title: "智慧城市监控系统升级",
    tenderingCompany: "市公安局",
    winningCompany: "科技安防有限公司",
  },
  {
    id: 4,
    publishDate: "2024-02-20",
    title: "新能源汽车充电桩建设项目",
    tenderingCompany: "市发展和改革委员会",
    winningCompany: "绿色能源科技有限公司",
  },
  {
    id: 5,
    publishDate: "2024-03-10",
    title: "城市污水处理厂扩建工程",
    tenderingCompany: "市环境保护局",
    winningCompany: "水务环保集团",
  },
  {
    id: 6,
    publishDate: "2024-03-25",
    title: "5G通信基站建设项目",
    tenderingCompany: "省通信管理局",
    winningCompany: "通信技术股份有限公司",
  },
  {
    id: 7,
    publishDate: "2024-04-08",
    title: "城市地铁3号线延长线工程",
    tenderingCompany: "市轨道交通集团",
    winningCompany: "铁路工程总公司",
  },
  {
    id: 8,
    publishDate: "2024-04-22",
    title: "农村饮用水安全工程",
    tenderingCompany: "县水利局",
    winningCompany: "水利工程有限公司",
  },
  {
    id: 9,
    publishDate: "2024-05-06",
    title: "市中心医院医疗设备采购",
    tenderingCompany: "市卫生健康委员会",
    winningCompany: "医疗器械有限公司",
  },
  {
    id: 10,
    publishDate: "2024-05-20",
    title: "城市垃圾分类处理中心建设",
    tenderingCompany: "市城市管理局",
    winningCompany: "环保科技有限公司",
  },
  {
    id: 11,
    publishDate: "2024-06-03",
    title: "智慧校园系统建设项目",
    tenderingCompany: "市教育局",
    winningCompany: "教育信息化科技公司",
  },
  {
    id: 12,
    publishDate: "2024-06-17",
    title: "城市公园绿化改造工程",
    tenderingCompany: "市园林绿化局",
    winningCompany: "园林工程有限公司",
  },
  {
    id: 13,
    publishDate: "2024-07-01",
    title: "老旧小区电梯加装项目",
    tenderingCompany: "市住房和城乡建设局",
    winningCompany: "电梯工程有限公司",
  },
  {
    id: 14,
    publishDate: "2024-07-15",
    title: "城市交通信号灯智能化改造",
    tenderingCompany: "市交通运输局",
    winningCompany: "智能交通系统有限公司",
  },
  {
    id: 15,
    publishDate: "2024-07-29",
    title: "市级数据中心建设项目",
    tenderingCompany: "市大数据管理局",
    winningCompany: "云计算科技有限公司",
  },
  {
    id: 16,
    publishDate: "2024-08-12",
    title: "城市河道治理工程",
    tenderingCompany: "市水务局",
    winningCompany: "水利工程集团",
  },
  {
    id: 17,
    publishDate: "2024-08-26",
    title: "公共图书馆智能化升级项目",
    tenderingCompany: "市文化和旅游局",
    winningCompany: "文化科技有限公司",
  },
  {
    id: 18,
    publishDate: "2024-09-09",
    title: "城市地下综合管廊建设",
    tenderingCompany: "市规划和自然资源局",
    winningCompany: "市政工程建设集团",
  },
  {
    id: 19,
    publishDate: "2024-09-23",
    title: "新能源公交车采购项目",
    tenderingCompany: "市公共交通集团",
    winningCompany: "新能源汽车制造有限公司",
  },
  {
    id: 20,
    publishDate: "2024-10-07",
    title: "城市应急指挥中心建设工程",
    tenderingCompany: "市应急管理局",
    winningCompany: "应急管理技术有限公司",
  },
]);
</script>

<template>
  <div class="win-bidding-container">
    <div class="card-title-container">
      <img src="@/assets/svg/title-icon.svg" alt="" />
      <span>招投标<span class="count">100+</span></span>
    </div>
    <div class="competitor-container">
      <el-table
        :data="competitorData"
        :cell-style="{ 'font-size': '16px' }"
        show-overflow-tooltip
        height="auto"
        style="display: flex; width: 100%"
      >
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="60px"
        />
        <el-table-column prop="publishDate" label="发布日期" min-width="15" />
        <el-table-column
          prop="title"
          label="标题"
          min-width="30"
          class-name="blue"
        />
        <el-table-column
          prop="tenderingCompany"
          label="招标公司"
          min-width="20"
          class-name="blue"
        />
        <el-table-column
          prop="winningCompany"
          label="中标公司"
          min-width="20"
          class-name="blue"
        />
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.win-bidding-container {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  border-radius: 12px;
  background-color: #ffffff;
  .card-title-container {
    flex: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cccccc;

    img {
      width: 26px;
      height: 26px;
      padding-left: 24px;
      padding-right: 8px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
    }

    .count {
      margin-left: 6px;
      font-size: 16px;
      font-weight: 400;
      color: #cccccc;
    }
  }

  .echart-container {
    flex: 1;
    width: 100%;
    height: 0;
  }

  .card-title-container {
    flex: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cccccc;

    img {
      width: 26px;
      height: 26px;
      padding-left: 24px;
      padding-right: 8px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
    }
  }
  .competitor-container {
    flex: 1;
    height: 0;
    display: flex;
    padding: 10px 20px;
  }
}

:deep(.blue) {
  color: #0000ff;
}
</style>
