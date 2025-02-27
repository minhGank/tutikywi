import axios from "axios";
import store from "../redux/index";
import { userAction } from "../redux/userSlice";

//set up default axios request
const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, //store the base URl, so everytime we send a request, we only need to send the path
  withCredentials: true, // include cookies if needed
});

//function for getting new access and new refresh token
const getNewAccessToken = async () => {
  try {
    const res = await API.get(`/auth/getNewAccessToken`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//interceptor for request
API.interceptors.request.use(
  //every time a request happen
  (request) => {
    // it will first get access token from redux store:
    const { accessToken } = store.getState().user;

    //if access token is valid or found in the redux store, add it to the header so backend can take it out for verifying
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//interceptor for response
API.interceptors.response.use(
  //every time a response happen
  (response) => response,
  async (error) => {
    //if a response is an error
    const originalRequest = error.config; //store that config data into a variable,
    // this config includes the url of the original request, method, headers, data,...
    // anything belong to the orignal request
    if (
      error.response && // if the error has response
      error.response.status == 401 && //and the response status is 401 (unauthorized)
      !originalRequest._retry //and the original request havent retried
      //if 3 of this conditions are true then it means the access token in original request is expired,
      // we need to get call the function to get a new access and new refresh token
    ) {
      originalRequest._retry = true; // set the _retry to true so we will know it's gonna already call the original request again
      // after it get the new access token back.
      try {
        const res = await getNewAccessToken(); //call the getNewAccessToken
        if (res.data.status == 401 || res.data.success == false) {
          // if the status is 401 and the success property is false then
          //  it means the old refresh token is invalid or expired
          store.dispatch(userAction.logOut()); //log out the user
          window.location.href = "/login"; //redirect user to login page
          return Promise.reject(new Error("Unauthorized")); //return the error
        }
        if (res.data.success == true) {
          // if getting new tokens is succeed then we can store new access token in redux store
          store.dispatch(userAction.accessTokenReset(res.data.accessToken));
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${res.data.accessToken}`; //add the new acces token in the header authorization property
          return API(originalRequest); //call the original request again
        }
      } catch (error) {
        // catch function
        store.dispatch(userAction.logOut());
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default API; //export the axios configuration
