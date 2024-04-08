//统一管理用户模块接口
import request from "@/utils/request"; //通过枚举管理首页模块的接口地址
import type { UserLoginResponseData, loginData } from "./type";
enum API {
  //用户登录接口
  USERLOGIN_URL = "/user/login",
}
//用户登录接口
export const reqUserLogin = (data: loginData) =>
  request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data);
