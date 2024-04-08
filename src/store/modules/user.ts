import { defineStore } from "pinia";

import { reqCode } from "@/api/hospital";
import type {
  UserInfo,
  UserLoginResponseData,
  LoginData,
} from "@/api/user/type";
import { reqUserLogin } from "@/api/user";
import type { UserState } from "./interface";
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from "@/utils/user";
const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      visiable: false,
      code: "",
      userInfo: (JSON.parse(GET_TOKEN() as string) || {}) as UserInfo,
    };
  },
  actions: {
    async getCode(phone: string) {
      var result: any = await reqCode(phone);
      if (result.code == 200) {
        this.code = result.data;
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    async userLogin(LoginData: LoginData) {
      var result: UserLoginResponseData = await reqUserLogin(LoginData);
      if (result.code === 200) {
        this.userInfo = result.data;
        SET_TOKEN(JSON.stringify(this.userInfo));
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    userLogout() {
      this.userInfo = { name: "", token: "" };
      REMOVE_TOKEN();
    },
  },
  getters: {},
});

export default useUserStore;
