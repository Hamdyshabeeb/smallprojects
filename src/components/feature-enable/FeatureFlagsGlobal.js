import { useEffect, useState } from 'react';
import FeatureFlagContext from './context';
import flagsDataService from './data';
import FeatureEnable from './featureEnable';

export default function FeatureFalgGlobal() {
	const [flags, setFlags] = useState({});
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function getFlags() {
			try {
				setLoading(true);
				const response = await flagsDataService();

				if (response) {
					setLoading(false);
					setFlags(response);
				}
			} catch (error) {
				setLoading(false);
				setErr(error.message);
			}
		}

		getFlags();
	}, []);

	if (err) {
		return (
			<div className="wrapper">
				<h2> Error Loading App Features</h2>
				<p> {err}</p>
			</div>
		);
	}

	return (
		<FeatureFlagContext.Provider value={{ loading, flags }}>
			<FeatureEnable />
		</FeatureFlagContext.Provider>
	);
}
