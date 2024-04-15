//axios二次封装
//你工作的时候是否axios进行二次封装?二次封装的目的是什么那?
//目的1: 利用axios请求、响应拦截器功能
//日的2: 请求拦截器, 一般可以在请求头中携带公共的参数: token
//目的3: 响应拦截器, 可以简化服务器返回的数据, 处理http网络错误
import useUserStore from "@/store/modules/user";
import axios from "axios";
import { ElMessage } from "element-plus";

//引入用户相关的仓库

//利用axios.crate方法创建一个axios实例：可以设置基础路径、超时的时间的设置
const request = axios.create({
  baseURL: "/api", //请求的基础路径的设置timeout:5000//超时的时间的设置,超出五秒请求就是失败的
  timeout: 5000, // 超时的时间的设置,超出五秒请求就是失败的
});

//请求拦截器
request.interceptors.request.use(
  (config) => {
    //可以通过请求头携带公共参数-token
    //config:请求拦截器回调注入的对象(配置对象),配置对象的身上最终要的一件事情headers属性
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    var userStore = useUserStore();
    if (userStore.userInfo.token) {
      config.headers.token = userStore.userInfo.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
request.interceptors.response.use(
  (response) => {
    //响应拦截器成功的回调,一般会进行简化数据
    return response.data;
  },
  (error) => {
    //处理http网络错误
    const status = error.respose.status;
    switch (status) {
      case 404:
        //错误提示信息
        ElMessage({
          type: "error",
          message: error.message,
        });
        break;
      case 401:
        //错误提示信息
        ElMessage({
          type: "error",
          message: "请求参数有误",
        });
        break;
      case 500 | 501 | 502 | 503 | 504 | 505:
        //错误提示信息
        ElMessage({
          type: "error",
          message: "服务器挂了",
        });
        break;
      default:
        break;
    }
    return Promise.reject(new Error(error.message));
  }
);

export default request;
