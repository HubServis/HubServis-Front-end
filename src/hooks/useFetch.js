import axios from "axios";
import React, { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(url)
        .then(response => {
            setData(response.data);
        })
        .finally(() => {
            setIsFetching(false);
        })

  }, []);

  return { data, isFetching };
}