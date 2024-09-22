<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as echarts from "echarts";

const router = useRouter();

const personalInfo = ref({
  leaderName: "张三峰",
  idCard: "3440470140701414078",
  thesisWorks:
    "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
  patentInformation: "一种专利自助撰写方法及系统",
});

const goBack = () => {
  router.push("/scientific");
};

const titleList = ref(["人才简介", "论文名称", "专利名称", "综合排名"]);
const activeTitle = ref("人才简介");

onMounted(() => {
  renderPieEchart();
  renderLineEchart();
});

const pieEchartRef = ref(null);
const renderPieEchart = () => {
  const pieEchart = echarts.init(pieEchartRef.value);
  pieEchart.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "middle",
      left: "right",
      orient: "verticalAlign",
      icon: "circle",
    },
    series: [
      {
        type: "pie",
        center: ["40%", "50%"],
        radius: ["40%", "70%"],
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 58, name: "永臻科技股份有限公司58%" },
          { value: 12, name: "永臻科技股份有限公司12%" },
          { value: 8, name: "永臻科技股份有限公司8%" },
          { value: 16, name: "永臻科技股份有限公司16%" },
        ],
      },
    ],
  });
};

const lineEchartRef = ref(null);
let lineOption = ref<any>(null);
const initLineOption = () => {
  let base = +new Date(2022, 1, 1);
  let oneDay = 24 * 3600 * 1000;
  let date: string[] = [];
  let data = [Math.round((Math.random() + 0.2) * 800000)];
  for (let i = 1; i < 30; i++) {
    var now = new Date((base += oneDay));
    if (now.getDate() % 4 === 2) {
      date.push([now.getMonth(), now.getDate()].join("."));
    } else {
      date.push("");
    }
    data.push(Math.round((Math.random() + 0.2) * 800000));
  }
  lineOption.value = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
      position: function (point: any) {
        return [point[0], 10];
      },
      formatter: (arr: any) => {
        if (arr && arr.length > 0) {
          const val = arr[0];
          const str = `${val.marker}${val.value}`;
          return str;
        }
        return "";
      },
    },

    xAxis: {
      type: "category",
      name: "时间",
      nameTextStyle: {
        align: "left",
        verticalAlign: "top",
      },
      nameGap: 30,
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      name: "历史中标金额",
      nameTextStyle: {
        align: "right",
        verticalAlign: "bottom",
      },
      boundaryGap: [0, "20%"],
    },
    series: [
      {
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "#4379EE",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#4379EE",
            },
            {
              offset: 1,
              color: "#ffffff",
            },
          ]),
        },
        data: data,
      },
    ],
  };
};
const renderLineEchart = () => {
  const lineEchart = echarts.init(lineEchartRef.value);
  initLineOption();
  lineEchart.setOption(lineOption.value);
};

const thesisData = ref([
  {
    id: 1,
    thesisName:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    publishTime: "2024.9.1",
    journalName: "科学家杂志",
  },
  {
    id: 2,
    thesisName:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    publishTime: "2024.9.1",
    journalName: "科学家杂志",
  },
  {
    id: 3,
    thesisName:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    publishTime: "2024.9.1",
    journalName: "科学家杂志",
  },
  {
    id: 4,
    thesisName:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    publishTime: "2024.9.1",
    journalName: "科学家杂志",
  },
  {
    id: 5,
    thesisName:
      "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    publishTime: "2024.9.1",
    journalName: "科学家杂志",
  },
]);

const patentData = ref([
  {
    id: 1,
    name: "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    time: "2024.9.1",
  },
  {
    id: 2,
    name: "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    time: "2024.9.1",
  },
  {
    id: 3,
    name: "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    time: "2024.9.1",
  },
  {
    id: 4,
    name: "基于纳米晶体表面配体的非特异性光化学交联反应和飞秒激光动力学输运",
    time: "2024.9.1",
  },
]);
</script>

<template>
  <div class="scientific-detail">
    <div class="personal-info">
      <div class="back" @click="goBack">
        <img src="@/assets/svg/back.svg" alt="" />
      </div>

      <div class="personal-info-content">
        <div class="personal-logo">
          <img src="@/assets/img/user.png" alt="" />
        </div>
        <div class="personal-name">{{ personalInfo.leaderName }}</div>
        <div class="personal-item">
          <div class="personal-item-label">论文：</div>
          <div class="personal-item-value">{{ personalInfo.thesisWorks }}</div>
        </div>
        <div class="personal-item">
          <div class="personal-item-label">专利：</div>
          <div class="personal-item-value">
            {{ personalInfo.patentInformation }}
          </div>
        </div>
      </div>
    </div>
    <div class="personal-content">
      <div class="title-container">
        <div
          class="title-item"
          :class="{ active: activeTitle === item }"
          v-for="item in titleList"
          :key="item"
          @click="activeTitle = item"
        >
          {{ item }}
        </div>
      </div>
      <div class="content-container">
        <div class="left-content">
          <div class="top-container">
            <div class="card-title-container">
              <img src="@/assets/svg/title-icon.svg" alt="" />
              <span>主力研究方向</span>
            </div>
            <div class="card-content-container">
              <div ref="pieEchartRef" class="echart-container"></div>
              <div class="table-container">
                <el-table :data="thesisData" style="width: 100%">
                  <el-table-column
                    prop="thesisName"
                    label="论文名称"
                    min-width="40"
                  />
                  <el-table-column
                    prop="publishTime"
                    label="发表时间"
                    min-width="13"
                  />
                  <el-table-column
                    prop="journalName"
                    label="期刊名称"
                    min-width="13"
                  />
                </el-table>
                <el-pagination
                  size="small"
                  layout="prev, pager, next"
                  :total="50"
                />
              </div>
            </div>
          </div>
          <div class="bottom-container">
            <div class="card-title-container">
              <img src="@/assets/svg/title-icon.svg" alt="" />
              <span>历史专利</span>
            </div>
            <div class="card-content-container">
              <div ref="lineEchartRef" class="echart-container"></div>
              <div class="table-container">
                <el-table :data="patentData" style="width: 100%">
                  <el-table-column
                    prop="name"
                    label="专利名称"
                    min-width="40"
                  />
                  <el-table-column
                    prop="time"
                    label="发表时间"
                    min-width="13"
                  />
                </el-table>
                <el-pagination
                  size="small"
                  layout="prev, pager, next"
                  :total="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scientific-detail {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f8f9fd;

  .personal-info {
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

    .personal-info-content {
      margin-top: 160px;
      margin-right: 16px;

      .personal-logo {
        width: 92px;
        height: 92px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        margin-left: 96px;
        border-radius: 10px;

        img {
          height: 89px;
          margin: 0 auto;
        }
      }

      .personal-name {
        margin: 33px 20px 40px 0;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        color: #000000;
      }

      .personal-item {
        display: flex;
        margin: 0 20px 14px 24px;

        .personal-item-label {
          flex: none;
          width: 92px;
          font-size: 16px;
          color: #999999;
        }
        .personal-item-value {
          flex: 1;
          font-size: 16px;
          color: #444444;
        }

        a:link {
          color: #448ef7;
        }
      }
    }
  }

  .personal-content {
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
      justify-content: space-around;
      height: 70px;
      margin-top: 32px;
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

      .left-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .top-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 50%;
          border-radius: 12px;
          background-color: #ffffff;
        }
        .bottom-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 50%;
          border-radius: 12px;
          background-color: #ffffff;
          margin-top: 18px;
        }
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
      .card-content-container {
        flex: 1;
        display: flex;
        width: 100%;
        height: 0;

        .echart-container {
          flex: 6;
          width: 0;
          height: 100%;
          margin-right: 90px;
        }

        .table-container {
          flex: 4;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 0;
          padding: 28px 26px 18px 0;

          .el-table {
            flex: 1;
            height: 0;
          }

          :deep(.el-pagination) {
            flex: none;
            align-self: flex-end;
            margin-top: 16px;
            color: red;

            .el-pager li.is-active {
              background: #273075;
              border-radius: 7px;
              color: #fff !important;
            }

            .el-pager li:hover {
              color: #3745b0;
            }
          }
        }
      }
    }
  }
}
.green {
  color: #08ad36;
}
</style>
