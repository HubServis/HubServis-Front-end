import { useState, useEffect } from "react";

const fetchAll = async (url, options) => {
  const request = await fetch(url, options);

  const data = await request.json();

  return {
    statusRequest: request,
    data,
  };
};

export function useGetUser(url, permissions) {
  const [user, setUser] = useState(false);
  const [permission, setPermission] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoad(true);

        const requestedDataAsync = await Promise.allSettled([
          fetchAll("http://hubservis.io/api/user", { credentials: "include" }),
          fetchAll("http://hubservis.io/api/user/permissions", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              permissions: permissions,
            }),
          }),
        ]).then((callArray) => callArray);

        if (requestedDataAsync[0].value.statusRequest.status !== 201) {
          setUser(false);
          setPermission(false);
          setLoad(false);
          setError(true);
        } else {
          setUser(requestedDataAsync[0].value.data);
          setPermission(
            requestedDataAsync[1].value.statusRequest.status === 404
              ? true
              : false,
          );
          setError(false);
          setLoad(false);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoad(false);
      }
    };

    getUser();
  }, [url, permissions]);

  return [user, permission, error, load];
}
