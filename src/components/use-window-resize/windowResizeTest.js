import useWindowResize from './useWindowResize';

export default function WindowResizeTest() {
	const { width, height } = useWindowResize();

	return (
		<div className="wrapper flex-column">
			<h2>Your window Size</h2>

			<p> width is {width} pixles</p>
			<p> Height is {height} pixels</p>
		</div>
	);
}
