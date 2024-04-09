export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

export interface LoginData {
  phone: string;
  code: string;
}

export interface UserInfo {
  name: string;
  token: string;
}

export interface UserLoginResponseData extends ResponseData {
  data: UserInfo;
}

//
export interface UserCodeResponseData extends ResponseData {
  data: UserCode;
}

interface UserCode {
  redirectUri: string;
  appid: string;
  scope: string;
  state: string;
}
