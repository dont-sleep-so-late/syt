import { defineStore } from "pinia";
//pinia仓库写法:组合式API 选项是APi
import {
  HospitalResponseData,
  Data,
  HospitalDepartmentResponseData,
  DepartmentData,
} from "@/api/hospital/type";
import { DetailState } from "./interface/index";
import { resHospitalDetail, resDepartment } from "@/api/hospital/index";
const useDetailStore = defineStore("Detail", {
  state: (): DetailState => {
    return {
      hospitalInfo: {} as Data,
      department: {} as DepartmentData,
    };
  },
  actions: {
    async getHospital(hoscode: string) {
      const result: HospitalResponseData = await resHospitalDetail(hoscode);
      if (result.code == 200) {
        this.hospitalInfo = result.data;
      }
    },
    async getDepartment(hoscode: string) {
      const result: HospitalDepartmentResponseData = await resDepartment(
        hoscode
      );
      if (result.code == 200) {
        this.department = result.data;
      }
    },
  },
  getters: {},
});
export default useDetailStore;
