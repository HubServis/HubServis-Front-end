import axios from "axios";
import React, { useState, useEffect } from "react";
import { APIBASEURL } from "../utils/loadConfigs";

const api = axios.create({
    baseURL: APIBASEURL
})

export function useFetch(url, options = {}) {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    api.get(url, options)
        .then(response => {
            setData(response.data);
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })

  }, []);

  return { data, error, isFetching };
}