import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../services/api";

export const useAxios = ({ url, method, payload, start }) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [isFetching, setIsFetching] = useState(false);
	const [statusCode, setCode] = useState(-1);

	const controllerRef = useRef(new AbortController());
	const cancel = () => {
		controllerRef.current.abort();
	};

	const fetchData = useCallback(async () => {
		if (isFetching) {
			return;
		}

		setIsFetching(true);

		const staticURL = "http://localhost:3000/services/many";

		try {
			const response = await fetch(staticURL, {
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload === undefined ? {} : payload),
				method: method,
			});

			setCode(response.status);

			const text = await response.text();
			const data = JSON.parse(text);
			setData(data);
		} catch (err) {
			setError(err?.message);
			setData({});
		}

		setIsFetching(false);
	}, [data, isFetching, statusCode]);

	useEffect(() => {
		if (start) {
			fetchData();
		}
	}, [start]);

	const refresh = () => {
		fetchData();
	};

	return { cancel, data, error, isFetching, statusCode, refresh };
};

export function usePost({ url, payload, start }) {
	const fetchResult = useAxios({
		url,
		method: "POST",
		payload,
		start,
	});
	return fetchResult;
}
