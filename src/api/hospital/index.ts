//统一管理首页模块接口
import request from "@/utils/request"; //通过枚举管理首页模块的接口地址
import type { HospitalResponseData } from "./type";

enum API {
  //获取已有的医院的数据接口地址
  HOSPITAL_URL = "/hosp/hospital/",
  //获取医院的等级与地区接口
  HOSPITALLEVEIANDREGION_URL = "/cmn/dict/findByDictCode/",
  //根据关键字医院的名字获取数据
  HOSPITALINFO_URL = "/hosp/hospital/findByHosname/",
}
//获取医院的数据
export const resHospitalDetail = (hoscode: string) =>
  request.get<any, HospitalResponseData>(API.HOSPITAL_URL + hoscode);
//获取医院的等级或者获取医院地区的数据
// export const reqHospitalLevelAndRegion = (dictCode: string) =>
//   request.get<any, HospitalLevelAndRegionResponseData>(
//     API.HOSPITALLEVEIANDREGION_URL + `${dictCode}`
//   );
// //通过搜索关键字获取医院的数据
// export const reqHospitalInfo = (hosname: string) =>
//   request.get<any, HospitalInfo>(API.HOSPITALINFO_URL + hosname);
