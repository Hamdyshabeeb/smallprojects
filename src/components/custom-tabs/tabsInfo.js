const tabsInfo = [
	{
		label: 'tab1',
		info: 'This is content for Tab1',
	},
	{
		label: 'tab2',
		info: 'This is content for Tab2',
	},
	{
		label: 'tab3',
		info: <Tab3Generator />,
	},
];

function Tab3Generator() {
	return (
		<div>
			this is content for <i>Tab4</i>
		</div>
	);
}

export default tabsInfo;
