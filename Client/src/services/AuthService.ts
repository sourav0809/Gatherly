import axiosInterceptors from "./config";

class AuthService {
  static login = (data: any) => {
    return axiosInterceptors.post("/auth/login", data);
  };
  static register = (data: any) => {
    return axiosInterceptors.post("/auth/register", data);
  };
}

export default AuthService;
