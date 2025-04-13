import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosLocal from "./useAxiosLocal";

const useMEnu = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((resizeBy) => resizeBy.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);
  const localAxios = useAxiosLocal();
  const {
    data = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await localAxios.get("menu");
      return res.data;
    },
  });
  return [data, loading, refetch];
};
export default useMEnu;
