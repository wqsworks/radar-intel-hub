/*
 * @Author: yangbo
 * @Date: 2024-09-18 13:58:33
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/css/index.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import pinia from "./store";
import "./permission";

createApp(App).use(router).use(ElementPlus).use(pinia).mount("#app");
