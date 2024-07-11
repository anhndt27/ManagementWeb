import { AxiosResponse } from "axios";
import api from "../../../services/api";

export interface AuthenticationResponseViewModel {
    user: {
        id: number;
        email: string;
        phoneNumber: string;
        userName: string;
        roles: []
    }
    token: string;
}

const apis = {
    login: "Authentication/login",
  };
  
  const API = {
    login: (
        loginInfor: object
    ): Promise<AxiosResponse<AuthenticationResponseViewModel>> =>
      api.post(apis.login, loginInfor),
  };


export default API;