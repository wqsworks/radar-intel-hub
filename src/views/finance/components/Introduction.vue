<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

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
  <div class="introduction">
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
          <el-pagination size="small" layout="prev, pager, next" :total="50" />
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
            <el-table-column prop="name" label="专利名称" min-width="40" />
            <el-table-column prop="time" label="发表时间" min-width="13" />
          </el-table>
          <el-pagination size="small" layout="prev, pager, next" :total="50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduction {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
</style>
