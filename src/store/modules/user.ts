import { defineStore } from "pinia";

interface UserInfo {
  username: string;
  password: string;
}

const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: {
      username: "",
      password: "",
    },
  }),
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    },
    clearUserInfo() {
      this.userInfo = {
        username: "",
        password: "",
      };
    },
  },
});

export default useUserStore;
