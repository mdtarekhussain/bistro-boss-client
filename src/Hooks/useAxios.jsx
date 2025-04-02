import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxios = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("req the config", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      const status = error.response.status;
      console.log("this error  sattus", status);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxios;
