import tabsInfo from './tabsInfo';
import Tab from './tab';
import './styles.css';
import { useState } from 'react';

export default function Tabs() {
	const [currentTab, setCurrnetTab] = useState(0);
	function changeCurrntTab(index) {
		setCurrnetTab(index);
	}

	return (
		<div className="wrapper flex-column">
			<ul className="tab-container list">
				{tabsInfo && tabsInfo.length > 0
					? tabsInfo.map((tab, index) => (
							<Tab
								myClassName={index === currentTab ? 'active-tab tab' : 'tab'}
								key={tab.label}
								tabInfo={tab}
								handelClick={() => changeCurrntTab(index)}
							/>
					  ))
					: ''}
			</ul>

			<div className="tab-content-container">
				<p>
					{tabsInfo && tabsInfo.length > 0
						? tabsInfo[currentTab].info
						: 'Error NO Active Tab'}
				</p>
			</div>
		</div>
	);
}
