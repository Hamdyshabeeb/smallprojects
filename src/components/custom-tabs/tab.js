export default function Tab({ handelClick, tabInfo, myClassName }) {
	return (
		<li className={myClassName}>
			<button onClick={handelClick}>{tabInfo.label}</button>
		</li>
	);
}
