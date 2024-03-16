import { useEffect, useState } from 'react';
import './styles.css';

export default function ScroolIndicator() {
	const [indicatorWidth, setIndecatorWidth] = useState(0);
	function handelPageScroll() {
		const pageHeight = document.documentElement.clientHeight;
		const scrollHeight = document.documentElement.scrollHeight - pageHeight;
		const scrollTop = document.documentElement.scrollTop;

		setIndecatorWidth((scrollTop / scrollHeight) * 100);
	}

	useEffect(() => {
		window.addEventListener('scroll', handelPageScroll);

		return () => {
			window.removeEventListener('scroll', handelPageScroll);
		};
	}, []);

	return (
		<div className="scroll-indicator-container">
			<h2> Project page</h2>
			<div
				className="scroll-indicator"
				style={{ width: `${indicatorWidth}%` }}
			></div>
		</div>
	);
}
