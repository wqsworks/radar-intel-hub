<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";

const router = useRouter();
const userStore = useUserStore();

const currentNavbar = ref("/supply");
const navbarList = ref([
  {
    name: "供应链数据库",
    path: "/supply",
  },
  {
    name: "技术链数据库",
    path: "/technology",
  },
  {
    name: "政策链数据库",
    path: "/policy",
  },
  {
    name: "金融链数据库",
    path: "/finance",
  },
  {
    name: "海外产业数据情报",
    path: "/overseas",
  },
  {
    name: "特色数据",
    path: "/feature",
  },
   {
    name: "项目挖掘库",
    path: "/mining",
  },
]);

const popperOptions = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 25],
      },
    },
  ],
};

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

const handleLogout = () => {
  userStore.clearUserInfo();
  router.push("/login");
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
        <el-dropdown placement="bottom-start" :popper-options="popperOptions">
          <img class="user-icon" src="../assets/svg/user.svg" alt="user" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item class="user-dropdown-item"
                >个人详情</el-dropdown-item
              >
              <el-dropdown-item class="user-dropdown-item" @click="handleLogout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
          margin: 0 16px;
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
        outline: none;
      }
    }
  }

  .content {
    flex: 1;
    height: 0;
  }
}
</style>
