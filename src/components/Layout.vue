<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentNavbar = ref("/enterprise");
const navbarList = ref([
  {
    name: "企业数据",
    path: "/enterprise",
  },
  {
    name: "科研带头人",
    path: "/scientific",
  },
  {
    name: "二次分析",
    path: "/analysis",
  },
]);

watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    navbarList.value.forEach((item) => {
      if (newPath.includes(item.path)) {
        currentNavbar.value = item.path;
      }
    });
  },
  {
    immediate: true,
  }
);

const handleNavbarClick = (path) => {
  currentNavbar.value = path;
  router.push(path);
};
</script>

<template>
  <div class="layout">
    <div class="header">
      <div class="header-left">
        <img class="header-left-icon" src="../assets/svg/icon.svg" alt="icon" />
        <span class="header-left-title">科技情报雷达</span>
      </div>
      <div class="header-right">
        <div class="navbar-section">
          <div
            class="navbar-item"
            :class="{ active: currentNavbar === item.path }"
            v-for="item in navbarList"
            :key="item.path"
            @click="handleNavbarClick(item.path)"
          >
            {{ item.name }}
          </div>
        </div>
        <img class="user-icon" src="../assets/svg/user.svg" alt="user" />
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 30px 0 20px;
    background: #273075;

    .header-left {
      display: flex;
      align-items: center;

      .header-left-icon {
        width: 40px;
        height: 40px;
      }
      .header-left-title {
        margin-left: 10px;
        font-size: 20px;
        color: #fff;
      }
    }

    .header-right {
      display: flex;
      align-items: center;

      .navbar-section {
        display: flex;
        align-items: center;

        .navbar-item {
          position: relative;
          height: 70px;
          line-height: 80px;
          margin: 0 34px;
          padding: 0 4px;
          color: #fff;
          font-size: 20px;
          cursor: pointer;

          &.active::after {
            content: "";
            position: absolute;
            display: block;
            left: 0;
            bottom: -7px;
            width: 100%;
            height: 5px;
            background: #273075;
            border-radius: 10px;
          }
        }
      }

      .user-icon {
        width: 40px;
        height: 40px;
      }
    }
  }

  .content {
    flex: 1;
    height: 0;
  }
}
</style>
