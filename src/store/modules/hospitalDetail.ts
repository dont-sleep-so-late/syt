import { defineStore } from "pinia";
//pinia仓库写法:组合式API 选项是APi
import { HospitalResponseData, Data } from "@/api/hospital/type";
import { DetailState } from "./interface/index";
import { resHospitalDetail } from "@/api/hospital/index";
const useDetailStore = defineStore("Detail", {
  state: (): DetailState => {
    return {
      hospitalInfo: {} as Data,
    };
  },
  actions: {
    async getHospital(hoscode: string) {
      const result: HospitalResponseData = await resHospitalDetail(hoscode);
      if (result.code == 200) {
        this.hospitalInfo = result.data;
      }
    },
  },
  getters: {},
});
export default useDetailStore;
