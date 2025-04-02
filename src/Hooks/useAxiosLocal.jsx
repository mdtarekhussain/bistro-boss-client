import axios from "axios";

const localAxios = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosLocal = () => {
  return localAxios;
};

export default useAxiosLocal;
