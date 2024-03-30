//统一管理首页模块接口
import request from "@/utils/request"; //通过枚举管理首页模块的接口地址
import type {
  HospitalResponseData,
  HospitalDepartmentResponseData,
} from "./type";

enum API {
  //获取已有的医院的数据接口地址
  HOSPITAL_URL = "/hosp/hospital/",
  //获取某一个医院的科室的数据
  HOSPITALDEPARMENT_URL = "/hosp/hospital/department/",
}
//获取医院的数据
export const resHospitalDetail = (hoscode: string) =>
  request.get<any, HospitalResponseData>(API.HOSPITAL_URL + hoscode);
//获取医院的科室数据
export const resDepartment = (hoscode: string) =>
  request.get<any, HospitalDepartmentResponseData>(
    API.HOSPITALDEPARMENT_URL + `${hoscode}`
  );
// //通过搜索关键字获取医院的数据
// export const reqHospitalInfo = (hosname: string) =>
//   request.get<any, HospitalInfo>(API.HOSPITALINFO_URL + hosname);
