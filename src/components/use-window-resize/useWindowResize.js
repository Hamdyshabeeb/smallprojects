import { useLayoutEffect, useState } from 'react';

export default function useWindowResize() {
	const [size, setSize] = useState({ width: 0, height: 0 });

	function handelWindowResize() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		setSize({ width, height });
	}

	useLayoutEffect(() => {
		handelWindowResize();
		window.addEventListener('resize', handelWindowResize);

		return () => {
			window.removeEventListener('resize', handelWindowResize);
		};
	}, []);

	return size;
}
