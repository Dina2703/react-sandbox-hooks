import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setdata(data);
        setloading(false);
      } catch (error) {
        seterror(error);
        setloading(false);
      }
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}

export default useFetch;
