import axios from "axios";
import store from "../redux/index";
import { userAction } from "../redux/userSlice";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true, // include cookies if needed
});

//function for reset the tokens
const getNewAccessToken = async () => {
  try {
    const res = await API.get(`/auth/getNewAccessToken`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//api interceptor for request
API.interceptors.request.use(
  (request) => {
    const { accessToken } = store.getState().user;

    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//api interceptor for response
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status == 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const res = await getNewAccessToken();
        if (res.data.status == 401 || res.data.success == false) {
          store.dispatch(userAction.logOut());
          window.location.href = "/login";
          return Promise.reject(new Error("Unauthorized"));
        }
        if (res.data.success == true) {
          store.dispatch(userAction.accessTokenReset(res.data.accessToken));
        }
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
        return API(originalRequest);
      } catch (error) {
        store.dispatch(userAction.logOut());
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default API;
