//统一管理用户模块接口
import request from "@/utils/request"; //通过枚举管理首页模块的接口地址
import type {
  UserLoginResponseData,
  LoginData,
  UserCodeResponseData,
} from "./type";
enum API {
  //用户登录接口
  USERLOGIN_URL = "/user/login",
  //获取微信扫码登录需要参数
  WXLOGIN_URL = "/user/weixin/getLoginParam/",
}
//用户登录接口
export const reqUserLogin = (data: LoginData) =>
  request.post<any, UserLoginResponseData>(API.USERLOGIN_URL, data);

//获取微信扫码登录生成二维码需要参数接口
export const reqWxLogin = (wxRedirectUri: String) =>
  request.get<any, UserCodeResponseData>(
    API.WXLOGIN_URL + `?wxRedirectUri=${wxRedirectUri}`
  );
