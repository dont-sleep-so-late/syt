import type { Data, DepartmentData } from "@/api/hospital/type";
//定义仓库内部存储数据state的ts类型
export interface DetailState {
  hospitalInfo: Data;
  department: DepartmentData;
}
