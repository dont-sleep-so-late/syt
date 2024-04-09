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
    //查询微信扫码结果
    queryState() {
      //开启定时器每隔一段时间问:本地村是都拥有用户信息
      let timer = setInterval((): any => {
        //本地存储已有有数据:扫码成功
        if (GET_TOKEN()) {
          //关闭对话框
          this.visiable = false;
          this.userInfo = JSON.parse(GET_TOKEN() as string);
          clearInterval(timer);
        }
      }, 1000);
    },
  },
  getters: {},
});

export default useUserStore;
