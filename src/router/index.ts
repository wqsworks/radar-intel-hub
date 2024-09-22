import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/views/login/index.vue";
import Layout from "@/components/Layout.vue";
import EnterpriseData from "@/views/enterprise/index.vue";
import EnterpriseDetail from "@/views/enterprise/Detail.vue";
import ScientificLeader from "@/views/scientific/index.vue";
import ScientificDetail from "@/views/scientific/Detail.vue";
import SecondaryAnalysis from "@/views/analysis/index.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/enterprise",
    children: [
      {
        path: "/enterprise",
        name: "enterprise",
        component: EnterpriseData,
      },
      {
        path: "/enterprise/:id",
        name: "enterprise-detail",
        component: EnterpriseDetail,
      },
      {
        path: "/scientific",
        name: "scientific",
        component: ScientificLeader,
      },
      {
        path: "/scientific/:id",
        name: "scientific-detail",
        component: ScientificDetail,
      },
      {
        path: "/analysis",
        name: "secondary-analysis",
        component: SecondaryAnalysis,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
