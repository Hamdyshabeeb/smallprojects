import './App.css';
import UseFetchHookTest from './components/fetch-custom-hook/testUseFetch';

import FeatureFalgGlobal from './components/feature-enable/FeatureFlagsGlobal';
import OutsideClickTest from './components/outside-click-hook/outSideClickTest';
import WindowResizeTest from './components/use-window-resize/windowResizeTest';

function App() {
	return (
		<div className="App">
			<FeatureFalgGlobal />
			<UseFetchHookTest />
			<OutsideClickTest />
			<WindowResizeTest />
		</div>
	);
}

export default App;
