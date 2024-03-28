export interface HospitalResponseData {
  code: number;
  message: string;
  data: Data;
  ok: boolean;
}

export interface Data {
  bookingRule: BookingRule;
  hospital: HospitalDetail;
}

export interface HospitalDetail {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: Param;
  hoscode: string;
  hosname: string;
  hostype: string;
  provinceCode: string;
  cityCode: string;
  districtCode: string;
  address: string;
  logoData: string;
  intro?: any;
  route: string;
  status: number;
  bookingRule?: any;
}

interface Param {
  hostypeString: string;
  fullAddress: string;
}

interface BookingRule {
  cycle: number;
  releaseTime: string;
  stopTime: string;
  quitDay: number;
  quitTime: string;
  rule: string[];
}
