import { useEffect, useState } from 'react';

export default function useFetch(url, options = {}) {
	const [data, setData] = useState();
	const [error, setError] = useState(null);
	const [status, setStatus] = useState('idle');

	useEffect(() => {
		let doUpdate = true;

		async function fetchingData() {
			try {
				setStatus('loading');
				setError(null);
				setData(undefined);
				const response = await fetch(url, { ...options });
				if (!response.ok) throw new Error(response.statusText);
				const result = await response.json();
				if (doUpdate) {
					setStatus('success');
					setError(null);
					setData(result);
				}
			} catch (error) {
				setStatus('error');
				setError(error);
			}
		}

		fetchingData();

		return () => (doUpdate = false);
	}, [url]);

	return { data, error, status };
}
