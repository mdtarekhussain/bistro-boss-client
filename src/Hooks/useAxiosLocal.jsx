import axios from "axios";

const localAxios = axios.create({
  baseURL: "https://bistro-boss-server-k4uu.vercel.app/",
});

const useAxiosLocal = () => {
  return localAxios;
};

export default useAxiosLocal;
