import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import useUserStore from "@/store/modules/user";

// 关闭右上角的loading圈
NProgress.configure({ showSpinner: false });

//路由进入前拦截
const whiteList = ["/login", "/register", "/404", "/401"]; // no redirect whitelist
router.beforeEach(async (to) => {
  NProgress.start();
  document.title = (to.meta?.title as string) || "科技情报雷达"; // i18 page title
  const userStore = useUserStore();
  //1.判断token
  if (userStore.userInfo.username) {
    if (to.path === "/login") {
      return "/";
    } else {
      //2.判断是否获取用户信息
      // if (!userStore.getUserInfo) {
      //   try {
      //     //3.用户信息
      //     const userInfo = await userInfoReq();
      //     //4.保存用户信息到store
      //     // @ts-ignore
      //     basicStore.setUserInfo(userInfo);
      //     //4.路由设置
      //     const routeInfo = await getRouterReq();
      //     filterAsyncRouter(routeInfo);

      //     //5.再次执行路由跳转
      //     return { ...to, replace: true };
      //   } catch (e) {
      //     console.error(`route permission error${e}`);
      //     basicStore.resetState();
      //     NProgress.done();
      //     return `/login?redirect=${to.path}`;
      //   }
      // } else {
      return true;
      // }
    }
  } else {
    if (!whiteList.includes(to.path)) {
      return `/login?redirect=${to.path}`;
    } else {
      return true;
    }
  }
});
//路由进入后拦截
router.afterEach(() => {
  NProgress.done();
});
