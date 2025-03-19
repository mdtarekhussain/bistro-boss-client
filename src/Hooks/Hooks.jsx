import { useEffect, useState } from "react";

const useMEnu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((resizeBy) => resizeBy.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return [data, loading];
};
export default useMEnu;
