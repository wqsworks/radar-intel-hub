<script lang="ts" setup>
import { ref } from "vue";
const propertyData = ref([
  {
    id: 1,
    name: "保鲜机构、保险控制方法及冰箱",
    publishNumber: "CN18623540A",
    type: "发明专利",
    publishDate: "2024-09-10",
  },
  {
    id: 2,
    name: "智能家电控制系统",
    publishNumber: "CN20245678B",
    type: "实用新型专利",
    publishDate: "2024-08-15",
  },
  {
    id: 3,
    name: "节能环保空调装置",
    publishNumber: "CN19876543C",
    type: "发明专利",
    publishDate: "2024-07-22",
  },
  {
    id: 4,
    name: "智能洗衣机控制方法",
    publishNumber: "CN20241111D",
    type: "发明专利",
    publishDate: "2024-06-30",
  },
  {
    id: 5,
    name: "多功能电饭煲",
    publishNumber: "CN20242222E",
    type: "实用新型专利",
    publishDate: "2024-05-18",
  },
  {
    id: 6,
    name: "智能门锁系统",
    publishNumber: "CN20243333F",
    type: "发明专利",
    publishDate: "2024-04-25",
  },
  {
    id: 7,
    name: "家用净水器过滤装置",
    publishNumber: "CN20244444G",
    type: "实用新型专利",
    publishDate: "2024-03-12",
  },
  {
    id: 8,
    name: "智能音箱语音识别方法",
    publishNumber: "CN20245555H",
    type: "发明专利",
    publishDate: "2024-02-28",
  },
  {
    id: 9,
    name: "节能电热水器",
    publishNumber: "CN20246666I",
    type: "实用新型专利",
    publishDate: "2024-01-15",
  },
  {
    id: 10,
    name: "智能窗帘控制系统",
    publishNumber: "CN20247777J",
    type: "发明专利",
    publishDate: "2023-12-20",
  },
  {
    id: 11,
    name: "家用空气净化器",
    publishNumber: "CN20248888K",
    type: "实用新型专利",
    publishDate: "2023-11-30",
  },
  {
    id: 12,
    name: "智能马桶控制方法",
    publishNumber: "CN20249999L",
    type: "发明专利",
    publishDate: "2023-10-25",
  },
  {
    id: 13,
    name: "多功能搅拌机",
    publishNumber: "CN20231010M",
    type: "实用新型专利",
    publishDate: "2023-09-18",
  },
  {
    id: 14,
    name: "智能电视图像处理方法",
    publishNumber: "CN20231111N",
    type: "发明专利",
    publishDate: "2023-08-22",
  },
  {
    id: 15,
    name: "便携式榨汁机",
    publishNumber: "CN20231212O",
    type: "实用新型专利",
    publishDate: "2023-07-15",
  },
  {
    id: 16,
    name: "智能扫地机器人导航系统",
    publishNumber: "CN20231313P",
    type: "发明专利",
    publishDate: "2023-06-30",
  },
  {
    id: 17,
    name: "节能电磁炉",
    publishNumber: "CN20231414Q",
    type: "实用新型专利",
    publishDate: "2023-05-20",
  },
  {
    id: 18,
    name: "智能家居中央控制系统",
    publishNumber: "CN20231515R",
    type: "发明专利",
    publishDate: "2023-04-10",
  },
  {
    id: 19,
    name: "智能家居安全监控系统",
    publishNumber: "CN20231616S",
    type: "发明专利",
    publishDate: "2023-03-05",
  },
  {
    id: 20,
    name: "多功能厨房电器集成装置",
    publishNumber: "CN20231717T",
    type: "实用新型专利",
    publishDate: "2023-02-18",
  },
]);
const softwareData = ref([
  {
    id: 1,
    name: "某市政府办公大楼改造项目",
    abbreviation: "-",
    version: "V1.0",
    softwareType: "其他软件",
    industryType: "其他行业",
    registerDate: "2024-09-02",
  },
  {
    id: 2,
    name: "智能家居控制平台",
    abbreviation: "SHCP",
    version: "V2.1",
    softwareType: "嵌入式软件",
    industryType: "家居智能",
    registerDate: "2024-08-15",
  },
  {
    id: 3,
    name: "在线教育课程管理系统",
    abbreviation: "OECMS",
    version: "V3.5",
    softwareType: "应用软件",
    industryType: "教育培训",
    registerDate: "2024-07-20",
  },
  {
    id: 4,
    name: "医疗影像分析软件",
    abbreviation: "MIAS",
    version: "V1.2",
    softwareType: "数据处理软件",
    industryType: "医疗卫生",
    registerDate: "2024-06-30",
  },
  {
    id: 5,
    name: "工业生产线监控系统",
    abbreviation: "IPLMS",
    version: "V4.0",
    softwareType: "工业控制软件",
    industryType: "制造业",
    registerDate: "2024-05-25",
  },
  {
    id: 6,
    name: "金融风险评估模型",
    abbreviation: "FRAM",
    version: "V2.3",
    softwareType: "数据分析软件",
    industryType: "金融服务",
    registerDate: "2024-04-18",
  },
  {
    id: 7,
    name: "智慧城市交通管理平台",
    abbreviation: "SCTMP",
    version: "V5.1",
    softwareType: "系统软件",
    industryType: "城市管理",
    registerDate: "2024-03-10",
  },
  {
    id: 8,
    name: "电子商务订单处理系统",
    abbreviation: "ECOPS",
    version: "V3.2",
    softwareType: "应用软件",
    industryType: "电子商务",
    registerDate: "2024-02-05",
  },
  {
    id: 9,
    name: "农业物联网数据采集系统",
    abbreviation: "AIDCS",
    version: "V1.5",
    softwareType: "嵌入式软件",
    industryType: "农业",
    registerDate: "2024-01-20",
  },
  {
    id: 10,
    name: "人力资源管理软件",
    abbreviation: "HRMS",
    version: "V4.5",
    softwareType: "应用软件",
    industryType: "企业管理",
    registerDate: "2023-12-15",
  },
  {
    id: 11,
    name: "环境监测数据分析平台",
    abbreviation: "EMDAP",
    version: "V2.0",
    softwareType: "数据处理软件",
    industryType: "环境保护",
    registerDate: "2023-11-30",
  },
  {
    id: 12,
    name: "智能客服聊天机器人",
    abbreviation: "ISCB",
    version: "V3.7",
    softwareType: "人工智能软件",
    industryType: "客户服务",
    registerDate: "2023-10-25",
  },
  {
    id: 13,
    name: "区块链供应链追溯系统",
    abbreviation: "BSCTS",
    version: "V1.8",
    softwareType: "区块链软件",
    industryType: "供应链管理",
    registerDate: "2023-09-20",
  },
  {
    id: 14,
    name: "虚拟现实教育培训平台",
    abbreviation: "VRETP",
    version: "V2.4",
    softwareType: "虚拟现实软件",
    industryType: "教育培训",
    registerDate: "2023-08-15",
  },
  {
    id: 15,
    name: "智能家电能耗优化系统",
    abbreviation: "SHAEOS",
    version: "V1.3",
    softwareType: "嵌入式软件",
    industryType: "家电制造",
    registerDate: "2023-07-10",
  },
  {
    id: 16,
    name: "网络安全威胁检测软件",
    abbreviation: "NSTDS",
    version: "V5.6",
    softwareType: "安全软件",
    industryType: "网络安全",
    registerDate: "2023-06-05",
  },
  {
    id: 17,
    name: "远程医疗诊断系统",
    abbreviation: "TMDS",
    version: "V2.9",
    softwareType: "应用软件",
    industryType: "医疗卫生",
    registerDate: "2023-05-01",
  },
  {
    id: 18,
    name: "智能仓储管理软件",
    abbreviation: "IWMS",
    version: "V4.2",
    softwareType: "应用软件",
    industryType: "物流仓储",
    registerDate: "2023-04-15",
  },
  {
    id: 19,
    name: "新能源汽车电池管理系统",
    abbreviation: "NEVBMS",
    version: "V3.0",
    softwareType: "嵌入式软件",
    industryType: "汽车制造",
    registerDate: "2023-03-10",
  },
  {
    id: 20,
    name: "大数据营销分析平台",
    abbreviation: "BDMAP",
    version: "V2.7",
    softwareType: "数据分析软件",
    industryType: "市场营销",
    registerDate: "2023-02-05",
  },
]);
</script>

<template>
  <div class="intellectual-property-container">
    <div class="top-container">
      <div class="card-title-container">
        <img src="@/assets/svg/title-icon.svg" alt="" />
        <span>专利信息<span class="count">5000+</span></span>
      </div>
      <div class="competitor-container">
        <el-table
          :data="propertyData"
          :cell-style="{ 'font-size': '16px' }"
          show-overflow-tooltip
          height="100%"
          style="display: flex; width: 100%"
        >
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="60px"
          />
          <el-table-column prop="name" label="专利名称" min-width="40" />
          <el-table-column
            prop="publishNumber"
            label="公布/公告号"
            min-width="20"
          />
          <el-table-column prop="type" label="专利类型" min-width="20" />
          <el-table-column
            prop="publishDate"
            label="公布/公告日期"
            min-width="20"
          />
          <el-table-column label="操作" min-width="10">
            <template #default="scope">
              <span class="blue" style="cursor: pointer">编辑</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="bottom-container">
      <div class="card-title-container">
        <img src="@/assets/svg/title-icon.svg" alt="" />
        <span>软件著作权信息<span class="count">88</span></span>
      </div>
      <div class="competitor-container">
        <el-table
          :data="softwareData"
          :cell-style="{ 'font-size': '16px' }"
          show-overflow-tooltip
          height="100%"
          style="display: flex; width: 100%"
        >
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="60px"
          />
          <el-table-column prop="name" label="软件名称" min-width="25" />
          <el-table-column
            prop="abbreviation"
            label="软件简称"
            min-width="15"
          />
          <el-table-column prop="version" label="版本号" min-width="10" />
          <el-table-column
            prop="softwareType"
            label="软件著作分类"
            min-width="15"
          />
          <el-table-column
            prop="industryType"
            label="行业分类"
            min-width="15"
          />
          <el-table-column
            prop="registerDate"
            label="登记日期"
            min-width="15"
          />
          <el-table-column label="操作" min-width="10">
            <template #default="scope">
              <span class="blue" style="cursor: pointer">编辑</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intellectual-property-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

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

  .top-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 0;
    border-radius: 12px;
    background-color: #ffffff;
  }
  .bottom-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 0;
    border-radius: 12px;
    background-color: #ffffff;
    margin-top: 18px;
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
