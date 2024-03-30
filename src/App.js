import './App.css';
import UseFetchHookTest from './components/fetch-custom-hook/testUseFetch';

import FeatureFalgGlobal from './components/feature-enable/FeatureFlagsGlobal';

function App() {
	return (
		<div className="App">
			<FeatureFalgGlobal />
			<UseFetchHookTest />
		</div>
	);
}

export default App;
