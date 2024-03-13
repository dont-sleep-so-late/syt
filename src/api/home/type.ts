//定义首页模块ts数据类型
export interface ResponseData {
  code: number,
  message: string,
  ok: boolean,
}

//医院已有数据类型
export interface Hospital {
  id: string,
  createTime: string,
  updateTime: string,
  isDeleted: number,
  param: Param,
  hoscode: string,
  hosname: string,
  hostype: string,
  provinceCode: string,
  cityCode: string,
  districtCode: string,
  address: string,
  logoData: string,
  intro?: any,
  route: string,
  status: number,
  bookingRule: BookingRule,
}

interface BookingRule {
  cycle: number,
  releaseTime: string,
  stopTime: string,
  quitDay: number,
  quitTime: string,
  rule: string[],
}

interface Param {
  hostypeString: string,
  fullAddress: string,
}

//存储全部已有医院的数组类型
export type Content = Hospital[]

//获取已有医院接口返回的数据ts类型
export interface HospitalResponseData extends ResponseData {
  data: {
    content: Content,
    pageable: Pageable,
    totalPages: number,
    totalElements: number,
    last: boolean,
    first: boolean,
    sort: Sort,
    numberOfElements: number,
    size: number,
    number: number,
    empty: boolean,
  }
}


interface Pageable {
  sort: Sort,
  pageNumber: number,
  pageSize: number,
  offset: number,
  paged: boolean,
  unpaged: boolean,
}

interface Sort {
  sorted: boolean,
  unsorted: boolean,
  empty: boolean,
}


//代表医院等级或者地区数据ts类型
export interface HospitalLevelAndRegion {
  createTime: string;
  dictCode: string;
  hasChildren: boolean;
  id: number;
  isDeleted: number;
  name: string;
  param: {};
  parentId: number;
  updateTime: string;
  value: string;
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];
//获取等级或医院地区接口返回数据类型
export interface HospitalLevelAndRegionResponseData extends HospitalLevelAndRegion {
  data: HospitalLevelAndRegionArr
}

export interface HospitalInfo extends ResponseData {
  data: Content
}