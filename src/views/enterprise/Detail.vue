<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import * as echarts from "echarts";
import useCompanyStore, { CompanyInfo } from "@/store/modules/company";

const router = useRouter();
const companyStore = useCompanyStore();

const companyInfo = ref({ ...companyStore.companyInfo });

const goBack = () => {
  router.push("/enterprise");
};

const titleList = ref(["工商信息", "技术信息", "融资信息", "公司信息"]);
const activeTitle = ref("工商信息");

const pieEchartRef = ref(null);
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

onMounted(() => {
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

  const lineEchart = echarts.init(lineEchartRef.value);
  initLineOption();
  lineEchart.setOption(lineOption.value);
});

const competitorData = ref([
  {
    id: 1,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 2,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 3,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 4,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 5,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 6,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 7,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 8,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 9,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
  {
    id: 10,
    companyName: "永臻科技股份有限公司",
    samilar: "极高",
    creativity: "A+",
  },
]);
</script>

<template>
  <div class="enterprise-detail">
    <div class="company-info">
      <div class="back" @click="goBack">
        <img src="@/assets/svg/back.svg" alt="" />
      </div>

      <div class="company-info-content">
        <img class="company-logo" src="@/assets/img/company.png" alt="" />
        <div class="company-name">{{ companyInfo.companyName }}</div>
        <div class="company-item">
          <span class="company-item-label">成立日期：</span>
          <span class="company-item-value">{{
            companyInfo.establishmentTime
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">实控人：</span>
          <span class="company-item-value">{{
            companyInfo.actualController
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">注册资本：</span>
          <span class="company-item-value">{{
            companyInfo.registeredCapital
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">融资轮次：</span>
          <span class="company-item-value">{{
            companyInfo.financingRounds
          }}</span>
        </div>
        <div class="company-item">
          <span class="company-item-label">公司官网：</span>
          <span>
            <a :href="companyInfo.companyWebsite" class="company-item-value">{{
              companyInfo.companyWebsite
            }}</a>
          </span>
        </div>
      </div>
    </div>
    <div class="company-content">
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
              <span>股东占比</span>
            </div>
            <div ref="pieEchartRef" class="echart-container"></div>
          </div>
          <div class="bottom-container">
            <div class="card-title-container">
              <img src="@/assets/svg/title-icon.svg" alt="" />
              <span>历史中标</span>
            </div>
            <div ref="lineEchartRef" class="echart-container"></div>
          </div>
        </div>
        <div class="right-content">
          <div class="card-title-container">
            <img src="@/assets/svg/title-icon.svg" alt="" />
            <span>竞品企业</span>
          </div>
          <div class="competitor-container">
            <el-table
              :data="competitorData"
              :cell-style="{ 'font-size': '16px' }"
              height="100%"
              style="width: 100%"
            >
              <el-table-column type="index" label="序号" min-width="10" />
              <el-table-column
                prop="companyName"
                label="公司名称"
                min-width="20"
              />
              <el-table-column
                prop="samilar"
                label="相似度"
                class-name="green"
                min-width="15"
              />
              <el-table-column
                prop="creativity"
                label="创新力评级"
                min-width="15"
              />
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.enterprise-detail {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f8f9fd;

  .company-info {
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

    .company-info-content {
      margin-top: 160px;
      margin-right: 16px;

      .company-logo {
        width: 92px;
        height: 92px;
        margin-left: 96px;
      }

      .company-name {
        margin: 45px 0 40px 36px;
        font-size: 20px;
        font-weight: 600;
        color: #000000;
      }

      .company-item {
        margin-left: 24px;
        margin-bottom: 12px;
        span {
          display: inline-block;
        }
        .company-item-label {
          width: 92x;
          font-size: 16px;
          color: #999999;
        }
        .company-item-value {
          font-size: 16px;
          color: #444444;
        }

        a:link {
          color: #448ef7;
        }
      }
    }
  }

  .company-content {
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

      .echart-container {
        flex: 1;
        width: 100%;
        height: 0;
      }

      .left-content {
        display: flex;
        flex-direction: column;
        width: 60%;
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

      .right-content {
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100%;
        border-radius: 12px;
        background-color: #ffffff;
        margin-left: 26px;

        .competitor-container {
          flex: 1;
          width: 100%;
          height: 0;
        }
      }
    }
  }
}
.green {
  color: #08ad36;
}
</style>
