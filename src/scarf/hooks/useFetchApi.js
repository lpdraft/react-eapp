import { useEffect, useState } from "react";

export const useFetchApi = (urlEndPoint) => {
  const [stateFetch, setState] = useState({
    data: null,
    isLoading: true,
  });

  const getFetchData = async () => {
    setState({
      ...stateFetch,
      isLoading: true,
    });

    const resp = await fetch(urlEndPoint);
    const data = await resp.json();

    setState({
      data: data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getFetchData();
  }, [urlEndPoint]);

  return {
    data: stateFetch.data,
    isLoading: stateFetch.isLoading,
  };
};
