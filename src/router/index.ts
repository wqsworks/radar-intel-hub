import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/login/index.vue';
import Layout from '@/components/Layout.vue';
import SupplyData from '@/views/supply/index.vue';
import SupplyDetail from '@/views/supply/Detail.vue';
import TechnologyData from '@/views/technology/index.vue';
import TechnologyDetail from '@/views/technology/Detail.vue';
import PolicyData from '@/views/policy/index.vue';
import PolicyDetail from '@/views/policy/Detail.vue';
import FinanceData from '@/views/finance/index.vue';
import FinanceDetail from '@/views/finance/Detail.vue';
import OverseasData from '@/views/overseas/index.vue';
import OverseasDetail from '@/views/overseas/Detail.vue';
import FeatureData from '@/views/feature/index.vue';
import FeatureDetail from '@/views/feature/Detail.vue';
import MiningData from '@/views/mining/index.vue';
import MiningDetail from '@/views/mining/Detail.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/supply',
    children: [
      {
        path: '/supply',
        name: 'supply',
        component: SupplyData,
      },
      {
        path: '/supply/:id',
        name: 'supply-detail',
        component: SupplyDetail,
      },
      {
        path: '/technology',
        name: 'technology',
        component: TechnologyData,
      },
      {
        path: '/technology/:id',
        name: 'technology-detail',
        component: TechnologyDetail,
      },
      {
        path: '/policy',
        name: 'policy',
        component: PolicyData,
      },
      {
        path: '/policy/:id',
        name: 'policy-detail',
        component: PolicyDetail,
      },
      {
        path: '/finance',
        name: 'finance',
        component: FinanceData,
      },
      {
        path: '/finance/:id',
        name: 'finance-detail',
        component: FinanceDetail,
      },
      {
        path: '/overseas',
        name: 'overseas',
        component: OverseasData,
      },
      {
        path: '/overseas/:id',
        name: 'overseas-detail',
        component: OverseasDetail,
      },
      {
        path: '/feature',
        name: 'feature',
        component: FeatureData,
      },
      {
        path: '/feature/:id',
        name: 'feature-detail',
        component: FeatureDetail,
      },
      {
        path: '/mining',
        name: 'mining',
        component: MiningData,
      },
      {
        path: '/mining/:id',
        name: 'mining-detail',
        component: MiningDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 添加全局前置守卫来处理Electron特定的导航
router.beforeEach((to, from, next) => {
  // 检查是否在Electron环境中
  if ((window as any).electron) {
    // 这里可以添加Electron特定的逻辑
    // 例如,处理外部链接
    if (to.path.startsWith('http')) {
      (window as any).electron.openExternal(to.path);
      return next(false);
    }
  }
  next();
});
export default router;
